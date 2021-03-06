export let natures = {
  Adamant: { plus: 'atk', minus: 'spa' },
  Bashful: {},
  Bold: { plus: 'def', minus: 'atk' },
  Brave: { plus: 'atk', minus: 'spe' },
  Calm: { plus: 'spd', minus: 'atk' },
  Careful: { plus: 'spd', minus: 'spa' },
  Docile: {},
  Gentle: { plus: 'spd', minus: 'def' },
  Hardy: {},
  Hasty: { plus: 'spe', minus: 'def' },
  Impish: { plus: 'def', minus: 'spa' },
  Jolly: { plus: 'spe', minus: 'spa' },
  Lax: { plus: 'def', minus: 'spd' },
  Lonely: { plus: 'atk', minus: 'def' },
  Mild: { plus: 'spa', minus: 'def' },
  Modest: { plus: 'spa', minus: 'atk' },
  Naive: { plus: 'spe', minus: 'spd' },
  Naughty: { plus: 'atk', minus: 'spd' },
  Quiet: { plus: 'spa', minus: 'spe' },
  Quirky: {},
  Rash: { plus: 'spa', minus: 'spd' },
  Relaxed: { plus: 'def', minus: 'spe' },
  Sassy: { plus: 'spd', minus: 'spe' },
  Serious: {},
  Timid: { plus: 'spe', minus: 'atk' },
}

export const pokeTypes = {
  fire: {
    color: '#d52100',
    icon:
      'M352 395c7-23-6-70-6-70s-9 38-23 53a74 74 0 01-47 23c17-9 29-26 29-46 0-28-23-51-52-51-28 0-51 23-51 51 0 8 1 15 5 22-18-15-21-37-21-37s-20 82 35 121 162 6 162 6-154 108-268-10C17 356 90 222 90 222s-3 12-3 27c0 14 7 25 7 25s24-49 42-69c17-19 38-34 57-47 14-10 27-19 34-28C269 84 243 0 243 0s47 41 60 94c5 20 2 43-1 64-5 33-9 60 25 58 54-3 7-86 7-86s122 65 113 177c-9 113-134 138-134 138s33-26 39-50z',
    gradient: 'linear-gradient( to bottom, #d37b31 0%, #d39540 100% )'
  },
  water: {
    color: '#0080ff',
    icon:
      'M422 347a166 166 0 01-332 0C90 258 247 14 256 0c9 14 166 258 166 347zM228 459c-84-19-69-112-69-112s23 56 78 75c56 18 124-9 124-9s-48 64-133 46z',
    gradient: 'linear-gradient( to bottom, #4d91d7 0%, #73c6df 100% )'
  },
  electric: {
    color: '#c90',
    icon: 'M153 1V0h180l83 267-1 1H296h-1l69 242h-1L97 155c-1 0 0 0 0 0h109v-1L153 1z',
    gradient: 'linear-gradient( to bottom, #c3a427 0%, #d2bd64 100% )'
  },
  grass: {
    color: '#5cb737',
    icon:
      'M97 441l-5-5C2 345 2 198 92 107c91-90 380-97 380-97s39 335-51 426c-81 80-206 89-296 27l72-90 117-25-95-10 60-61 69-15-54-16 54-98-77 86-30-42 10 70-53 61-25-77v102z',
    gradient: 'linear-gradient( to bottom, #21934d 0%, #2fb47f 100% )'
  },
  ice: {
    color: '#0af',
    icon:
      'M384 39l2 138-121 58-1-130 120-66zM505 257l-119 68-120-68 120-63 119 63zM245 257l-119 68L6 257l120-63 119 63zM124 38l124 62-3 134-117-58-4-138zM388 474l-124-62 3-134 117 58 4 138zM129 475l-2-139 121-58 1 131-120 66z',
    gradient: 'linear-gradient( to bottom, #2bb5a6 0%, #78c5bf 100% )'
  },
  fighting: {
    color: '#a84d3d',
    icon:
      'M88 43a56 56 0 01102-17h17a56 56 0 0192 17h14a56 56 0 0182 25h37l1 1 5-1c32 0 57 26 57 57v175c-4 118-109 212-239 212-132 0-239-97-239-218 0-58 25-110 66-149-1 56 0 115 5 114 12-3 2-178 0-216z',
    gradient: 'linear-gradient( to bottom, #c3334e 0%, #d37377 100% )'
  },
  poison: {
    color: '#88447a',
    icon:
      'M428 393c52-41 84-101 84-167C512 101 397 0 256 0S0 101 0 226c0 64 30 122 79 163-3 10-5 21-5 33 0 50 30 90 67 90 25 0 46-17 58-43 12 26 33 43 57 43 22 0 42-14 54-36 12 22 32 36 54 36 37 0 67-40 67-90 0-10-1-20-3-29zm-24-163c0 64-68 115-151 115-84 0-152-51-152-115 0-63 68-114 152-114 83 0 151 51 151 114z',
    gradient: 'linear-gradient( to bottom, #aa66cc 0%, #c660d7 100% )'
  },
  ground: {
    color: '#bf9926',
    icon: 'M113 440v-1L243 70h140l129 369v1H113zM0 441l97-260h85L88 441H0z',
    gradient: 'linear-gradient( to bottom, #c17249 0%, #ca936c 100% )'
  },
  flying: {
    color: '#556dff',
    icon:
      'M179 478c75 0 139-42 165-101 1-1-106 28-103 18 2-5 67-29 115-57 27-16 40-50 40-50s-46 23-69 29c-47 11-89 10-89 9 0-3 69-16 164-74 45-28 58-75 58-75s-50 30-80 39c-71 23-135 30-135 27 0-7 57-22 117-51 31-16 59-35 90-58 52-36 60-100 60-100s-51 33-76 44a844 844 0 01-257 73C80 159 0 227 0 317c0 89 80 161 179 161z',
    gradient: 'linear-gradient( to bottom, #8199bd 0%, #a5b4cb 100% )'
  },
  psychic: {
    color: '#ff227a',
    icon:
      'M456 425s-65 52-193 31c-98-17-150-124-150-182 0-137 102-168 170-168 69 0 114 67 114 119 0 51-37 96-94 96s-74-39-74-76 30-50 57-50 36 23 36 43-15 27-28 27-14-6-19-13 6-33-12-33c-19 0-22 30-22 30s7 57 62 56 82-44 74-86-49-87-121-78-101 82-88 160 106 123 179 106c73-16 146-69 146-203C493 69 377-12 238 1 99 15 13 136 18 282c6 146 144 226 261 230 118 4 189-64 189-64s16-14 10-26c-6-11-22 3-22 3z',
    gradient: 'linear-gradient( to bottom, #f96d75 0%, #fda39a 100% )'
  },
  bug: {
    color: '#83901a',
    icon:
      'M342 1l2-1 36 26v1l-50 73c24 7 41 16 41 16s-41 70-110 70-119-65-119-65 17-11 43-21l-55-66v-2l34-28h2l70 84a163 163 0 0145 0zm14 189c18-14 47-48 47-48s71 57 71 177c0 121-124 193-124 193s-59-60-73-136c-15-75 21-159 21-159s39-14 58-27zm-200 0c-18-14-46-48-46-48s-72 57-72 177c0 121 124 193 124 193s59-60 74-136c14-75-22-159-22-159s-39-14-58-27z',
    gradient: 'linear-gradient( to bottom, #6f9a24 0%, #9bb23d 100% )'
  },
  rock: {
    color: '#a59249',
    icon:
      'M395 245l33-191h10l74 233-54 43h-1l-62-85zM-1 371l112 37 250-173 27-180H166L-1 257v114zm159 46l122 40 145-104v-1l-54-81-213 146z',
    gradient: 'linear-gradient( to bottom, #c7b78a 0%, #d7cd92 100% )'
  },
  ghost: {
    color: '#5454b3',
    icon:
      'M369 510c-46 3-99 3-117 0C112 492 0 389 0 251 0 112 115 0 256 0s256 112 256 251c0 64-25 123-66 167-11 12 5 21 20 30 15 8 30 16 22 29-10 13-64 30-119 33zM220 219c0 22-18 40-40 40s-40-18-40-40c0-14 8-27 20-34 1 19 16 34 35 34h25zm124-34c-1 19-16 34-35 34h-25c0 22 18 40 40 40s40-18 40-40c0-14-8-27-20-34z',
    gradient: 'linear-gradient( to bottom, #456095 0%, #7a75b5 100% )'
  },
  dragon: {
    color: '#4e38e9',
    icon:
      'M281 255c3-2 6-7 8-12 32 13 54 43 54 79 0 46-39 84-87 84-19 0-38-6-52-17l-12-6c-5-3-8-5-10-4-6 0-4 6-3 11 1 3 2 6 1 8-2 1-7-4-13-10-9-8-19-17-23-14-4 2 0 8 4 16l6 9c4 6 8 11 6 12s-16-8-27-21l-13-15c-8-11-16-20-20-19-5 1-1 12 4 21l9 13c4 7 7 11 6 12-2 1-15-12-24-28l-13-29c-4-9-7-16-9-17-7-3-7 11-4 31l1 8c26 84 106 145 201 145 115 0 209-92 209-205 0-107-85-195-193-204l3-15s19-46 20-55v-3c1-10 4-30-13-30-10 0-14 7-19 14a566 566 0 01-67 70c-34 30-67 55-87 69-9 6-15 11-16 13-14 13-64 103-64 103s-17 29-11 35 20 5 20 5l202-46 10-2c7-1 8-2 16-6zm-132-55c-10 10-26 32-26 32s30 2 47-14 13-44 13-44-24 17-34 26z',
    gradient: 'linear-gradient( to bottom, #1d547d 0%, #1e719b 100% )'
  },
  dark: {
    color: '#573e31',
    icon:
      'M229 453l30 2a196 196 0 10-21-390c53 41 89 111 89 191 0 84-39 157-98 197zm27 59a256 256 0 100-512 256 256 0 000 512z',
    gradient: 'linear-gradient( to bottom, #41403e 0%, #585755 100% )'
  },
  steel: {
    color: '#8e8ea4',
    icon:
      'M0 255v-1L129 34h256l127 220v1L385 474H129L0 255zm375-1a119 119 0 11-238 0 119 119 0 01238 0z',
    gradient: 'linear-gradient( to bottom, #54869e 0%, #58abab 100% )'
  },
  fairy: {
    color: '#e76de7',
    icon:
      'M103 406l82-24 71 130 71-130 82 24h1l-24-81 126-69-127-70 25-84h-1l-84 24L256 0l-69 126-84-24h-1l25 84L0 256l126 69-24 81h1zm63-149l59 32 31 58h1l32-58 58-32v-1l-58-31-32-59h-1l-31 59-59 31v1z',
    gradient: 'linear-gradient( to bottom, #d289c1 0%, #d1a2c4 100% )'
  },
  normal: {
    color: '#a8a878',
    icon:
      'M481 256a225 225 0 11-450 0 225 225 0 01450 0zm-96 0a129 129 0 11-258 0 129 129 0 01258 0z',
    gradient: 'linear-gradient( to bottom, #797d7e 0%, #9a9995 100% )'
  }
}


export const moveCategories = {
  status: {
    viewbox: "0 0 100 74",
    paths: [
      'M57 5H47l3 3c-9 0-16 6-16 13s7 13 16 13c10 0 17 6 17 13s-7 13-17 13l-8 1-10-2c-6-2-13-3-21-12l6 7c6 6 18 10 18 10s11 4 32 0c20-5 27-21 29-32C97 21 80 6 57 5z',
      'M50 68C22 68 0 53 0 34S22 0 50 0c27 0 50 15 50 34S77 68 50 68zm0-60C27 8 8 20 8 34s19 26 42 26 42-12 42-26S73 8 50 8z'
    ],
    fill: '#bdc3c7'
  },
  physical: {
    viewbox: "0 0 115 90",
    paths: [
      'M98 12L80 36l29 8-29 8 18 24-32-13-10 22-10-22-32 13 18-24-29-8 29-8-18-24 32 13L56 3l10 22z'
    ],
    fill: '#efc13b'
  },
  special: {
    viewbox: "0 0 100 73",
    paths: [
      'M50 68C23 68 0 53 0 34S23 0 50 0c28 0 50 15 50 34S78 68 50 68zm0-60C27 8 8 20 8 34s19 26 42 26 42-12 42-26S73 8 50 8z',
      'M50 51c-18 0-32-7-32-17s14-17 32-17 32 7 32 17-14 17-32 17zm0-28c-15 0-25 6-25 11s10 10 25 10 26-5 26-10-11-11-26-11z',
      'M61 34c0 2-5 3-11 3s-11-1-11-3 5-4 11-4 11 2 11 4z'
    ],
    fill: '#3498db'
  }
}

export const typeColor = {
  fire: '#d52100',
  water: '#0080ff',
  electric: '#c90',
  grass: '#5cb737',
  ice: '#0af',
  fighting: '#a84d3d',
  poison: '#88447a',
  ground: '#bf9926',
  flying: '#556dff',
  psychic: '#ff227a',
  bug: '#83901a',
  rock: '#a59249',
  ghost: '#5454b3',
  dragon: '#4e38e9',
  dark: '#573e31',
  steel: '#8e8ea4',
  fairy: '#e76de7',
  normal: '#a8a878',
}

export const pokemonTypeMatchup = [
  {
    name: 'normal',
    strongAgainst: [],
    weakAgainst: ['rock', 'ghost', 'steel'],
    resistantTo: ['ghost'],
    vulnerableTo: ['fighting']
  },
  {
    name: 'fighting',
    strongAgainst: ['normal', 'rock', 'steel', 'ice', 'dark'],
    weakAgainst: ['flying', 'poison', 'psychic', 'bug', 'ghost', 'fairy'],
    resistantTo: ['rock', 'bug', 'dark'],
    vulnerableTo: ['flying', 'psychic', 'fairy']
  },
  {
    name: 'flying',
    strongAgainst: ['fighting', 'bug', 'grass'],
    weakAgainst: ['rock', 'steel', 'electric'],
    resistantTo: ['fighting', 'ground', 'bug', 'grass'],
    vulnerableTo: ['rock', 'electric', 'ice']
  },
  {
    name: 'poison',
    strongAgainst: ['grass', 'fairy'],
    weakAgainst: ['poison', 'ground', 'rock', 'ghost', 'steel'],
    resistantTo: ['fighting', 'poison', 'grass', 'fairy'],
    vulnerableTo: ['ground', 'psychic']
  },
  {
    name: 'ground',
    strongAgainst: ['poison', 'rock', 'steel', 'fire', 'electric'],
    weakAgainst: ['flying', 'bug', 'grass'],
    resistantTo: ['poison', 'rock', 'electric'],
    vulnerableTo: ['water', 'grass', 'ice']
  },
  {
    name: 'rock',
    strongAgainst: ['flying', 'bug', 'fire', 'ice'],
    weakAgainst: ['fighting', 'ground', 'steel'],
    resistantTo: ['normal', 'flying', 'poison', 'fire'],
    vulnerableTo: ['fighting', 'ground', 'steel', 'water', 'grass']
  },
  {
    name: 'bug',
    strongAgainst: ['grass', 'psychic', 'dark'],
    weakAgainst: ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'],
    resistantTo: ['fighting', 'ground', 'grass'],
    vulnerableTo: ['flying', 'rock', 'fire']
  },
  {
    name: 'ghost',
    strongAgainst: ['ghost', 'psychic'],
    weakAgainst: ['normal', 'dark'],
    resistantTo: ['normal', 'fighting', 'poison', 'bug'],
    vulnerableTo: ['ghost', 'dark']
  },
  {
    name: 'steel',
    strongAgainst: ['rock', 'ice', 'fairy'],
    weakAgainst: ['steel', 'fire', 'water', 'electric'],
    resistantTo: [ 'normal', 'flying','poison', 'rock', 'bug', 'steel', 'grass',
      'psychic','ice', 'dragon','fairy' ],
    vulnerableTo: ['fighting', 'ground', 'fire']
  },
  {
    name: 'fire',
    strongAgainst: ['bug', 'steel', 'grass', 'ice'],
    weakAgainst: ['rock', 'fire', 'water', 'dragon'],
    resistantTo: ['bug', 'steel', 'fire', 'grass', 'ice'],
    vulnerableTo: ['ground', 'rock', 'water']
  },
  {
    name: 'water',
    strongAgainst: ['ground', 'rock', 'fire'],
    weakAgainst: ['water', 'grass', 'dragon'],
    resistantTo: ['steel', 'fire', 'water', 'ice'],
    vulnerableTo: ['grass', 'electric']
  },
  {
    name: 'grass',
    strongAgainst: ['ground', 'rock', 'water'],
    weakAgainst: ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'],
    resistantTo: ['ground', 'water', 'grass', 'electric'],
    vulnerableTo: ['flying', 'poison', 'bug', 'fire', 'ice']
  },
  {
    name: 'electric',
    strongAgainst: ['flying', 'water'],
    weakAgainst: ['ground', 'grass', 'electric', 'dragon'],
    resistantTo: ['flying', 'steel', 'electric'],
    vulnerableTo: ['ground']
  },
  {
    name: 'psychic',
    strongAgainst: ['fighting', 'poison'],
    weakAgainst: ['steel', 'psychic', 'dark'],
    resistantTo: ['fighting', 'psychic'],
    vulnerableTo: ['bug', 'ghost', 'dark']
  },
  {
    name: 'ice',
    strongAgainst: ['flying', 'ground', 'grass', 'dragon'],
    weakAgainst: ['steel', 'fire', 'water', 'ice'],
    resistantTo: ['ice'],
    vulnerableTo: ['fighting', 'rock', 'steel', 'fire']
  },
  {
    name: 'dragon',
    strongAgainst: ['dragon'],
    weakAgainst: ['steel', 'fairy'],
    resistantTo: ['fire', 'water', 'grass', 'electric'],
    vulnerableTo: ['ice', 'dragon', 'fairy']
  },
  {
    name: 'fairy',
    strongAgainst: ['fighting', 'dragon', 'dark'],
    weakAgainst: ['poison', 'steel', 'fire'],
    resistantTo: ['fighting', 'bug', 'dragon', 'dark'],
    vulnerableTo: ['poison', 'steel']
  },
  {
    name: 'dark',
    strongAgainst: ['ghost', 'psychic'],
    weakAgainst: ['fighting', 'dark', 'fairy'],
    resistantTo: ['ghost', 'psychic', 'dark'],
    vulnerableTo: ['fighting', 'bug', 'fairy']
  }
]


export const typechart = {
  null: {"normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1},
  normal: {"normal": 1, "fighting": 2, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 0, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1},
  fighting: {"normal": 1, "fighting": 1, "flying": 2, "poison": 1, "ground": 1, "rock": 0.5, "bug": 0.5, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 2, "ice": 1, "dragon": 1, "dark": 0.5, "fairy": 2},
  flying: {"normal": 1, "fighting": 0.5, "flying": 1, "poison": 1, "ground": 0, "rock": 2, "bug": 0.5, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 0.5, "electric": 2, "psychic": 1, "ice": 2, "dragon": 1, "dark": 1, "fairy": 1},
  poison: {"normal": 1, "fighting": 0.5, "flying": 1, "poison": 0.5, "ground": 2, "rock": 1, "bug": 0.5, "ghost": 1, "steel": 1, "fire": 1, "water": 1, "grass": 0.5, "electric": 1, "psychic": 2, "ice": 1, "dragon": 1, "dark": 1, "fairy": 0.5},
  ground: {"normal": 1, "fighting": 1, "flying": 1, "poison": 0.5, "ground": 1, "rock": 0.5, "bug": 1, "ghost": 1, "steel": 1, "fire": 1, "water": 2, "grass": 2, "electric": 0, "psychic": 1, "ice": 2, "dragon": 1, "dark": 1, "fairy": 1},
  rock: {"normal": 0.5, "fighting": 2, "flying": 0.5, "poison": 0.5, "ground": 2, "rock": 1, "bug": 1, "ghost": 1, "steel": 2, "fire": 0.5, "water": 2, "grass": 0.5, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1},
  bug: {"normal": 1, "fighting": 0.5, "flying": 2, "poison": 1, "ground": 0.5, "rock": 2, "bug": 1, "ghost": 1, "steel": 1, "fire": 2, "water": 1, "grass": 0.5, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1},
  ghost: {"normal": 0, "fighting": 0, "flying": 1, "poison": 0.5, "ground": 1, "rock": 1, "bug": 0.5, "ghost": 2, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 1, "dark": 2, "fairy": 1},
  steel: {"normal": 0.5, "fighting": 2, "flying": 0.5, "poison": 0, "ground": 2, "rock": 0.5, "bug": 0.5, "ghost": 1, "steel": 0.5, "fire": 2, "water": 1, "grass": 0.5, "electric": 1, "psychic": 0.5, "ice": 0.5, "dragon": 0.5, "dark": 1, "fairy": 0.5},
  fire: {"normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 2, "rock": 2, "bug": 0.5, "ghost": 1, "steel": 0.5, "fire": 0.5, "water": 2, "grass": 0.5, "electric": 1, "psychic": 1, "ice": 0.5, "dragon": 1, "dark": 1, "fairy": 0.5},
  water: {"normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 1, "steel": 0.5, "fire": 0.5, "water": 0.5, "grass": 2, "electric": 2, "psychic": 1, "ice": 0.5, "dragon": 1, "dark": 1, "fairy": 1},
  grass: {"normal": 1, "fighting": 1, "flying": 2, "poison": 2, "ground": 0.5, "rock": 1, "bug": 2, "ghost": 1, "steel": 1, "fire": 2, "water": 0.5, "grass": 0.5, "electric": 0.5, "psychic": 1, "ice": 2, "dragon": 1, "dark": 1, "fairy": 1},
  electric: {"normal": 1, "fighting": 1, "flying": 0.5, "poison": 1, "ground": 2, "rock": 1, "bug": 1, "ghost": 1, "steel": 0.5, "fire": 1, "water": 1, "grass": 1, "electric": 0.5, "psychic": 1, "ice": 1, "dragon": 1, "dark": 1, "fairy": 1},
  psychic: {"normal": 1, "fighting": 0.5, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 2, "ghost": 2, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 0.5, "ice": 1, "dragon": 1, "dark": 2, "fairy": 1},
  ice: {"normal": 1, "fighting": 2, "flying": 1, "poison": 1, "ground": 1, "rock": 2, "bug": 1, "ghost": 1, "steel": 2, "fire": 2, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 0.5, "dragon": 1, "dark": 1, "fairy": 1},
  dragon: {"normal": 1, "fighting": 1, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 1, "ghost": 1, "steel": 1, "fire": 0.5, "water": 0.5, "grass": 0.5, "electric": 0.5, "psychic": 1, "ice": 2, "dragon": 2, "dark": 1, "fairy": 2},
  dark: {"normal": 1, "fighting": 2, "flying": 1, "poison": 1, "ground": 1, "rock": 1, "bug": 2, "ghost": 0.5, "steel": 1, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 0, "ice": 1, "dragon": 1, "dark": 0.5, "fairy": 2},
  fairy: {"normal": 1, "fighting": 0.5, "flying": 1, "poison": 2, "ground": 1, "rock": 1, "bug": 0.5, "ghost": 1, "steel": 2, "fire": 1, "water": 1, "grass": 1, "electric": 1, "psychic": 1, "ice": 1, "dragon": 0, "dark": 0.5, "fairy": 1}
  }

export const abilities = [
  {'name': 'Adaptability', 'desc': "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5."},
  {'name': 'Aerilate', 'desc': "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."},
  {'name': 'Aftermath', 'desc': "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented."},
  {'name': 'Air Lock', 'desc': 'While this Pokemon is active, the effects of weather conditions are disabled.'},
  {'name': 'Analytic', 'desc': "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight."},
  {'name': 'Anger Point', 'desc': 'If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.'},
  {'name': 'Anticipation', 'desc': 'On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.'},
  {'name': 'Arena Trap', 'desc': 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.'},
  {'name': 'Aroma Veil', 'desc': 'This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.'},
  {'name': 'Aura Break', 'desc': 'While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.'},
  {'name': 'Bad Dreams', 'desc': 'Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.'},
  {'name': 'Ball Fetch', 'desc': 'No competitive use.'},
  {'name': 'Battery', 'desc': "This Pokemon's allies have the power of their special attacks multiplied by 1.3."},
  {'name': 'Battle Armor', 'desc': 'This Pokemon cannot be struck by a critical hit.'},
  {'name': 'Battle Bond', 'desc': 'If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.'},
  {'name': 'Beast Boost', 'desc': "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon."},
  {'name': 'Berserk', 'desc': 'When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.'},
  {'name': 'Big Pecks', 'desc': "Prevents other Pokemon from lowering this Pokemon's Defense stat stage."},
  {'name': 'Blaze', 'desc': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.'},
  {'name': 'Bulletproof', 'desc': 'This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.'},
  {'name': 'Cheek Pouch', 'desc': "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect."},
  {'name': 'Chlorophyll', 'desc': "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled."},
  {'name': 'Clear Body', 'desc': "Prevents other Pokemon from lowering this Pokemon's stat stages."},
  {'name': 'Cloud Nine', 'desc': 'While this Pokemon is active, the effects of weather conditions are disabled.'},
  {'name': 'Color Change', 'desc': "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect."},
  {'name': 'Comatose', 'desc': 'This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.'},
  {'name': 'Competitive', 'desc': "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon."},
  {'name': 'Compound Eyes', 'desc': "This Pokemon's moves have their accuracy multiplied by 1.3."},
  {'name': 'Contrary', 'desc': 'If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.'},
  {'name': 'Corrosion', 'desc': 'This Pokemon can poison or badly poison other Pokemon regardless of their typing.'},
  {'name': 'Cotton Down', 'desc': 'When the Pokemon is hit by an attack, it scatters cotton fluff around and lowers the Speed stat of all Pokemon except itself.'},
  {'name': 'Cursed Body', 'desc': "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled."},
  {'name': 'Cute Charm', 'desc': 'There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.'},
  {'name': 'Damp', 'desc': 'While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.'},
  {'name': 'Dancer', 'desc': 'After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.'},
  {'name': 'Dark Aura', 'desc': 'While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.'},
  {'name': 'Dauntless Shield', 'desc': "On switch-in, this Pokemon's Defense is raised by 1 stage."},
  {'name': 'Dazzling', 'desc': 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.'},
  {'name': 'Defeatist', 'desc': 'While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.'},
  {'name': 'Defiant', 'desc': "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon."},
  {'name': 'Delta Stream', 'desc': 'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.'},
  {'name': 'Desolate Land', 'desc': 'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.'},
  {'name': 'Disguise', 'desc': 'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.'},
  {'name': 'Download', 'desc': "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower."},
  {'name': 'Drizzle', 'desc': 'On switch-in, this Pokemon summons Rain Dance.'},
  {'name': 'Drought', 'desc': 'On switch-in, this Pokemon summons Sunny Day.'},
  {'name': 'Dry Skin', 'desc': 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokemon is holding Utility Umbrella, the effects of weather are nullified.'},
  {'name': 'Early Bird', 'desc': "This Pokemon's sleep counter drops by 2 instead of 1."},
  {'name': 'Effect Spore', 'desc': '30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.'},
  {'name': 'Electric Surge', 'desc': 'On switch-in, this Pokemon summons Electric Terrain.'},
  {'name': 'Emergency Exit', 'desc': 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.'},
  {'name': 'Fairy Aura', 'desc': 'While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.'},
  {'name': 'Filter', 'desc': 'This Pokemon receives 3/4 damage from supereffective attacks.'},
  {'name': 'Flame Body', 'desc': '30% chance a Pokemon making contact with this Pokemon will be burned.'},
  {'name': 'Flare Boost', 'desc': 'While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.'},
  {'name': 'Flash Fire', 'desc': 'This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.'},
  {'name': 'Flower Gift', 'desc': 'If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts.'},
  {'name': 'Flower Veil', 'desc': "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon."},
  {'name': 'Fluffy', 'desc': 'This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.'},
  {'name': 'Forecast', 'desc': "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types."},
  {'name': 'Forewarn', 'desc': 'On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.'},
  {'name': 'Friend Guard', 'desc': "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks."},
  {'name': 'Frisk', 'desc': 'On switch-in, this Pokemon identifies the held items of all opposing Pokemon.'},
  {'name': 'Full Metal Body', 'desc': "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability."},
  {'name': 'Fur Coat', 'desc': "This Pokemon's Defense is doubled."},
  {'name': 'Gale Wings', 'desc': 'If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.'},
  {'name': 'Galvanize', 'desc': "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."},
  {'name': 'Gluttony', 'desc': 'When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.'},
  {'name': 'Gooey', 'desc': 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.'},
  {'name': 'Gorilla Tactics', 'desc': "Boosts the Pokemon's Attack stat but only allows the use of the first selected move."},
  {'name': 'Grass Pelt', 'desc': "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5."},
  {'name': 'Grassy Surge', 'desc': 'On switch-in, this Pokemon summons Grassy Terrain.'},
  {'name': 'Gulp Missile', 'desc': "When the Pokemon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to deal 25% damage. If the base HP is below 50%, the prey will be a Pikachu and paralyze the opponent after being damaged. Otherwise, the prey is an Arrokuda and will lower the opponent's Def by 1 stage after being damaged."},
  {'name': 'Guts', 'desc': "If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored."},
  {'name': 'Harvest', 'desc': 'If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.'},
  {'name': 'Healer', 'desc': "There is a 30% chance of curing an adjacent ally's major status condition at the end of each turn."},
  {'name': 'Heatproof', 'desc': 'The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.'},
  {'name': 'Heavy Metal', 'desc': "This Pokemon's weight is doubled."},
  {'name': 'Honey Gather', 'desc': 'No competitive use.'},
  {'name': 'Huge Power', 'desc': "This Pokemon's Attack is doubled."},
  {'name': 'Hunger Switch', 'desc': 'The Pokemon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of each turn.'},
  {'name': 'Hustle', 'desc': "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8."},
  {'name': 'Hydration', 'desc': 'This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active. If this Pokemon is holding Utility Umbrella, its major status condition will not be cured.'},
  {'name': 'Hyper Cutter', 'desc': "Prevents other Pokemon from lowering this Pokemon's Attack stat stage."},
  {'name': 'Ice Body', 'desc': 'If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.'},
  {'name': 'Ice Face', 'desc': 'If this Pokemon is a Eiscue, the first physical hit it takes will deal 0 damage. Its ice head is then broken, it changes to Noice Form. The ice will be restored when hail is summoned or when the Pokemon is switched in while hail is active.'},
  {'name': 'Ice Scales', 'desc': "This Pokemon's Special Defense is doubled."},
  {'name': 'Illuminate', 'desc': 'No competitive use.'},
  {'name': 'Illusion', 'desc': "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon."},
  {'name': 'Immunity', 'desc': 'This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.'},
  {'name': 'Imposter', 'desc': 'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.'},
  {'name': 'Infiltrator', 'desc': "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil."},
  {'name': 'Innards Out', 'desc': "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon."},
  {'name': 'Inner Focus', 'desc': 'This Pokemon cannot be made to flinch. Immune to Intimidate.'},
  {'name': 'Insomnia', 'desc': 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.'},
  {'name': 'Intimidate', 'desc': 'On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokemon behind a substitute are immune.'},
  {'name': 'Intrepid Sword', 'desc': "On switch-in, this Pokemon's Attack is raised by 1 stage."},
  {'name': 'Iron Barbs', 'desc': 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.'},
  {'name': 'Iron Fist', 'desc': "This Pokemon's punch-based attacks have their power multiplied by 1.2."},
  {'name': 'Justified', 'desc': "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move."},
  {'name': 'Keen Eye', 'desc': "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage."},
  {'name': 'Klutz', 'desc': "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects."},
  {'name': 'Leaf Guard', 'desc': 'If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a major status condition and Rest will fail for it.'},
  {'name': 'Levitate', 'desc': 'This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.'},
  {'name': 'Libero', 'desc': "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type."},
  {'name': 'Light Metal', 'desc': "This Pokemon's weight is halved."},
  {'name': 'Lightning Rod', 'desc': 'This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.'},
  {'name': 'Limber', 'desc': 'This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.'},
  {'name': 'Liquid Ooze', 'desc': 'This Pokemon damages those draining HP from it for as much as they would heal.'},
  {'name': 'Liquid Voice', 'desc': "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."},
  {'name': 'Long Reach', 'desc': "This Pokemon's attacks do not make contact with the target."},
  {'name': 'Magic Bounce', 'desc': 'This Pokemon blocks certain status moves and instead uses the move against the original user.'},
  {'name': 'Magic Guard', 'desc': 'This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.'},
  {'name': 'Magician', 'desc': 'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.'},
  {'name': 'Magma Armor', 'desc': 'This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.'},
  {'name': 'Magnet Pull', 'desc': 'Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.'},
  {'name': 'Marvel Scale', 'desc': 'If this Pokemon has a major status condition, its Defense is multiplied by 1.5.'},
  {'name': 'Mega Launcher', 'desc': "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down."},
  {'name': 'Merciless', 'desc': "This Pokemon's attacks are critical hits if the target is poisoned."},
  {'name': 'Mimicry', 'desc': "Changes the Pokemon's type depending on the terrain."},
  {'name': 'Minus', 'desc': "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5."},
  {'name': 'Mirror Armor', 'desc': 'Bounces back only the stat-lowering effects that the Pokemon receives.'},
  {'name': 'Misty Surge', 'desc': 'On switch-in, this Pokemon summons Misty Terrain.'},
  {'name': 'Mold Breaker', 'desc': "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."},
  {'name': 'Moody', 'desc': 'This Pokemon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn.'},
  {'name': 'Motor Drive', 'desc': 'This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.'},
  {'name': 'Mountaineer', 'desc': 'On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.'},
  {'name': 'Moxie', 'desc': "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon."},
  {'name': 'Multiscale', 'desc': 'If this Pokemon is at full HP, damage taken from attacks is halved.'},
  {'name': 'Multitype', 'desc': 'If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.'},
  {'name': 'Mummy', 'desc': 'Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.'},
  {'name': 'Natural Cure', 'desc': 'This Pokemon has its major status condition cured when it switches out.'},
  {'name': 'Neuroforce', 'desc': "This Pokemon's attacks that are super effective against the target do 1.25x damage."},
  {'name': 'Neutralizing Gas', 'desc': "If the Pokemon with Neutralizing Gas is in the battle, the effects of all Pokemon's Abilities will be nullified or will not be triggered."},
  {'name': 'No Ability', 'desc': 'Does nothing.'},
  {'name': 'No Guard', 'desc': 'Every move used by or against this Pokemon will always hit.'},
  {'name': 'Normalize', 'desc': "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type."},
  {'name': 'Oblivious', 'desc': 'This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate.'},
  {'name': 'Overcoat', 'desc': 'This Pokemon is immune to powder moves and damage from Sandstorm or Hail.'},
  {'name': 'Overgrow', 'desc': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.'},
  {'name': 'Own Tempo', 'desc': 'This Pokemon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate.'},
  {'name': 'Parental Bond', 'desc': "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets."},
  {'name': 'Pastel Veil', 'desc': 'Protects the Pokemon and its ally Pokemon from being poisoned.'},
  {'name': 'Perish Body', 'desc': 'When hit by a move that makes direct contact, the Pokemon and the attacker will faint after three turns unless they switch out of battle.'},
  {'name': 'Persistent', 'desc': 'The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.'},
  {'name': 'Pickpocket', 'desc': 'If this Pokemon has no item, it steals the item off a Pokemon that makes contact with it. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.'},
  {'name': 'Pickup', 'desc': 'If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.'},
  {'name': 'Pixilate', 'desc': "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."},
  {'name': 'Plus', 'desc': "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5."},
  {'name': 'Poison Heal', 'desc': 'If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.'},
  {'name': 'Poison Point', 'desc': '30% chance a Pokemon making contact with this Pokemon will be poisoned.'},
  {'name': 'Poison Touch', 'desc': "This Pokemon's contact moves have a 30% chance of poisoning."},
  {'name': 'Power Construct', 'desc': 'If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.'},
  {'name': 'Power Spot', 'desc': "This Pokemon's allies have the base power of their moves multiplied by 1.3."},
  {'name': 'Power of Alchemy', 'desc': 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.'},
  {'name': 'Prankster', 'desc': "This Pokemon's Status moves have priority raised by 1, but Dark types are immune."},
  {'name': 'Pressure', 'desc': "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP."},
  {'name': 'Primordial Sea', 'desc': 'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.'},
  {'name': 'Prism Armor', 'desc': 'This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.'},
  {'name': 'Propeller Tail', 'desc': "Ignores the effects of opposing Pokemon's moves/Abilities that redirect move targets."},
  {'name': 'Protean', 'desc': "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type."},
  {'name': 'Psychic Surge', 'desc': 'On switch-in, this Pokemon summons Psychic Terrain.'},
  {'name': 'Punk Rock', 'desc': 'Boosts the power of sound-based moves. The Pokemon also takes half the damage from these kinds of moves.'},
  {'name': 'Pure Power', 'desc': "This Pokemon's Attack is doubled."},
  {'name': 'Queenly Majesty', 'desc': 'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.'},
  {'name': 'Quick Feet', 'desc': 'If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.'},
  {'name': 'RKS System', 'desc': 'If this Pokemon is a Silvally, its type changes to match its held Memory.'},
  {'name': 'Rain Dish', 'desc': 'If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.'},
  {'name': 'Rattled', 'desc': "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate."},
  {'name': 'Rebound', 'desc': 'On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.'},
  {'name': 'Receiver', 'desc': 'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.'},
  {'name': 'Reckless', 'desc': "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle."},
  {'name': 'Refrigerate', 'desc': "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects."},
  {'name': 'Regenerator', 'desc': 'This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.'},
  {'name': 'Ripen', 'desc': 'Ripens Berries and doubles their effect.'},
  {'name': 'Rivalry', 'desc': "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless."},
  {'name': 'Rock Head', 'desc': 'This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.'},
  {'name': 'Rough Skin', 'desc': 'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.'},
  {'name': 'Run Away', 'desc': 'No competitive use.'},
  {'name': 'Sand Force', 'desc': "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm."},
  {'name': 'Sand Rush', 'desc': "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm."},
  {'name': 'Sand Spit', 'desc': "The Pokemon creates a sandstorm when it's hit by an attack."},
  {'name': 'Sand Stream', 'desc': 'On switch-in, this Pokemon summons Sandstorm.'},
  {'name': 'Sand Veil', 'desc': "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm."},
  {'name': 'Sap Sipper', 'desc': 'This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.'},
  {'name': 'Schooling', 'desc': 'On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.'},
  {'name': 'Scrappy', 'desc': 'This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate.'},
  {'name': 'Screen Cleaner', 'desc': "On switch-in, this Pokemon ends the effects of Reflect, Light Screen, and Aurora Veil for both the user's and the opposing side."},
  {'name': 'Serene Grace', 'desc': "This Pokemon's moves have their secondary effect chance doubled."},
  {'name': 'Shadow Shield', 'desc': 'If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.'},
  {'name': 'Shadow Tag', 'desc': 'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.'},
  {'name': 'Shed Skin', 'desc': 'This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.'},
  {'name': 'Sheer Force', 'desc': "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed."},
  {'name': 'Shell Armor', 'desc': 'This Pokemon cannot be struck by a critical hit.'},
  {'name': 'Shield Dust', 'desc': "This Pokemon is not affected by the secondary effect of another Pokemon's attack."},
  {'name': 'Shields Down', 'desc': 'If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.'},
  {'name': 'Simple', 'desc': "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used."},
  {'name': 'Skill Link', 'desc': "This Pokemon's multi-hit attacks always hit the maximum number of times."},
  {'name': 'Slow Start', 'desc': "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns."},
  {'name': 'Slush Rush', 'desc': "If Hail is active, this Pokemon's Speed is doubled."},
  {'name': 'Sniper', 'desc': 'If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.'},
  {'name': 'Snow Cloak', 'desc': "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail."},
  {'name': 'Snow Warning', 'desc': 'On switch-in, this Pokemon summons Hail.'},
  {'name': 'Solar Power', 'desc': "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP."},
  {'name': 'Solid Rock', 'desc': 'This Pokemon receives 3/4 damage from supereffective attacks.'},
  {'name': 'Soul-Heart', 'desc': "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints."},
  {'name': 'Soundproof', 'desc': 'This Pokemon is immune to sound-based moves, including Heal Bell.'},
  {'name': 'Speed Boost', 'desc': "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field."},
  {'name': 'Stakeout', 'desc': "This Pokemon's attacking stat is doubled against a target that switched in this turn."},
  {'name': 'Stall', 'desc': 'This Pokemon moves last among Pokemon using the same or greater priority moves.'},
  {'name': 'Stalwart', 'desc': "Ignores the effects of opposing Pokemon's Abilities and moves that draw in moves."},
  {'name': 'Stamina', 'desc': "This Pokemon's Defense is raised by 1 stage after it is damaged by a move."},
  {'name': 'Stance Change', 'desc': "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield."},
  {'name': 'Static', 'desc': '30% chance a Pokemon making contact with this Pokemon will be paralyzed.'},
  {'name': 'Steadfast', 'desc': 'If this Pokemon flinches, its Speed is raised by 1 stage.'},
  {'name': 'Steam Engine', 'desc': "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves."},
  {'name': 'Steelworker', 'desc': "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack."},
  {'name': 'Steely Spirit', 'desc': "This Pokemon and its allies' Steel-type moves have their BP mutiplied by 1.5."},
  {'name': 'Stench', 'desc': "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch."},
  {'name': 'Sticky Hold', 'desc': "This Pokemon cannot lose its held item due to another Pokemon's attack."},
  {'name': 'Storm Drain', 'desc': 'This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.'},
  {'name': 'Strong Jaw', 'desc': "This Pokemon's bite-based attacks have their power multiplied by 1.5."},
  {'name': 'Sturdy', 'desc': 'If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.'},
  {'name': 'Suction Cups', 'desc': "This Pokemon cannot be forced to switch out by another Pokemon's attack or item."},
  {'name': 'Super Luck', 'desc': "This Pokemon's critical hit ratio is raised by 1 stage."},
  {'name': 'Surge Surfer', 'desc': "If Electric Terrain is active, this Pokemon's Speed is doubled."},
  {'name': 'Swarm', 'desc': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.'},
  {'name': 'Sweet Veil', 'desc': 'This Pokemon and its allies cannot fall asleep.'},
  {'name': 'Swift Swim', 'desc': "If Rain Dance is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled."},
  {'name': 'Symbiosis', 'desc': "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off."},
  {'name': 'Synchronize', 'desc': 'If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.'},
  {'name': 'Tangled Feet', 'desc': "This Pokemon's evasiveness is doubled as long as it is confused."},
  {'name': 'Tangling Hair', 'desc': 'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.'},
  {'name': 'Technician', 'desc': "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle."},
  {'name': 'Telepathy', 'desc': 'This Pokemon does not take damage from attacks made by its allies.'},
  {'name': 'Teravolt', 'desc': "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."},
  {'name': 'Thick Fat', 'desc': "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon."},
  {'name': 'Tinted Lens', 'desc': "This Pokemon's attacks that are not very effective on a target deal double damage."},
  {'name': 'Torrent', 'desc': 'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.'},
  {'name': 'Tough Claws', 'desc': "This Pokemon's contact moves have their power multiplied by 1.3."},
  {'name': 'Toxic Boost', 'desc': 'While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.'},
  {'name': 'Trace', 'desc': "On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon's Ability. However, if one or more adjacent Pokemon has the Ability \"No Ability\", Trace won't copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned \"No Ability\", as well as Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Schooling, Stance Change, Trace, and Zen Mode."},
  {'name': 'Triage', 'desc': "This Pokemon's healing moves have their priority increased by 3."},
  {'name': 'Truant', 'desc': 'This Pokemon skips every other turn instead of using a move.'},
  {'name': 'Turboblaze', 'desc': "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."},
  {'name': 'Unaware', 'desc': "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage."},
  {'name': 'Unburden', 'desc': 'If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.'},
  {'name': 'Unnerve', 'desc': "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon's Speed tiers."},
  {'name': 'Victory Star', 'desc': "This Pokemon and its allies' moves have their accuracy multiplied by 1.1."},
  {'name': 'Vital Spirit', 'desc': 'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.'},
  {'name': 'Volt Absorb', 'desc': 'This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.'},
  {'name': 'Wandering Spirit', 'desc': 'The Pokemon exchanges Abilities with a Pokemon that hits it with a move that makes direct contact.'},
  {'name': 'Water Absorb', 'desc': 'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.'},
  {'name': 'Water Bubble', 'desc': "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it."},
  {'name': 'Water Compaction', 'desc': "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move."},
  {'name': 'Water Veil', 'desc': 'This Pokemon cannot be burned. Gaining this Ability while burned cures it.'},
  {'name': 'Weak Armor', 'desc': 'If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.'},
  {'name': 'White Smoke', 'desc': "Prevents other Pokemon from lowering this Pokemon's stat stages."},
  {'name': 'Wimp Out', 'desc': 'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.'},
  {'name': 'Wonder Guard', 'desc': 'This Pokemon can only be damaged by supereffective moves and indirect damage.'},
  {'name': 'Wonder Skin', 'desc': 'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.'},
  { 'name': 'Zen Mode', 'desc': "If this Pokemon is a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed." },
]
