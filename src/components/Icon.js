import React from 'react'

const Icon = ({ width, height, path, viewBox, style, className, ...props }) => {

  const pathArr = [[path]].flat()
  return (
    <span style={style} className={className}>
      <svg width={width} height={height} viewBox={viewBox} {...props}>
        {pathArr.map(e => (<path d={path} key={path}/>))}
      </svg>
    </span>
  )
}

Icon.defaultProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  path: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  fill: 'rgba(255,255,255,.8)',
  className: 'icon'
}

export default Icon
