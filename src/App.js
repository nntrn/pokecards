import React, { useState } from 'react'

import Card from './components/Card'
import Button from './components/Button'
import './App.css'
import './styles/main.css'

import { randomNum, randomId } from './components/utils/util'

function getKey() {
  const key = randomId(6)
  const props = {
    key: key,
    'data-id': key,
  }
  return props
}

function App() {
  const [cards, setCards] = React.useState([
    <Card id={randomNum(1, 400)} {...getKey()} />,
  ])

  const handleAdd = event => {
    const newCard = <Card {...getKey()} />
    setCards([...cards, newCard])
  }

  return (
    <>
      {cards}
      <Button className="add" onClick={e => handleAdd()} text="+" />
    </>
  )
}

export default App
