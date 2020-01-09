import React from 'react'

export default function Abilities(props) {
  let unique = [...new Set(props.abilities)]
  return (
    <form className="flex">
      {unique.map(e => (
        <div className={props.name}>
          <input {...props} value={e} id={e} />
          <label htmlFor={e}>{e}</label>
        </div>
      ))}
    </form>
  )
}

Abilities.defaultProps = {
  type: 'radio',
  name: 'ability'
}
