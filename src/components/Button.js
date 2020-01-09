import React from 'react'
import { ButtonStyle } from './style'

export default function Button(props) {
  const defaultStyle = {
    ...ButtonStyle,
    ...props.style
  }

  return (
    <button {...props} style={defaultStyle} data-active={props.active}>
      {props.children}
      {props.text}
    </button>
  )
}

Button.defaultProps = {
  active: 'true'
}
