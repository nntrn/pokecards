import React from 'react'
import Stat from './Stat'
import { natures } from '../data/pokemon'

function calculateHP(base = 25, level = 100, EV = 0, IV = 31) {
  base = parseInt(base)
  level = parseInt(level)
  EV = parseInt(EV)
  IV = parseInt(IV)
  return parseInt(((base * 2 + IV + EV / 4) * level) / 100 + 10 + level)
}

function calculateStat(base = 25, level = 100, nmod = 1, EV = 0, IV = 31) {
  base = parseInt(base)
  level = parseInt(level)
  EV = parseInt(EV)
  IV = parseInt(IV)
  nmod = parseFloat(nmod)
  return parseInt((((base * 2 + IV + EV / 4) * level) / 100 + 5) * nmod)
}

export default function StatCalculator(props) {
  const [nature, setNature] = React.useState(props.nature)

  var level = props.level > 0 && props.level < 101 ? props.level : 100

  let stat = {}
  let statNames = ['hp', 'atk', 'def', 'spa', 'spd', 'spe']

  statNames.forEach((e, i) => {
    let nmod = 1
    if (e === natures[nature].plus) {
      nmod = 1.1
    }
    if (e === natures[nature].minus) {
      nmod = 0.9
    }
    if (i === 0) {
      stat[e] = calculateHP(props.base[i], level)
    } else {
      stat[e] = calculateStat(props.base[i], level, nmod)
    }
  })

  const handleNature = nature => {
    setNature(nature)
  }

  const max = Math.max(...Object.values(stat)) + 50

  return (
    <div>
      <select
        value={nature}
        onChange={e => handleNature(e.target.value)}
        disabled={props.disabled}
      >
        {Object.keys(natures).map(e => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <div {...props} className="ivs">
        {Object.keys(stat).map((e, i) => (
          <Stat
            key={e}
            type={e}
            base={props.base[i]}
            value={stat[e]}
            bar={stat[e] / max}
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

      <div className="small">
        <strong>Base total: </strong>
        <span> {props.base.reduce((a, b) => a + b, 0)}</span>
      </div>
    </div>
  )
}

StatCalculator.defaultProps = {
  base: [0, 0, 0, 0, 0, 0],
  level: 100,
  style: {
    margin: 0,
    padding: 0,
    display: 'flex'
  }
}
