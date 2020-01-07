import React from 'react'
import Stat from './Stat'

export default function IV(props) {
  const max = Math.max(...props.base) + 50
  return (
    <div {...props} className="ivs">
      <Stat type="hp" value={props.base[0]} bar={props.base[0] / max} />
      <Stat type="att" value={props.base[1]} bar={props.base[1] / max} />
      <Stat type="def" value={props.base[2]} bar={props.base[2] / max} />
      <Stat type="satt" value={props.base[3]} bar={props.base[3] / max} />
      <Stat type="sdef" value={props.base[4]} bar={props.base[4] / max} />
      <Stat type="spd" value={props.base[5]} bar={props.base[5] / max} />
    </div>
  )
}

IV.defaultProps = {
  base: [0, 0, 0, 0, 0, 0],
  style: {
    margin: 0,
    padding: 0,
    display: 'flex',
    height: '100%'
  }
}
