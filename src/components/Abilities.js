import React  from 'react'
import { abilities } from '../data/pokemon'

export default function Abilities(props) {
  const unique = [...new Set(props.abilities)]
  const abilityInfo = abilities.filter(e => unique.includes(e.name))

  const classNames = [ props.className, 'abilities', 'flex-grow-1' ].join(' ')
  return (
    <form className={classNames}>
      <legend className="gray">abilities:</legend>
      {abilityInfo.map(e => (
        <div className="flex ability" key={e.name + props.id}>
          <input
            type={props.type}
            name={props.name + props.id}
            value={e.name}
            id={e.name + props.id}
            disabled={props.disabled}
          />
          <label htmlFor={e.name + props.id} data-desc={e.desc}>
            {e.name}
          </label>
        </div>
      ))}
    </form>
  )
}

Abilities.defaultProps = {
  type: 'radio',
  name: 'ability'
}
