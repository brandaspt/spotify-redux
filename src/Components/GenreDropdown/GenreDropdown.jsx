import { useEffect } from "react"
import { useState } from "react"
import { Form } from "react-bootstrap"

import "./GenreDropdown.css"
import { fetchGenresObj } from "../../assets/fetch"

const GenreDropdown = props => {
  const [genresObj, setGenresObj] = useState({})

  useEffect(() => {
    fetchGenresObj(setGenresObj)
  }, [])

  return (
    <Form.Group className="d-inline-block my-3">
      <Form.Control className="d-inline-block" size="sm" as="select" onChange={e => props.onGenreChange(genresObj[e.currentTarget.value])}>
        {Object.keys(genresObj) && Object.keys(genresObj).map(genre => <option key={genresObj[genre]}>{genre}</option>)}
      </Form.Control>
    </Form.Group>
  )
}

export default GenreDropdown
