import React from 'react'
import Stat from './Stat'

import { natures } from '../data/pokemon'
import { calculateHP, calculateStat } from './utils/calculate'

export default function StatCalculator(props) {
  
  const [ nature, setNature ] = React.useState(props.nature)

  let stat = {}
  let statNames = [ 'hp', 'atk', 'def', 'spa', 'spd', 'spe' ]
  var level = props.level > 0 && props.level < 101 ? props.level : 100

  statNames.forEach((e, i) => {
    if (i === 0) {
      stat[e] = calculateHP(props.base[i], level)
    } else {
      let nmod = e === natures[nature].plus ? 1.1 : e === natures[nature].minus ? 0.9 : 1
      stat[e] = calculateStat(props.base[i], level, nmod)
    }
  })

  const max = Math.max(...Object.values(stat)) + 50

  return (
    <div>
      <select
        value={nature}
        onChange={e => setNature(e.target.value)}
        disabled={props.disabled}
      >
        {Object.keys(natures).map(e => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <div {...props}>
        {Object.keys(stat).map((e, i) => (
          <Stat
            key={e}
            type={e}
            base={props.base[i]}
            value={stat[e]}
            max={max}
            nature={
              e === natures[nature].plus
                ? 'increase'
                : e === natures[nature].minus
                ? 'decrease'
                : 'normal'
            }
          />
        ))}
      </div>
      <p>
        <strong>Base total: </strong>
        <span> {props.base.reduce((a, b) => a + b, 0)}</span>
      </p>
    </div>
  )
}

StatCalculator.defaultProps = {
  base: [ 0, 0, 0, 0, 0, 0 ],
  level: 100,
  style: {
    margin: 0,
    padding: 0,
    display: 'flex',
    width: '90%'
  }
}
