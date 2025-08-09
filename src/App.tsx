import { useState, useEffect } from 'react'
import Header from './components/Header'
import { fetchCountries } from './utils/api'
import type { Country } from './types'
import CountryItem from './components/CountryItem'

export default function App() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries()
      setCountries(data as Country[])
    }
    getCountries()
  }, [])
  return (
    <>
      <Header />
      <main className="p-8">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <CountryItem key={country.alpha3Code} country={country} />
          ))}
        </section>
      </main>
    </>
  )
}
