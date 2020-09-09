import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import Searchlist from './components/Searchlist'
import './App.css'
import './styles/main.scss'
import { randomStrId } from './components/utils/util'

const App = props => {
  const [ store, setStore ] = React.useState(props.store)

  const removeFromArray = id => {
    return store.filter(e => e.id !== id)
  }

  const handleDelete = e => {
    setStore(removeFromArray(e.target.parentElement.id))
  }

  const handleAdd = props => {
    var id = (props && props.id) || randomStrId()

    setStore([ ...store, { id: id, ...props } ])
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="margin-y-0">PokeCards</h1>
          <Searchlist onChildClick={handleAdd} />
        </div>
      </header>
      <main>
        <div className="container">
          {store &&
          store.map((card, index) => (
            <Card {...card} key={card.id + index}>
              <Button className="delete" onClick={e => handleDelete(e)} text="X" />
            </Card>
          ))}
        </div>

      </main>
    </>
  )
}

App.defaultProps = {
  store: []
}

export default App
