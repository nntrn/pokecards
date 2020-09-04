import React from 'react'

const SvgIcon = props => {
  const {
    children,
    classes,
    className,
    color = 'inherit',
    component: Component = 'svg',
    fontSize = 'default',
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24',
    width = 24,
    height = 24,
    size,
    ...other
  } = props

  return (
    <Component
      className={className}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? null : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      width={size || width }
      height={size || height }
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  )
}

export default SvgIcon
