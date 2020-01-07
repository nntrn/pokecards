import React from 'react'
import { getNdexId, getPokemonName, getSpriteImgUrl } from './utils/pokedex'

export default function Input(props) {
  return (
    <input {...props} name="pokemonId" type="number" value={props.value}/>
  )
}

Input.defaultProps = {
  min: 1,
  max: 890,
  maxlength: "3",
  type:'number',
  style: {

    margin: 0,
    padding:0
  }
}
