import React from 'react'
import { galarSubset } from '../data/galar-data'

import Type from './Type'

import { SearchListStyle } from './style'
import '../styles/searchlist.scss'

function searchPokemon(searchString) {
  var results = []

  if (searchString === '') {
    return results
  }
  for (var i = 0; i < galarSubset.length; i++) {
    var pokemon = galarSubset[i][2].toLowerCase()
    if (pokemon.indexOf(searchString.toLowerCase()) === 0) {
      results.push(galarSubset[i])
    }
  }
  return results
}

export default function Searchlist({ item, onChildClick }) {
  const [ list, setList ] = React.useState([])

  const handleChange = event => {
    setList(searchPokemon(event.target.value))
  }

  const sendData = item => {
    onChildClick({ gdex: item[0], ndex: item[1], name: item[2], types: item[3] })
  }

  return (
    <div id="searchlist">
      <input
        type="search"
        id="search"
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
        onChange={e => handleChange(e)}
        style={SearchListStyle.input}
      />
      <div
        style={{ ...SearchListStyle.list, height: `${list.length * 25}px` }}
        className="list"
      >
        {list.map(item => {
          return (
            <div
              key={item[2]}
              style={SearchListStyle.item}
              title={item[3].join('/')}
              onClick={() => sendData(item)}
            >
              <span before={'#' + item[0]}>{item[2]}</span>
              <span className="types small">
                {item[3].map(type => (
                  <Type key={type} type={type} />
                ))}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Searchlist.defaultProps = {
  search: ''
}
