import React, { useState } from 'react'
import Name from './Name'
import Input from './Input'
import Sprite from './Sprite'
import { getpokedata } from '../data/pokedata'


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

  return (
    <div {...props} className="pokecard">
      <button className="delete" onClick={e => handleDelete(e)}>
        X
      </button>
      <div className="flex flex-wrap space-between">
        <Name id={value} />
        <div className="flex column w50">
          <Input
            name="pokemonId"
            onChange={e => handleChange(e)}
            value={newValue}
            disabled={lock}
          />
          <button class={`lock ${lock}`} onClick={() => handleLock()}>
            {lock ? 'lock' : 'unlock'}
          </button>
        </div>
      </div>
      <Sprite id={value} />
     
      <div className="white-space">{JSON.stringify(getpokedata(parseInt(value))).replace(/\"\]\,/g,'"],\n')}</div>
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
    position:'relative'
  }
}
