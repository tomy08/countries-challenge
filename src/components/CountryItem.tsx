import type { Country } from '../types'
export default function CountryItem({ country }: { country: Country }) {
  return (
    <a
      className="px-4 pb-12 m-4 shadow-lg rounded-lg min-h-64 dark:text-white"
      key={country.alpha3Code}
      href={`/countries/${country.alpha3Code}`}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
        className="w-full aspect-video object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{country.name}</h2>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
    </a>
  )
}
