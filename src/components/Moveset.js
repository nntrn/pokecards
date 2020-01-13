import React, { useState } from 'react'
import { movesByPokemon, movesData } from '../data/moveslist'
import { typeIcon } from '../data/pokemon'

import '../styles/moves.scss'

function MoveType(props) {
  return (
    <svg width="15" height="15" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={typeIcon[props.type].svg}
        fill="white"
      />
    </svg>
  )
}

function Dropdown(props) {
  const header = ['name', 'category', 'power', 'PP']
  return (
    <div {...props}>
      <table>
        <thead>
          <tr>
            {header.map(h => (
              <th>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.moves.map(m => {
            let move = movesData[m] || []
            return (
              <tr
                key={move.name}
                style={{
                  background: typeIcon[move.type.toLowerCase()].color,
                  width: '100%',
                  border: '5px solid #000'
                }}
              >
                {header.map(e => (
                  <td>{move[e]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Dropdown.defaultProps = {
  moves: ['Growl', 'Tackle', 'Tackle', 'Quick Attack'],
  className: 'dropdown',
  style: {
    height: '200px',
    overflow: 'scroll',
    fontSize: '.8em',
    flexGrow: 3
  }
}

export default function Moveset(props) {
  return <Dropdown moves={movesByPokemon[props.pokemon]} />
}

Moveset.defaultProps = {}
