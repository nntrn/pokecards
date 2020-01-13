import React from 'react'
import { getGalarDataById } from '../data/galar-data'

import { SpriteStyle } from './style'

function replaceString(str, replaceWith = {}) {
  Object.keys(replaceWith).forEach(e => {
    const re = new RegExp(`\\[\\@${e}\\]`, 'g')
    str = str.replace(re, replaceWith[e])
  })
  return str
}

function getSpriteImgUrl(props) {
  const pokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/[@id].png'
  const serebii = 'https://www.serebii.net/swordshield/pokemon/[@id].png'

  const id = props.id.toString().padStart(3, 0)

  if (props.id > 809) {
    return replaceString(serebii, { id: id })
  }

  return replaceString(pokemon, { id: id })
}

export default function Sprite(props) {
  const pokedat = getGalarDataById(props.id)

  return (
    <img
      {...props}
      style={SpriteStyle}
      src={getSpriteImgUrl(pokedat)}
      alt={pokedat.name}
    />
  )
}

Sprite.defaultProps = {}
