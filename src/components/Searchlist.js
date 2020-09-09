import React from 'react'
import { galarSubset } from '../data/galar-data'
import Type from './Type'
import SvgIcon from './SvgIcon'
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

const SearchIcon = props => {
  return (
    <SvgIcon {...props}>
      <path d="M10 18c1.846 0 3.543-.635 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396C17.365 13.543 18 11.846 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
    </SvgIcon>
  )
}

export const List = props => {
  return (
    <ul className="list-group">
      {props.items.map(item => (
        <li className="list-group-item" data-category={item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Searchlist({ item, onChildClick }) {
  const [ list, setList ] = React.useState([])
  const [ value, setValue ] = React.useState([])

  const handleChange = event => {
    setValue(event.target.value)
    setList(searchPokemon(event.target.value))
  }

  const sendData = item => {
    setValue('')
    setList([])
    onChildClick({ gdex: item[0], ndex: item[1], name: item[2], types: item[3] })
  }

  return (
    <div className="Search" id="searchlist">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', margin: 'auto', marginRight: '.25rem' }}>
          <SearchIcon fill="#fff" size="20"/>
        </span>
        <input
          type="search"
          id="search"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          onChange={e => handleChange(e)}
          style={SearchListStyle.input}
          value={value}
          placeholder="Search..."
        />
      </div>
      <div style={{ ...SearchListStyle.list, height: `${list.length * 25}px` }} className="list">
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
