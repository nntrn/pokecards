import React from 'react'

export default function Stat(props) {
  const props2 = {
    dataLabel: props.type,
    title: props.type,
    value: 0,
    ...props
  }
  const barStyle = {
    style: {
      background: 'red',
      height: `${props.bar.toFixed(2) * 100}px`,
      width: '25px'
    }
  }
  return (
    <div {...props} className="stat">
      <div className="value">{props2.value}</div>
      <div style={barStyle.style}></div>
      <div style={{ textTransform: 'uppercase', color: '#777', fontSize: '.8em' }}>
        {props.type}
      </div>
    </div>
  )
}

Stat.defaultProps = {
  style: {
    margin: 0,
    padding: '.15rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
}
