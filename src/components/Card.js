import React, { useState } from 'react'

import Input from './Input'
import Button from './Button'
import Sprite from './Sprite'
import IV from './IV'

import { getGalarDataById } from '../data/galar-data'

export default function Card(props) {
  const [value, setValue] = React.useState(props.id)
  const [newValue, setNewValue] = React.useState(props.id)
  const [lock, setLock] = React.useState(false)

  const handleChange = event => {
    if (event.target.value && Number.isInteger(parseInt(event.target.value))) {
      setValue(event.target.value)
    }
    setNewValue(event.target.value)
  }

  const handleLock = () => {
    setLock(lock ? false : true)
  }

  const handleDelete = event => {
    event.target.parentElement.remove()
  }

  const getPokemon = value => {
    return getGalarDataById(value)
  }

  return (
    <div {...props} className="pokecard" key={value}>
      <Button className="delete" onClick={e => handleDelete(e)} text="X" />
      <div className="flex flex-wrap space-between">
        <h1 className="name">{getPokemon(value).name}</h1>
        <div className="flex w50">
          <Input onChange={e => handleChange(e)} value={newValue} disabled={lock} />
          <button className={`lock ${lock}`} onClick={() => handleLock()}>
            {lock ? 'unlock' : 'lock'}
          </button>
        </div>
        <div className="types">
          {getPokemon(value).types.map(type => (
            <span className={`type ${type.toLowerCase()}`}>{type}</span>
          ))}
        </div>
      </div>

      <div className="flex space-between flex-wrap">
        <Sprite id={value} />
        <div class="moveset">moveset</div>
        <div className="flex column">
          <div>Nature</div>
          <IV base={getPokemon(value).base_stats}></IV>
          <div className="total">
            <strong>Total: </strong>
            <span> {getPokemon(value).base_stats.reduce((a, b) => a + b, 0)}</span>
          </div>
        </div>
      </div>

      <details>{JSON.stringify(getGalarDataById(props.id))}</details>
    </div>
  )
}

Card.defaultProps = {
  style: {
    width: '80vw',
    margin: '1.25rem auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '1rem',
    position: 'relative'
  }
}
