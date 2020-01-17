import React from 'react'
import { TypeStyle } from './style'
import { typeColor } from '../data/pokemon'

export default function Type(props) {
  const defaultStyle = {
    ...TypeStyle,
    background: typeColor[props.type.toLowerCase()],
    ...props.style,
  }

  return (
    <span {...props} style={defaultStyle}>
      <span className="text">{props.type}</span>
    </span>
  )
}

Type.defaultProps = {
  type: 'Normal'
}
