import React from 'react'

export default function Input(props) {
  return <input {...props} />
}

Input.defaultProps = {
  // min: 1,
  // max: 401,
  // maxLength: '3',

  type: 'number',
  style: {
    margin: 0,
    padding: '.5rem',
    fontSize: 'inherit',
    width: '50px'
  }
}
