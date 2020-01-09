import React from 'react'
import { TypeStyle } from './style'

const typeColor = {
  fire: '#d52100',
  water: '#0080ff',
  electric: '#c90',
  grass: '#5cb737',
  ice: '#0af',
  fighting: '#a84d3d',
  poison: '#88447a',
  ground: '#bf9926',
  flying: '#556dff',
  psychic: '#ff227a',
  bug: '#83901a',
  rock: '#a59249',
  ghost: '#5454b3',
  dragon: '#4e38e9',
  dark: '#573e31',
  steel: '#8e8ea4',
  fairy: '#e76de7',
  normal: '#a8a878'
}

export default function Type(props) {
  const defaultStyle = {
    ...TypeStyle,
    ...props.style,

    background: typeColor[props.type.toLowerCase()]
  }

  return (
    <span {...props} style={defaultStyle}>
      {props.type}
    </span>
  )
}

Type.defaultProps = {
  type: 'Normal'
}
