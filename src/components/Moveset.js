import React from 'react'

function Move(props) {
  return (
    <div {...props}>
      <div>Move</div>
      <div>PP</div>
    </div>
  )
}
Move.defaultProps = {
  className: 'move',
  style: {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between'
  }
}

export default function Moveset(props) {
  return (
    <div>
      <Move />
      <Move />
      <Move />
      <Move />
    </div>
  )
}

Moveset.defaultProps = {
  style: {
    background: '#000',
    width: '300px'
  }
}
