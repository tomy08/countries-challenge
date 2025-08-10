import { useParams } from 'react-router-dom'

export default function Country() {
  const { code } = useParams()

  return <div>País seleccionado: {code}</div>
}
