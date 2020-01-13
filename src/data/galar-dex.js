import {galarSubset} from './galar-data'

export function getAllForGalarId(galar_id) {
  return galarSubset
    .filter(e => e[0] === galar_id)
    .map(arr => ({
      galar: arr[0],
      national: arr[1],
      name: arr[2],
      type: arr[3]
    }))
}

export function galarToNationalDex(galar_id) {
  return galarSubset.filter(e => e[0] === galar_id)[0]
}

export function nationalToGalarDex(national_id) {
  return galarSubset.filter(e => e[1] === national_id)[0]
}

export function pokemonName(name) {
  return galarSubset.filter(e => e[2] === name)[0]
}

export function getPokemonName(galar_id) {
  return galarSubset.filter(e => e[0] === galar_id)[0]
}

export function getSpriteImgUrl(id) {
  const imgId = id.toString().padStart(3, 0)
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgId}.png`
}

export function searchPokemon(searchString) {
  var results = []

  if (searchString === '') {
    return results
  }

  for (var i = 0; i < galarSubset.length; i++) {
    var pokemon = galarSubset[i][2].toLowerCase()
    if (pokemon.indexOf(searchString.toLowerCase()) === 0) {
      results.push(galarSubset[i])
    }
  }
  return results
}

