import React, { useState } from 'react'

import Card from './components/Card'
import Button from './components/Button'
import Searchlist from './components/Searchlist'
import './App.css'
import './styles/main.css'

import { randomNum, randomId } from './components/utils/util'

function getKey() {
  const key = randomId(6)
  const props = {
    key: key,
    'data-id': key
  }
  return props
}

function App() {

  const [test, setTest] = React.useState([])
  const [cards, setCards] = React.useState([])

  const addId = id => {
    const idArr = [...test, id]
    setTest(idArr)
  }

  const handleAdd = event => {
    const cardId = getKey()
    const newCard = <Card {...cardId} />
    setCards([...cards, newCard])
    addId(cardId.key)
  }

  const addNew = event => {
    const pokeId =
      event.target.parentElement.id ||
      event.target.id ||
      event.target.parentElement.parentElement.id

    if (parseInt(pokeId)) {
      const cardId = getKey()
      const newCard = <Card {...cardId} id={pokeId} />
      addId(cardId.key)
      setCards([newCard, ...cards])
    }
  }

  return (
    <>
      <h1>PokeCards</h1>
      <p>{test.join(',')}</p>
      <div onClick={e => addNew(e)}>
        <Searchlist/>
      </div>
      {cards}
      <Button className="add" onClick={e => handleAdd()} text="+" />
    </>
  )
}

export default App
