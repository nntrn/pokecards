import React, { useState } from 'react'
import logo from './logo.svg'
import Card from './components/Card'
import './App.css'

import {randomNum} from './components/utils/util'

function App() {
  const [cards, setCards] = React.useState([<Card id={randomNum(1,890)}></Card>])

  const handleAdd = event => {
    const newCard = <Card id="1"></Card>
    setCards([...cards, newCard])
  }

  return (
    <div className="App">
      {cards}
      <button onClick={e => handleAdd()}>add</button>
    </div>
  )
}

export default App
