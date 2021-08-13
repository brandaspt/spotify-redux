import { useEffect, useState } from "react"
import { fetchChart } from "../../../assets/fetch"
import GenreDropdown from "../../GenreDropdown/GenreDropdown"
import ContentGrid from "../ContentGrid/ContentGrid"

import "./ContentSection.css"

const ContentSection = props => {
  const [contentData, setContentData] = useState([])
  const [genre, setGenre] = useState(0)

  useEffect(() => {
    fetchChart(props.type, genre, setContentData)
  }, [genre, props.type])

  return (
    <section className="content-section">
      <h2 className="mt-4 mb-0">{`Top ${props.type}s`}</h2>
      <GenreDropdown onGenreChange={newGenre => setGenre(newGenre)} />
      <ContentGrid type={props.type} data={contentData} />
    </section>
  )
}

export default ContentSection
