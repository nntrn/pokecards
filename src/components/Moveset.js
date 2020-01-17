import React from 'react'
import { movesByPokemon, movesData } from '../data/moveslist'
import { pokeTypes, moveCategories } from '../data/pokemon'

import '../styles/moves.scss'

function MoveCategory(props) {
  const category = {
    ...moveCategories.status,
    ...moveCategories[props.category.toLowerCase()]
  }

  return (
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={category.viewbox} width="24">
        {category.paths.map((e, i) => (
          <path d={e} fill={category.fill} key={props.name + i} />
        ))}
      </svg>
      <span hidden>{props.category}</span>
    </div>
  )
}

export default function Moveset(props) {
  const moves = movesByPokemon[props.pokemon]
  const header = ['name', 'category', 'accuracy', 'power', 'PP']
  return (
    <div {...props}>
      <table>
        <thead>
          <tr>
            {header.map(h => {
              return <th key={'header_' + h} title={h}>{h.length > 4 ? h.substr(0, 3) + '.' : h}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {moves.map(m => {
            let move = movesData[m] || []
            return (
              <tr
                key={move.name}
                data-type={move.type.toLowerCase()}
                style={{
                  background: pokeTypes[move.type.toLowerCase()].color,
                  border: '5px solid #000'
                }}
              >
                {header.map(e => {
                  return (
                    <td key={move.name + e} title={e}>
                      {e === 'category' ? (
                        <MoveCategory category={move[e]} name={move.name} />
                      ) : (
                        <span>{move[e]}</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Moveset.defaultProps = {
  className: 'moveset',
  style: {
    height: '180px',
    overflow: 'scroll',
    fontSize: '.9em',
    flexGrow: 3,
    border: '2px solid #000',
    borderBottomWidth: '4px',
    fontWeight: 600
  }
}
