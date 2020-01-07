import React from 'react'
import { getNdexId, getPokemonName } from './utils/pokedex'
import {toJadenCase} from './utils/strings'

export default function Name(props) {
  // const { id } = props
  return (
      <h1>{toJadenCase(getPokemonName(props.id))}</h1>

  )
}
