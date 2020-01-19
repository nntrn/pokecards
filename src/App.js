import React, { useState, useEffect } from 'react'

import Card from './components/Card'
import Button from './components/Button'
import Searchlist from './components/Searchlist'

import './App.css'
import './styles/main.css'

import { randomStrId } from './components/utils/util'

const App = props => {
  const [ store, setStore ] = React.useState(props.store)

  const removeFromArray = id => {
    return store.filter(e => e.id !== id)
  }

  const handleDelete = e => {
    console.log('deleted', e)
    setStore(removeFromArray(e.target.parentElement.id))
  }

  const handleAdd = props => {
    console.log('added', props)
    var id = (props && props.id) || randomStrId()
    setStore([ ...store, { id: id, ...props } ])
  }

  return (
    <div>
      <h1>PokeCards</h1>
      <Searchlist onChildClick={handleAdd} />

      <div className="container">
        {store &&
          store.map((card, index) => (
            <Card {...card} key={card.id + index}>
              <Button className="delete" onClick={e => handleDelete(e)} text="X" />
            </Card>
          ))}
      </div>
      {/* <Button className="add" onClick={e => handleAdd()} text="+" /> */}
    </div>
  )
}

App.defaultProps = {
  store: []
}

export default App
