import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { fetchCountries } from '@/utils/api'
import type { Country } from '@/types'
import CountryItem from '@/components/CountryItem'

export default function Main() {
  const [allCountries, setAllCountries] = useState<Country[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [inputValue, setInputValue] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries()
      setAllCountries(data as Country[])
      setCountries(data as Country[])
    }
    getCountries()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    let filtered = allCountries

    if (selectedRegion && selectedRegion !== 'all') {
      filtered = filtered.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase()
      )
    }

    if (inputValue.trim() !== '') {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
    }

    setCountries(filtered)
  }

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setSelectedRegion(region)

    let filtered = allCountries

    if (region && region !== 'all') {
      filtered = filtered.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      )
    }

    if (inputValue.trim() !== '') {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
    }

    setCountries(filtered)
  }

  return (
    <>
      <Header />
      <main className="p-8">
        <section className="flex flex-col sm:flex-row justify-between  items-center mt-4 mb-8">
          <form className="ml-1 sm:ml-8" onSubmit={handleSearch}>
            <button className="p-2 rounded-l text-grey-400 bg-white dark:text-white dark:bg-blue-900">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              placeholder="Search for a country..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-2 border-none rounded-r text-grey-400 bg-white dark:text-white dark:bg-blue-900 focus:outline-none"
            />
          </form>
          <div className="mr-4">
            <select
              className="p-2 rounded text-grey-400 bg-white dark:text-white dark:bg-blue-900"
              onChange={handleRegionChange}
              value={selectedRegion}
            >
              <option value="" disabled hidden>
                Filter by Region
              </option>
              <option value="all">All</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, i) => (
            <CountryItem key={i} country={country} />
          ))}
        </section>
      </main>
    </>
  )
}
