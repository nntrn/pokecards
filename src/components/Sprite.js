import React from 'react'
import { getNdexId, getPokemonName, getSpriteImgUrl } from './utils/pokedex'

export default function Sprite(props) {
  return (
    <div>
      <img {...props} src={getSpriteImgUrl(props.id)} />
    </div>
  )
}

Sprite.defaultProps = {
  style: {
    width: '160px',
    minHeight:'160px',
    opacity: '.9',
    filter:'saturate(2) drop-shadow(#000 -.5px 0px 0.04px) contrast(1.2)'
  }
}
