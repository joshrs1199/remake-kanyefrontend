import React from 'react';
import AlbumCard from '../components/AlbumCard'

const AlbumContainer = (props) => {

  let mapCard = props.albums.map((album) => {
    console.log(album)
    return <AlbumCard album={album}/>
  })

  return (
    <div>
      {mapCard}
    </div>
  )

}

export default AlbumContainer;