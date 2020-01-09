import React from 'react'

function Bar(props) {
  const style = {
    ...props.style,
    background: 'orange',
    width: '100%',
    height: `calc(${props.height}% + 6px)`,
    bottom: 0,
    position: 'absolute'
  }
  return (
    <div className="bar" style={{ position: 'relative', height: '100%', width: '100%' }}>
      <div style={style} before={props.value} className="small"></div>
    </div>
  )
}

export default function Stat(props) {
  const props2 = {
    'data-label': props.type,
    title: props.type,
    ...props
  }

  const typeStyle = {
    textTransform: 'uppercase',
    color: '#777',
    fontSize: '.8em',
    bottom: 0
  }

  return (
    <div {...props2} className="stat">
      <Bar height={(props.value / props.max) * 100} value={props.value} />

      <div style={typeStyle} className="type">
        {props.type}
      </div>
      <div style={typeStyle} className="base">
        {props.base}
      </div>
    </div>
  )
}

Stat.defaultProps = {
  style: {
    margin: '.15rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    width: '23px',
    height: '100px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    fontSize: '.9rem',
    overflow: 'hidden'
  }
}
