import React, { useState } from 'react'
import { movesByPokemon, movesData } from '../data/moveslist'
import { typeColor } from '../data/pokemon'

function Move(props) {
  return (
    <div {...props}>
      <div className="move-name">Move</div>
      <div className="move-pp">PP</div>
    </div>
  )
}

Move.defaultProps = {
  className: 'move',
  style: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: '.45rem .75rem',
    margin: '.25rem',
    borderRadius: '15px',
    background: '#000'
  }
}

function Dropdown(props) {
  return (
    <div {...props}>
      {props.moves.map(m => {
        let move = movesData[m]
        return (
          <div
            key={move.name}
            className="move-item flex space-between"
            style={{
              background: typeColor[move.type.toLowerCase()],
              width: '100%',
              padding: '.25rem'
            }}
          >
            <div>{move.name}</div>
            <div>{move.PP}</div>
          </div>
        )
      })}
    </div>
  )
}

Dropdown.defaultProps = {
  className: 'dropdown',
  style: {
    width: '100%',
    height: '150px',
    overflow: 'scroll',
    fontSize: '.8em'
  }
}

export default function Moveset(props) {
  const [dropdown, setDropdown] = React.useState(true)
  const [pos, setPos] = React.useState(35)

  const handlePopup = pos => {
    let position = 30 * parseInt(pos) + 8 * parseInt(pos)

    setDropdown(!dropdown)
    setPos(position)
  }

  return (
    <div {...props}>
      <Move onClick={e => handlePopup(1)} />
      <Move onClick={e => handlePopup(2)} />
      <Move onClick={e => handlePopup(3)} />
      <Move onClick={e => handlePopup(4)} />

      <div
        style={{ width: '100%', position: 'absolute', marginTop: `${pos}px` }}
        hidden={dropdown}
      >
        <Dropdown moves={movesByPokemon[props.pokemon]} />
      </div>
    </div>
  )
}

Moveset.defaultProps = {
  className: 'moveset',
  style: {
    flexGrow: 2,
    position: 'relative'
  }
}
