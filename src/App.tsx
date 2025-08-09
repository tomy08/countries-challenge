import { useState, useEffect } from 'react'
import Header from './components/Header'
import { fetchCountries } from './utils/api'
import type { Country } from './types'

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
            <div
              className="px-4 pb-12 m-4 shadow-lg rounded-lg min-h-64 dark:text-white"
              key={country.alpha3Code}
            >
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name}`}
                className="w-full aspect-video object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{country.name}</h2>
              <p>
                <strong>Population:</strong>{' '}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
