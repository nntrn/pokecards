import React from 'react'

export default function Input(props) {
  return <input {...props} min={props.min} max={props.max} />
}

Input.defaultProps = {
  min: 1,
  max: 401,
  maxLength: '3',

  type: 'number',
  style: {
    margin: 0,
    fontSize: 'inherit'
  }
}
