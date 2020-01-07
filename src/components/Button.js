import React from 'react'

export default function Button(props) {
  return (
    <button {...props} name="pokemonId" type="number" value={props.value}>
      {props.children}
      <span>{props.text}</span>
    </button>
  )
}

Button.defaultProps = {
  min: 1,
  max: 400,
  maxLength: '3',
  type: 'number',
  style: {
    margin: 0,
    padding: 0
  }
}
