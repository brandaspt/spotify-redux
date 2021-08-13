import ContentSection from "./ContentSection/ContentSection"
import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <Container>
      <ContentSection type="album" />
      <ContentSection type="track" />
      <ContentSection type="artist" />
    </Container>
  )
}

export default Home
