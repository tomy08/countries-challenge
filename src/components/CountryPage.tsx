import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { fetchCountryByCode } from '@/utils/api'
import Header from './Header'

export default function Country() {
  const { code } = useParams()
  const [country, setCountry] = useState<any>()

  useEffect(() => {
    const getCountry = async () => {
      if (code) {
        const data = await fetchCountryByCode(code)
        setCountry(data[0])
      }
    }
    getCountry()
  }, [code])

  return (
    <div className="gap-4">
      <Header />
      <div className="sm:py-16 py-8 pl-8 ">
        <a
          href="/"
          className="px-6 py-2 bg-white dark:bg-blue-950 shadow-md rounded-sm dark:text-white"
        >
          &larr; Back
        </a>
      </div>

      {country ? (
        <div className="p-4 flex item-start lg:justify-around flex-col lg:flex-row lgitems-center dark:text-white md:text-lg text-md">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="lg:w-[600px] md:w-[70%] w-[80%] h-auto mb-4 shadow-md"
          />
          <div className="lg:ml-8 flex flex-col">
            <h1 className="font-bold lg:text-4xl text-2xl mb-8">
              {country.name.common}
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 ">
              <li>
                <strong>Official Name:</strong> {country.name.official}
              </li>
              <li>
                <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
              </li>
              <li>
                <strong>Population:</strong>{' '}
                {country.population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {country.region}
              </li>
              <li>
                <strong>Subregion:</strong> {country.subregion || 'N/A'}
              </li>
              <li>
                <strong>Top Level Domain:</strong>{' '}
                {country.tld ? country.tld.join(', ') : 'N/A'}
              </li>
              <li>
                <strong>Languages:</strong>{' '}
                {country.languages
                  ? Object.values(country.languages).join(', ')
                  : 'N/A'}
              </li>
              <li>
                <strong>Currencies:</strong>{' '}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((cur) => cur.name)
                      .join(', ')
                  : 'N/A'}
              </li>
            </ul>
            {country.borders && country.borders.length > 0 && (
              <div className="mt-16 flex flex-col sm:flex-row item-start sm:items-center">
                <strong className="mr-4">Border Countries:</strong>
                {'  '}
                <div className="gap-x-4 sm:mt-0 mt-2">
                  {country.borders.map((borderCode: string) => (
                    <span className="bg-white dark:bg-blue-950 shadow-md px-4 py-1 mr-2 rounded-sm">
                      {borderCode}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  )
}
