import React from 'react'

import Input from './Input'
import Icon from './Icon'
import Sprite from './Sprite'
import Type from './Type'
import Moveset from './Moveset'
import Abilities from './Abilities'
import StatCalculator from './StatCalculator'
import Flex from './Flex'

import { getGalarDataById } from '../data/galar-data'
import { CardStyle } from './style'

export default function Card(props) {
  const { nature } = props
  const [ value, setValue ] = React.useState(props.gdex)
  const [ newValue, setNewValue ] = React.useState(props.gdex)
  const [ lock, setLock ] = React.useState(false)
  const [ level, setLevel ] = React.useState(props.level)

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

  const getPokemon = value => {
    return getGalarDataById(value)
  }

  const svg = {
    locked:
      'M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zM9 7a3 3 0 016 0v3H9V7zm4 10.7V20h-2v-2.3a2 2 0 01.6-3.7 2 2 0 011.4 3.7z',
    unlocked:
      'M17 8V7A5 5 0 007 7v3H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2v-8a2 2 0 00-2-2H9V7a3 3 0 016 0v1h2z'
  }

  return (
    <div {...props} style={{ ...CardStyle, ...props.style }} data-locked={lock}>
      <Flex wrap="wrap">
        <Flex direction="column" flexGrow="1">
          <h1 className="pokemon-name">{getPokemon(value).name}</h1>
          <div className="types p50 padding-bottom">
            {getPokemon(value).types.map(type => (
              <Type key={type} type={type} style={{ color: 'black' }} />
            ))}
          </div>
        </Flex>
        <Abilities
          abilities={getPokemon(value).abilities}
          id={props.id}
          disabled={lock}
        />
      </Flex>

      <div className="flex absolute top right" style={{ margin: '10px' }}>
        <Input
          onChange={e => handleChange(e)}
          className="center"
          value={newValue}
          disabled={lock}
        />
        <button className={`lock ${lock}`} onClick={() => handleLock()}>
          <Icon
            path={lock ? svg.locked : svg.unlocked}
            fill={lock ? '#f1c40f' : '#bdc3c7'}
          />
        </button>
      </div>

      <Flex className="box m50 margin-top" justifyContent="space-between" wrap="wrap">
        <Flex className="no-select" direction="column">
          <Sprite id={value} />
          <div className="level">
            <label>Lvl. &nbsp;</label>
            <Input
              type="number"
              data-store="level"
              min="1"
              max="100"
              defaultValue={level}
              onChange={e => setLevel(e.target.value)}
              disabled={lock}
            />
          </div>
        </Flex>

        <StatCalculator
          base={getPokemon(value).base_stats}
          nature={nature}
          disabled={lock}
          level={level}
        />

        <Moveset pokemon={getPokemon(value).name} />
      </Flex>

      <>{props.children}</>
    </div>
  )
}

Card.defaultProps = {
  className: 'pokecard',
  gdex: 57,
  level: 100,
  nature: 'Quirky'
}
