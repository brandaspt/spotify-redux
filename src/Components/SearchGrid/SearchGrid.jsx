import { useEffect, useState } from "react"
import { Container, InputGroup, FormControl } from "react-bootstrap"
import ContentGrid from "../Home/ContentGrid/ContentGrid"
import "./SearchGrid.css"

const SearchGrid = () => {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    if (query.length > 2) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
            method: "GET",
            headers: {
              "x-rapidapi-key": "7d208f71b8mshfd6cd40bfde572fp107ab9jsnfda73eb5809a",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          })
          if (response.ok) {
            const data = await response.json()
            console.log(data)
            if (data.error) {
              fetchData()
            } else {
              setData(data.data)
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    }
  }, [query])

  return (
    <Container className="search-grid">
      <h2 className="text-white my-4">Search</h2>
      <InputGroup className="mb-3 d-block">
        <FormControl className="mx-auto" placeholder="Search..." value={query} onChange={e => setQuery(e.currentTarget.value)} />
      </InputGroup>
      {data.length > 0 && <ContentGrid data={data} type="track" />}
    </Container>
  )
}

export default SearchGrid
