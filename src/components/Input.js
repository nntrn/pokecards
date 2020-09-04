import React from 'react'
import { InputStyle } from './style'

const Input = props => {
  return <input {...props} />
}

Input.defaultProps = {
  min: 1,
  max: 401,
  maxLength: 3,
  type: 'number',
  autoCorrect: 'off',
  autoComplete: 'off',
  spellCheck: 'false',
  style: {
    margin: 0,
    fontSize: 'inherit',
    border: '1px solid #ddd'
  }
}

export default Input
