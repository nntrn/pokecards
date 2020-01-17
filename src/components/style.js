export const BarStyle = {
  container: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  bar: {
    background: 'orange',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    textAlign: 'center',
    fontSize: '.8em'
  },
  nature: {
    normal: 'orange',
    decrease: '#39cccc',
    increase: '#ff4136'
  }
}

export const ButtonStyle = {
  border: 0,
  borderRadius: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  zIndex: 1000
}

export const CardStyle = {
  background: '#222',
  boxShadow: 'inset 0 0 0px 4px rgba(0, 0, 0, 0.85)',
  color: 'white',
  width: '80vw',
  margin: '1.25rem auto',
  borderRadius: '8px',
  padding: '.85rem',
  position: 'relative',
  boxSizing: 'border-box'
}

export const InputStyle = {
  margin: 0,
  fontSize: 'inherit',
  border: 0,
  outline: 0
}

export const SpriteStyle = {
  gen8: {
    filter: 'saturate(.3) drop-shadow(#000 -.5px 0px 0.04px) contrast(1.2)'
  },
  default: {
    maxHeight: '140px',
    marginTop: '.5rem',
    opacity: '.9',
    filter: 'saturate(2) drop-shadow(#000 -.5px 0px 0.04px) contrast(1.2)'
  }
}

export const StatStyle = {
  margin: '.15rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'center',
  width: 'calc(85% / 6)',
  height: '100px',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  fontSize: '.9rem',
  overflow: 'hidden'
}

export const TypeStyle = {
  padding: '0.1rem 0.3rem',
  fontSize: '0.85em',
  margin: '0 0.14rem',
  borderRadius: '5px',
  textTransform: 'uppercase',
  // position: 'relative',
  fontFamily: 'sans-serif',
  whiteSpace: 'pre',
  // color: 'rgba(0,0,0,1)',
  color: 'white',
  filter: 'opacity(.9) saturate(1.25) contrast(1.2)'
}

export const LevelStyle = {
  border: 0
}
