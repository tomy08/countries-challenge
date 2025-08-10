const API_URL = 'https://restcountries.com/v3.1'

export const fetchCountries = async () => {
  const response = await fetch(
    `${API_URL}/all?fields=name,capital,population,region,flags,cca3`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }
  return response.json()
}

export const fetchCountryByCode = async (code: string) => {
  const response = await fetch(`${API_URL}/alpha/${code}`)
  if (!response.ok) {
    throw new Error(`Country with code ${code} not found`)
  }
  return response.json()
}
