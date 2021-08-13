import { Row } from "react-bootstrap"

import TrackCard from "../../MediaCards/TrackCard"
import AlbumCard from "../../MediaCards/AlbumCard"
import ArtistCard from "../../MediaCards/ArtistCard"

const ContentGrid = props => {
  const buildContentCards = () => {
    let cards

    switch (props.type) {
      case "track":
        cards = props.data.slice(0, 12).map(trackObj => <TrackCard key={trackObj.id} type={props.type} trackObj={trackObj} />)
        break
      case "artist":
        cards = props.data.slice(0, 12).map(artistObj => <ArtistCard key={artistObj.id} type={props.type} artistObj={artistObj} />)
        break
      case "album":
        cards = props.data.slice(0, 12).map(albumObj => <AlbumCard key={albumObj.id} type={props.type} albumObj={albumObj} />)
        break
      default:
        break
    }

    return cards
  }

  return <Row>{buildContentCards()}</Row>
}

export default ContentGrid
