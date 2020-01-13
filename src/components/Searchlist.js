import React, { useState } from 'react'
import { galarSubset } from '../data/galar-data'

import Type from './Type'

import '../styles/searchlist.scss'

function SearchItem(props) {
  return (
    <div
      id={props.id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '3px solid #000',
        padding: '.25rem'
      }}
    >
      <span style={{ width: '100%', whiteSpace: 'pre' }} before={'#' + props.id}>
        {props.name}
      </span>
      <span className="types">
        {props.types.map(type => (
          <Type key={type} type={type} />
        ))}
      </span>
    </div>
  )
}

SearchItem.defaultProps = {
  className: 'search-item'
}

export default function Searchlist(props) {
  const [list, setList] = React.useState([])

  const handleChange = event => {
    setList(searchPokemon(event.target.value))
  }

  const style = {
    input: {
      outline: 'none',
      padding: '.35em',
      border: '3px solid black',
      fontSize: '1.2em',
      borderRadius: '4px',
      zIndex: 100,
      borderBottom: 0
    }
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
        style={style.input}
      />
      <div
        style={{
          zIndex: 1000,
          position: 'absolute',
          maxHeight: 'calc(100vh / 3)',
          height: `${list.length * 25}px`,
          overflow: 'scroll',
          background: '#222',
          color: '#fff',
          marginTop: '-2px',
          border: '3px solid #000'
        }}
        className="list"
      >
        {list.map(item => (
          <SearchItem key={item[2]} name={item[2]} types={item[3]} id={item[0]} />
        ))}
      </div>
    </div>
  )
}

Searchlist.defaultProps = {
  search: '',
  style: {
    position: 'absolute',
    zIndex: '100',
    background: 'white',
    overflow: 'scroll'
  }
}

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
