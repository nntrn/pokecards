import React from 'react'

import { BarStyle, StatStyle } from './style'

function Bar(props) {
  const props2 = {
    container: {
      style: {
        ...BarStyle.container
      }
    },
    bar: {
      before: props.value,
      style: {
        ...props.style,
        ...BarStyle.bar,
        background: BarStyle.nature[props.nature],
        height: `calc(${props.height}% + 6px)`
      }
    }
  }

  return (
    <div {...props2.container}>
      <div {...props2.bar}></div>
    </div>
  )
}

export default function Stat(props) {
  const props2 = {
    ...props,
    'data-label': props.type,
    title: props.type,
    className: 'stat',
    style: {
      ...StatStyle,
      ...props.style
    }
  }

  const typeStyle = {
    textTransform: 'uppercase',
    color: '#777',
    fontSize: '.8em',
    width: '100%',
    textAlign: 'center'
  }

  return (
    <div {...props2}>
      <Bar {...props} height={(props.value / props.max) * 100} value={props.value} />
      <div style={typeStyle} className="type no-select">
        {props.type}
      </div>
      <div style={typeStyle} className="base" title={`base ${props.type.toUpperCase()}`}>
        {props.base}
      </div>
    </div>
  )
}

Stat.defaultProps = {}
