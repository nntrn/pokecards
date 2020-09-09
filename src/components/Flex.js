import React from 'react'

const FlexAttributes = {
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  display: 'flex',
  flexBasis: '',
  flexDirection: 'column',
  flexFlow: 'row wrap',
  flexGrow: '',
  flexShrink: '',
  flexWrap: 'wrap',
  justifyContent: '',
  order: ''
}

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

const Flex = props => {
  const nonStyleProps = {}

  const styleProps = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  Object.keys(props).forEach(e => {

    if (Object.keys(FlexAttributes).includes(e)) {
      styleProps[e] = props[e]
    } else {
      let shorthand = `flex${capitalize(e.toLowerCase())}`

      if (FlexAttributes[shorthand]) {
        styleProps[shorthand] = props[e]
      } else {
        nonStyleProps[e] = props[e]
      }
     
    }
  })

  return (
    <div {...nonStyleProps} style={styleProps}>
      {props.children}
    </div>
  )
}

export default Flex
