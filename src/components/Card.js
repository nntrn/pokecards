import React, { useState } from 'react'

import Input from './Input'
import Button from './Button'
import Sprite from './Sprite'
import Type from './Type'
import Moveset from './Moveset'
import Abilities from './Abilities'
import StatCalculator from './StatCalculator'

import { getGalarDataById } from '../data/galar-data'
import { CardStyle, LevelStyle } from './style'

export default function Card(props) {
  const { nature } = props
  const [value, setValue] = React.useState(props.id)
  const [newValue, setNewValue] = React.useState(props.id)
  const [lock, setLock] = React.useState(false)
  const [level, setLevel] = React.useState(props.level)

  const handleChange = event => {
    if (event.target.value && Number.isInteger(parseInt(event.target.value))) {
      if (parseInt(event.target.value) > 0 && parseInt(event.target.value) < 401)
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
    <div {...props} id={value} style={{ ...CardStyle, ...props.style }}>
      <Button className="delete" onClick={e => handleDelete(e)} text="X" active={!lock} />
      <div className="flex flex-wrap space-between">
        <h1>{getPokemon(value).name}</h1>
        <div className="flex">
          <Input onChange={e => handleChange(e)} value={newValue} disabled={lock} />
          <button className={`lock ${lock}`} onClick={() => handleLock()}>
            {lock ? 'unlock' : 'lock'}
          </button>
        </div>
        <div className="types">
          {getPokemon(value).types.map(type => (
            <Type key={type} type={type} />
          ))}
        </div>
        <Abilities abilities={getPokemon(value).abilities} />
      </div>

      <div className="flex space-between flex-wrap box">
        <div className="flex column no-select" style={{ flexGrow: 0 }}>
          <Sprite id={value} />
          <div className="level">
            <label>Lvl. &nbsp;</label>
            <input
              type="number"
              min="1"
              max="100"
              defaultValue={level}
              style={LevelStyle}
              onChange={e => setLevel(e.target.value)}
              disabled={lock}
            />
          </div>
        </div>

        <StatCalculator
          base={getPokemon(value).base_stats}
          nature={nature}
          disabled={lock}
          level={level}
        />

        <Moveset pokemon={getPokemon(value).name} />
      </div>

      <details>{JSON.stringify(getGalarDataById(value))}</details>
    </div>
  )
}

Card.defaultProps = {
  id: 57,
  level: 100,
  nature: 'Quirky'
}
