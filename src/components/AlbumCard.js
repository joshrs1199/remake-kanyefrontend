import React from 'react'

const AlbumCard = (props) => {
  return (
    <div>
      <img src={props.album.cover} alt='Cover' height='150px' width='150px'/>
      <h3>{props.album.name}</h3>
      <p>{props.album.votes}</p>
    </div>
  )
}

export default AlbumCard;