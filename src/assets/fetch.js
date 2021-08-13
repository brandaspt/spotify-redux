export const fetchGenresObj = async callback => {
  window.DZ.api(`/genre`, function (response) {
    const genresObj = response.data.reduce((acc, curr) => {
      return { ...acc, [curr.name]: curr.id }
    }, {})
    console.log(genresObj)
    callback(genresObj)
  })
}

export const fetchAlbumById = (id, callback) => {
  window.DZ.api(`/album/${id}`, function (response) {
    callback(response)
  })
}

export const fetchArtistById = (id, callback) => {
  window.DZ.api(`/artist/${id}`, function (response) {
    callback(response)
  })
}

export const fetchArtistTopTracks = (id, callback) => {
  window.DZ.api(`/artist/${id}/top?limit=5`, function (response) {
    callback(response.data)
  })
}

export const fetchArtistAlbums = (id, callback) => {
  window.DZ.api(`/artist/${id}/albums`, function (response) {
    callback(response.data)
  })
}

export const fetchChart = (contentType, genre, callback) => {
  window.DZ.api(`/chart/${genre}/${contentType}s`, function (response) {
    callback(response.data)
  })
}
