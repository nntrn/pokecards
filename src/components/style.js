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
  background: '#fff',
  boxShadow: 'inset 0 0 0px 4px rgba(0, 0, 0, 0.85)',
  color: '#222',
  width: '80vw',
  margin: '1.5rem auto',
  borderRadius: '8px',
  padding: '.85rem',
  position: 'relative',
  boxSizing: 'border-box'
}
export const InputStyle = {
  margin: 0,
  fontSize: 'inherit',
  border: 0,
  outline: 0,
  fontWeight: 500,
  padding: 0
}
export const SearchListStyle = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.25rem',
    border: '0px solid #ccc',
    borderBottom: '3px solid #ddd',
    position: 'relative'
  },
  input: {
    outline: 'none',
    padding: '.15em',
    border: '0px solid #222',
    fontSize: '1.2em',
    zIndex: 100,
    height: '100%',
    borderBottom: 0,
    color: '#fff'
  },
  list: {
    zIndex: 200,
    position: 'absolute',
    borderRadius: '2px',
    height: 'fit-content',
    maxHeight: 'calc(100vh / 3)',
    overflow: 'scroll',
    background: '#fff',
    color: '#222',
    marginTop: '5px',
    border: '0px solid #eee',
    left: 0,
    // boxShadow: '3px 0px 0 0 #eee, -3px 0px 0 0 #eee, inset 0px -4px 0 0 #eee'
  }
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
  minWidth: 'fit-content',
  height: '100px',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  fontSize: '.9rem',
  overflow: 'hidden'
}
export const TypeStyle = {
  padding: '0.1rem 0.3rem',
  margin: '0 0.14rem',
  borderRadius: '5px',
  textTransform: 'uppercase',
  fontFamily: 'sans-serif',
  whiteSpace: 'pre',
  color: '#777',
  fontSize: '.8em',
  textAlign: 'center'
}
export const LevelStyle = {
  border: 0
}
