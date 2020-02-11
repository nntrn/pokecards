import React from 'react'
import { capitalize } from './utils/strings'

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
      width={width}
      height={height}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  )
}

export default SvgIcon
