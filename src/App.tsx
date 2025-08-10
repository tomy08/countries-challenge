import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/components/HomePage'
import Country from '@/components/CountryPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
