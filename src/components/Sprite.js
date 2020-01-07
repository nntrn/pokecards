import React from 'react'
import { getGalarDataById, getSpriteImgUrl } from '../data/galar-data'

export default function Sprite(props) {
  const pokedat = getGalarDataById(props.id)

  return (
    <div title={pokedat.name}>
      <img {...props} src={getSpriteImgUrl(pokedat.id)} alt={pokedat.name} />
    </div>
  )
}

Sprite.defaultProps = {
  style: {
    width: '160px',
    minHeight: '160px',
    marginTop: '.5rem',
    opacity: '.9',
    filter: 'saturate(2) drop-shadow(#000 -.5px 0px 0.04px) contrast(1.2)'
  }
}
