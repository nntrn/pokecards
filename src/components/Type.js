import React from 'react'
import { TypeStyle } from './style'
import { typeColor } from '../data/pokemon'

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
