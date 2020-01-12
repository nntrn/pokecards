const abilities = {
  noability: {
    shortDesc: 'Does nothing.',
    id: 'noability',
    isNonstandard: 'Past',
    name: 'No Ability',
    rating: 0.1,
    num: 0,
  },
  adaptability: {
    desc:
      "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
    shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
    id: 'adaptability',
    name: 'Adaptability',
    rating: 4,
    num: 91,
  },
  aerilate: {
    desc:
      "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",
    onModifyTypePriority: -1,
    onBasePowerPriority: 8,
    id: 'aerilate',
    name: 'Aerilate',
    rating: 4,
    num: 185,
  },
  aftermath: {
    desc:
      "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.",
    shortDesc:
      "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
    id: 'aftermath',
    name: 'Aftermath',
    onAfterDamageOrder: 1,
    rating: 2.5,
    num: 106,
  },
  airlock: {
    shortDesc:
      'While this Pokemon is active, the effects of weather conditions are disabled.',
    suppressWeather: true,
    id: 'airlock',
    name: 'Air Lock',
    rating: 2,
    num: 76,
  },
  analytic: {
    desc:
      "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
    shortDesc:
      "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
    onBasePowerPriority: 8,
    id: 'analytic',
    name: 'Analytic',
    rating: 2.5,
    num: 148,
  },
  angerpoint: {
    desc:
      'If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.',
    shortDesc:
      'If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.',
    id: 'angerpoint',
    name: 'Anger Point',
    rating: 1.5,
    num: 83,
  },
  anticipation: {
    desc:
      'On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.',
    shortDesc:
      'On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.',
    id: 'anticipation',
    name: 'Anticipation',
    rating: 0.5,
    num: 107,
  },
  arenatrap: {
    desc:
      'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.',
    shortDesc: 'Prevents adjacent foes from choosing to switch unless they are airborne.',
    id: 'arenatrap',
    name: 'Arena Trap',
    rating: 5,
    num: 71,
  },
  aromaveil: {
    desc:
      'This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.',
    shortDesc:
      'Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.',
    id: 'aromaveil',
    name: 'Aroma Veil',
    rating: 2,
    num: 165,
  },
  aurabreak: {
    desc:
      'While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.',
    shortDesc:
      'While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.',
    id: 'aurabreak',
    name: 'Aura Break',
    rating: 1,
    num: 188,
  },
  baddreams: {
    desc:
      'Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.',
    shortDesc:
      'Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.',
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    id: 'baddreams',
    name: 'Bad Dreams',
    rating: 1.5,
    num: 123,
  },
  ballfetch: {
    shortDesc: 'No competitive use.',
    id: 'ballfetch',
    name: 'Ball Fetch',
    rating: 0,
    num: 237,
  },
  battery: {
    shortDesc:
      "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",
    onAllyBasePowerPriority: 8,
    id: 'battery',
    name: 'Battery',
    rating: 0,
    num: 217,
  },
  battlearmor: {
    shortDesc: 'This Pokemon cannot be struck by a critical hit.',
    onCriticalHit: false,
    id: 'battlearmor',
    name: 'Battle Armor',
    rating: 1,
    num: 4,
  },
  battlebond: {
    desc:
      'If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.',
    shortDesc:
      'After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.',
    onModifyMovePriority: -1,
    id: 'battlebond',
    name: 'Battle Bond',
    rating: 4,
    num: 210,
  },
  beastboost: {
    desc:
      "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.",
    shortDesc:
      "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",
    id: 'beastboost',
    name: 'Beast Boost',
    rating: 3.5,
    num: 224,
  },
  berserk: {
    desc:
      'When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
    shortDesc:
      "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
    id: 'berserk',
    name: 'Berserk',
    rating: 2.5,
    num: 201,
  },
  bigpecks: {
    shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",
    id: 'bigpecks',
    name: 'Big Pecks',
    rating: 0.5,
    num: 145,
  },
  blaze: {
    desc:
      'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.',
    shortDesc:
      "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'blaze',
    name: 'Blaze',
    rating: 2,
    num: 66,
  },
  bulletproof: {
    desc:
      'This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.',
    shortDesc:
      'Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).',
    id: 'bulletproof',
    name: 'Bulletproof',
    rating: 3,
    num: 171,
  },
  cheekpouch: {
    desc:
      "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect.",
    shortDesc:
      "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
    id: 'cheekpouch',
    name: 'Cheek Pouch',
    rating: 1.5,
    num: 167,
  },
  chlorophyll: {
    desc:
      "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled.",
    shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
    id: 'chlorophyll',
    name: 'Chlorophyll',
    rating: 3,
    num: 34,
  },
  clearbody: {
    shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
    id: 'clearbody',
    name: 'Clear Body',
    rating: 2,
    num: 29,
  },
  cloudnine: {
    shortDesc:
      'While this Pokemon is active, the effects of weather conditions are disabled.',
    suppressWeather: true,
    id: 'cloudnine',
    name: 'Cloud Nine',
    rating: 2,
    num: 13,
  },
  colorchange: {
    desc:
      "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
    shortDesc:
      "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
    id: 'colorchange',
    name: 'Color Change',
    rating: 0,
    num: 16,
  },
  comatose: {
    desc:
      'This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    shortDesc: 'This Pokemon cannot be statused, and is considered to be asleep.',
    isUnbreakable: true,
    id: 'comatose',
    name: 'Comatose',
    rating: 3.5,
    num: 213,
  },
  competitive: {
    desc:
      "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
    shortDesc:
      "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
    id: 'competitive',
    name: 'Competitive',
    rating: 2.5,
    num: 172,
  },
  compoundeyes: {
    shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
    id: 'compoundeyes',
    name: 'Compound Eyes',
    rating: 3,
    num: 14,
  },
  contrary: {
    desc:
      'If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.',
    shortDesc:
      'If this Pokemon has a stat stage raised it is lowered instead, and vice versa.',
    id: 'contrary',
    name: 'Contrary',
    rating: 4.5,
    num: 126,
  },
  corrosion: {
    shortDesc:
      'This Pokemon can poison or badly poison other Pokemon regardless of their typing.',
    id: 'corrosion',
    name: 'Corrosion',
    rating: 2.5,
    num: 212,
  },
  cottondown: {
    desc:
      'When the PokÃ©mon is hit by an attack, it scatters cotton fluff around and lowers the Speed stat of all PokÃ©mon except itself.',
    shortDesc: 'Lowers Speed of all PokÃ©mon except itself when hit by an attack.',
    id: 'cottondown',
    name: 'Cotton Down',
    rating: 2,
    num: 238,
  },
  cursedbody: {
    desc:
      "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
    shortDesc:
      'If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.',
    id: 'cursedbody',
    name: 'Cursed Body',
    rating: 2,
    num: 130,
  },
  cutecharm: {
    desc:
      'There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.',
    shortDesc:
      '30% chance of infatuating Pokemon of the opposite gender if they make contact.',
    id: 'cutecharm',
    name: 'Cute Charm',
    rating: 0.5,
    num: 56,
  },
  damp: {
    desc:
      'While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.',
    shortDesc:
      'Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.',
    id: 'damp',
    name: 'Damp',
    rating: 1,
    num: 6,
  },
  dancer: {
    desc:
      'After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.',
    shortDesc:
      'After another Pokemon uses a dance move, this Pokemon uses the same move.',
    id: 'dancer',
    name: 'Dancer',
    rating: 1.5,
    num: 216,
  },
  darkaura: {
    desc:
      'While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.',
    shortDesc:
      'While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.',
    isUnbreakable: true,
    id: 'darkaura',
    name: 'Dark Aura',
    rating: 3.5,
    num: 186,
  },
  dauntlessshield: {
    shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage.",
    id: 'dauntlessshield',
    name: 'Dauntless Shield',
    rating: 3,
    num: 235,
  },
  dazzling: {
    desc:
      'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
    shortDesc:
      'While this Pokemon is active, allies are protected from opposing priority moves.',
    id: 'dazzling',
    name: 'Dazzling',
    rating: 2,
    num: 219,
  },
  defeatist: {
    desc:
      'While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.',
    shortDesc:
      'While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.',
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'defeatist',
    name: 'Defeatist',
    rating: -1,
    num: 129,
  },
  defiant: {
    desc:
      "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
    shortDesc:
      "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
    id: 'defiant',
    name: 'Defiant',
    rating: 2.5,
    num: 128,
  },
  deltastream: {
    desc:
      'On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.',
    shortDesc:
      'On switch-in, strong winds begin until this Ability is not active in battle.',
    id: 'deltastream',
    name: 'Delta Stream',
    rating: 4,
    num: 191,
  },
  desolateland: {
    desc:
      'On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.',
    shortDesc:
      'On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.',
    id: 'desolateland',
    name: 'Desolate Land',
    rating: 5,
    num: 190,
  },
  disguise: {
    desc:
      'If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.',
    shortDesc:
      '(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.',
    onDamagePriority: 1,
    id: 'disguise',
    name: 'Disguise',
    rating: 4,
    num: 209,
  },
  download: {
    desc:
      "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
    shortDesc:
      "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
    id: 'download',
    name: 'Download',
    rating: 3.5,
    num: 88,
  },
  drizzle: {
    shortDesc: 'On switch-in, this Pokemon summons Rain Dance.',
    id: 'drizzle',
    name: 'Drizzle',
    rating: 4.5,
    num: 2,
  },
  drought: {
    shortDesc: 'On switch-in, this Pokemon summons Sunny Day.',
    id: 'drought',
    name: 'Drought',
    rating: 4.5,
    num: 70,
  },
  dryskin: {
    desc:
      'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokemon is holding Utility Umbrella, the effects of weather are nullified.',
    shortDesc:
      'This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.',
    onFoeBasePowerPriority: 7,
    id: 'dryskin',
    name: 'Dry Skin',
    rating: 3,
    num: 87,
  },
  earlybird: {
    shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",
    id: 'earlybird',
    name: 'Early Bird',
    rating: 1.5,
    num: 48,
  },
  effectspore: {
    desc:
      '30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.',
    shortDesc:
      '30% chance of poison/paralysis/sleep on others making contact with this Pokemon.',
    id: 'effectspore',
    name: 'Effect Spore',
    rating: 2,
    num: 27,
  },
  electricsurge: {
    shortDesc: 'On switch-in, this Pokemon summons Electric Terrain.',
    id: 'electricsurge',
    name: 'Electric Surge',
    rating: 4,
    num: 226,
  },
  emergencyexit: {
    desc:
      'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
    shortDesc: 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
    id: 'emergencyexit',
    name: 'Emergency Exit',
    rating: 1,
    num: 194,
  },
  fairyaura: {
    desc:
      'While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.',
    shortDesc:
      'While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.',
    isUnbreakable: true,
    id: 'fairyaura',
    name: 'Fairy Aura',
    rating: 3.5,
    num: 187,
  },
  filter: {
    shortDesc: 'This Pokemon receives 3/4 damage from supereffective attacks.',
    id: 'filter',
    name: 'Filter',
    rating: 3,
    num: 111,
  },
  flamebody: {
    shortDesc: '30% chance a Pokemon making contact with this Pokemon will be burned.',
    id: 'flamebody',
    name: 'Flame Body',
    rating: 2,
    num: 49,
  },
  flareboost: {
    desc:
      'While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.',
    shortDesc: 'While this Pokemon is burned, its special attacks have 1.5x power.',
    onBasePowerPriority: 8,
    id: 'flareboost',
    name: 'Flare Boost',
    rating: 2,
    num: 138,
  },
  flashfire: {
    desc:
      'This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.',
    shortDesc:
      "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
    effect: { noCopy: true, onModifyAtkPriority: 5, onModifySpAPriority: 5 },
    id: 'flashfire',
    name: 'Flash Fire',
    rating: 3.5,
    num: 18,
  },
  flowergift: {
    desc:
      'If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts.',
    shortDesc:
      "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
    onAllyModifyAtkPriority: 3,
    onModifySpDPriority: 4,
    id: 'flowergift',
    name: 'Flower Gift',
    rating: 1,
    num: 122,
  },
  flowerveil: {
    desc:
      "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.",
    shortDesc:
      "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",
    id: 'flowerveil',
    name: 'Flower Veil',
    rating: 0,
    num: 166,
  },
  fluffy: {
    desc:
      'This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.',
    shortDesc:
      'This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.',
    id: 'fluffy',
    name: 'Fluffy',
    rating: 3,
    num: 218,
  },
  forecast: {
    desc:
      "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types.",
    shortDesc:
      "Castform's type changes to the current weather condition's type, except Sandstorm.",
    id: 'forecast',
    name: 'Forecast',
    rating: 2,
    num: 59,
  },
  forewarn: {
    desc:
      'On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.',
    shortDesc:
      "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",
    id: 'forewarn',
    name: 'Forewarn',
    rating: 0.5,
    num: 108,
  },
  friendguard: {
    shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
    id: 'friendguard',
    name: 'Friend Guard',
    rating: 0,
    num: 132,
  },
  frisk: {
    shortDesc:
      'On switch-in, this Pokemon identifies the held items of all opposing Pokemon.',
    id: 'frisk',
    name: 'Frisk',
    rating: 1.5,
    num: 119,
  },
  fullmetalbody: {
    desc:
      "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
    shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
    isUnbreakable: true,
    id: 'fullmetalbody',
    name: 'Full Metal Body',
    rating: 2,
    num: 230,
  },
  furcoat: {
    shortDesc: "This Pokemon's Defense is doubled.",
    onModifyDefPriority: 6,
    id: 'furcoat',
    name: 'Fur Coat',
    rating: 4,
    num: 169,
  },
  galewings: {
    shortDesc:
      'If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.',
    id: 'galewings',
    name: 'Gale Wings',
    rating: 3,
    num: 177,
  },
  galvanize: {
    desc:
      "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc:
      "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",
    onModifyTypePriority: -1,
    onBasePowerPriority: 8,
    id: 'galvanize',
    name: 'Galvanize',
    rating: 4,
    num: 206,
  },
  gluttony: {
    shortDesc:
      'When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.',
    id: 'gluttony',
    name: 'Gluttony',
    rating: 1.5,
    num: 82,
  },
  gooey: {
    shortDesc:
      'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
    id: 'gooey',
    name: 'Gooey',
    rating: 2,
    num: 183,
  },
  gorillatactics: {
    shortDesc:
      "Boosts the PokÃ©mon's Attack stat but only allows the use of the first selected move.",
    onModifyAtkPriority: 1,
    id: 'gorillatactics',
    name: 'Gorilla Tactics',
    rating: 4.5,
    num: 255,
  },
  grasspelt: {
    shortDesc:
      "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
    onModifyDefPriority: 6,
    id: 'grasspelt',
    name: 'Grass Pelt',
    rating: 0.5,
    num: 179,
  },
  grassysurge: {
    shortDesc: 'On switch-in, this Pokemon summons Grassy Terrain.',
    id: 'grassysurge',
    name: 'Grassy Surge',
    rating: 4,
    num: 229,
  },
  gulpmissile: {
    desc:
      "When the PokÃ©mon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to deal 25% damage. If the base HP is below 50%, the prey will be a Pikachu and paralyze the opponent after being damaged. Otherwise, the prey is an Arrokuda and will lower the opponent's Def by 1 stage after being damaged.",
    shortDesc: 'Get prey with Surf/Dive. When taking damage, prey is used to attack.',
    onDamagePriority: -1,
    id: 'gulpmissile',
    name: 'Gulp Missile',
    rating: 1.5,
    num: 241,
  },
  guts: {
    desc:
      "If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored.",
    shortDesc:
      'If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.',
    onModifyAtkPriority: 5,
    id: 'guts',
    name: 'Guts',
    rating: 3,
    num: 62,
  },
  harvest: {
    desc:
      'If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.',
    shortDesc:
      'If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.',
    id: 'harvest',
    name: 'Harvest',
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    rating: 2.5,
    num: 139,
  },
  healer: {
    desc:
      "There is a 30% chance of curing an adjacent ally's major status condition at the end of each turn.",
    shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
    id: 'healer',
    name: 'Healer',
    onResidualOrder: 5,
    onResidualSubOrder: 1,
    rating: 0,
    num: 131,
  },
  heatproof: {
    desc:
      'The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.',
    shortDesc:
      'The power of Fire-type attacks against this Pokemon is halved; burn damage halved.',
    onSourceBasePowerPriority: 7,
    id: 'heatproof',
    name: 'Heatproof',
    rating: 2,
    num: 85,
  },
  heavymetal: {
    shortDesc: "This Pokemon's weight is doubled.",
    onModifyWeightPriority: 1,
    id: 'heavymetal',
    name: 'Heavy Metal',
    rating: 0,
    num: 134,
  },
  honeygather: {
    shortDesc: 'No competitive use.',
    id: 'honeygather',
    name: 'Honey Gather',
    rating: 0,
    num: 118,
  },
  hugepower: {
    shortDesc: "This Pokemon's Attack is doubled.",
    onModifyAtkPriority: 5,
    id: 'hugepower',
    name: 'Huge Power',
    rating: 5,
    num: 37,
  },
  hungerswitch: {
    desc:
      'The PokÃ©mon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of each turn.',
    shortDesc: 'Changes between Full Belly and Hangry Mode at the end of each turn.',
    id: 'hungerswitch',
    name: 'Hunger Switch',
    rating: 1,
    num: 258,
  },
  hustle: {
    desc:
      "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
    shortDesc:
      "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
    onModifyAtkPriority: 5,
    onModifyMovePriority: -1,
    id: 'hustle',
    name: 'Hustle',
    rating: 3.5,
    num: 55,
  },
  hydration: {
    desc:
      'This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active. If this Pokemon is holding Utility Umbrella, its major status condition will not be cured.',
    shortDesc:
      'This Pokemon has its status cured at the end of each turn if Rain Dance is active.',
    onResidualOrder: 5,
    onResidualSubOrder: 1,
    id: 'hydration',
    name: 'Hydration',
    rating: 1.5,
    num: 93,
  },
  hypercutter: {
    shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
    id: 'hypercutter',
    name: 'Hyper Cutter',
    rating: 1.5,
    num: 52,
  },
  icebody: {
    desc:
      'If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.',
    shortDesc:
      'If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.',
    id: 'icebody',
    name: 'Ice Body',
    rating: 1,
    num: 115,
  },
  iceface: {
    desc:
      'If this Pokemon is a Eiscue, the first physical hit it takes will deal 0 damage. Its ice head is then broken, it changes to Noice Form. The ice will be restored when hail is summoned or when the Pokemon is switched in while hail is active.',
    shortDesc: '(Eiscue only) First physical hit deals 0 damage, breaks ice head.',
    onDamagePriority: 1,
    id: 'iceface',
    name: 'Ice Face',
    rating: 3.5,
    num: 248,
  },
  icescales: {
    shortDesc: "This PokÃ©mon's Special Defense is doubled.",
    id: 'icescales',
    name: 'Ice Scales',
    rating: 3.5,
    num: 246,
  },
  illuminate: {
    shortDesc: 'No competitive use.',
    id: 'illuminate',
    name: 'Illuminate',
    rating: 0,
    num: 35,
  },
  illusion: {
    desc:
      "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
    shortDesc:
      'This Pokemon appears as the last Pokemon in the party until it takes direct damage.',
    isUnbreakable: true,
    id: 'illusion',
    name: 'Illusion',
    rating: 4.5,
    num: 149,
  },
  immunity: {
    shortDesc:
      'This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.',
    id: 'immunity',
    name: 'Immunity',
    rating: 2,
    num: 17,
  },
  imposter: {
    desc:
      'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.',
    shortDesc:
      'On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.',
    id: 'imposter',
    name: 'Imposter',
    rating: 5,
    num: 150,
  },
  infiltrator: {
    desc:
      "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil.",
    shortDesc:
      "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
    id: 'infiltrator',
    name: 'Infiltrator',
    rating: 2.5,
    num: 151,
  },
  innardsout: {
    desc:
      "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
    shortDesc:
      "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",
    id: 'innardsout',
    name: 'Innards Out',
    onAfterDamageOrder: 1,
    rating: 3.5,
    num: 215,
  },
  innerfocus: {
    shortDesc: 'This Pokemon cannot be made to flinch. Immune to Intimidate.',
    onFlinch: false,
    id: 'innerfocus',
    name: 'Inner Focus',
    rating: 1.5,
    num: 39,
  },
  insomnia: {
    shortDesc:
      'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
    id: 'insomnia',
    name: 'Insomnia',
    rating: 2,
    num: 15,
  },
  intimidate: {
    desc:
      'On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokemon behind a substitute are immune.',
    shortDesc:
      'On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.',
    id: 'intimidate',
    name: 'Intimidate',
    rating: 3.5,
    num: 22,
  },
  intrepidsword: {
    shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage.",
    id: 'intrepidsword',
    name: 'Intrepid Sword',
    rating: 4,
    num: 234,
  },
  ironbarbs: {
    desc:
      'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
    shortDesc: 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
    onAfterDamageOrder: 1,
    id: 'ironbarbs',
    name: 'Iron Barbs',
    rating: 2.5,
    num: 160,
  },
  ironfist: {
    desc: "This Pokemon's punch-based attacks have their power multiplied by 1.2.",
    shortDesc:
      "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
    onBasePowerPriority: 8,
    id: 'ironfist',
    name: 'Iron Fist',
    rating: 3,
    num: 89,
  },
  justified: {
    shortDesc:
      "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
    id: 'justified',
    name: 'Justified',
    rating: 2.5,
    num: 154,
  },
  keeneye: {
    desc:
      "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
    shortDesc:
      "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
    id: 'keeneye',
    name: 'Keen Eye',
    rating: 0.5,
    num: 51,
  },
  klutz: {
    desc:
      "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
    shortDesc:
      "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
    id: 'klutz',
    name: 'Klutz',
    rating: -1,
    num: 103,
  },
  leafguard: {
    desc:
      'If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a major status condition and Rest will fail for it.',
    shortDesc:
      'If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.',
    id: 'leafguard',
    name: 'Leaf Guard',
    rating: 0.5,
    num: 102,
  },
  levitate: {
    desc:
      'This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.',
    shortDesc:
      'This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.',
    id: 'levitate',
    name: 'Levitate',
    rating: 3.5,
    num: 26,
  },
  libero: {
    desc:
      "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
    shortDesc:
      "This Pokemon's type changes to match the type of the move it is about to use.",
    id: 'libero',
    name: 'Libero',
    rating: 4.5,
    num: 236,
  },
  lightmetal: {
    shortDesc: "This Pokemon's weight is halved.",
    id: 'lightmetal',
    name: 'Light Metal',
    rating: 1,
    num: 135,
  },
  lightningrod: {
    desc:
      'This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
    shortDesc:
      'This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.',
    id: 'lightningrod',
    name: 'Lightning Rod',
    rating: 3,
    num: 32,
  },
  limber: {
    shortDesc:
      'This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.',
    id: 'limber',
    name: 'Limber',
    rating: 2,
    num: 7,
  },
  liquidooze: {
    shortDesc:
      'This Pokemon damages those draining HP from it for as much as they would heal.',
    id: 'liquidooze',
    name: 'Liquid Ooze',
    rating: 1.5,
    num: 64,
  },
  liquidvoice: {
    desc:
      "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc: "This Pokemon's sound-based moves become Water type.",
    onModifyTypePriority: -1,
    id: 'liquidvoice',
    name: 'Liquid Voice',
    rating: 1.5,
    num: 204,
  },
  longreach: {
    shortDesc: "This Pokemon's attacks do not make contact with the target.",
    id: 'longreach',
    name: 'Long Reach',
    rating: 1,
    num: 203,
  },
  magicbounce: {
    desc:
      'This Pokemon blocks certain status moves and instead uses the move against the original user.',
    shortDesc:
      'This Pokemon blocks certain status moves and bounces them back to the user.',
    id: 'magicbounce',
    name: 'Magic Bounce',
    onTryHitPriority: 1,
    effect: { duration: 1 },
    rating: 4,
    num: 156,
  },
  magicguard: {
    desc:
      'This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.',
    shortDesc: 'This Pokemon can only be damaged by direct attacks.',
    id: 'magicguard',
    name: 'Magic Guard',
    rating: 4,
    num: 98,
  },
  magician: {
    desc:
      'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.',
    shortDesc:
      'If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.',
    id: 'magician',
    name: 'Magician',
    rating: 1.5,
    num: 170,
  },
  magmaarmor: {
    shortDesc:
      'This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.',
    id: 'magmaarmor',
    name: 'Magma Armor',
    rating: 1,
    num: 40,
  },
  magnetpull: {
    desc:
      'Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.',
    shortDesc: 'Prevents adjacent Steel-type foes from choosing to switch.',
    id: 'magnetpull',
    name: 'Magnet Pull',
    rating: 4.5,
    num: 42,
  },
  marvelscale: {
    desc:
      'If this Pokemon has a major status condition, its Defense is multiplied by 1.5.',
    shortDesc: 'If this Pokemon is statused, its Defense is 1.5x.',
    onModifyDefPriority: 6,
    id: 'marvelscale',
    name: 'Marvel Scale',
    rating: 2.5,
    num: 63,
  },
  megalauncher: {
    desc:
      "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
    shortDesc:
      "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
    onBasePowerPriority: 8,
    id: 'megalauncher',
    name: 'Mega Launcher',
    rating: 3,
    num: 178,
  },
  merciless: {
    shortDesc: "This Pokemon's attacks are critical hits if the target is poisoned.",
    id: 'merciless',
    name: 'Merciless',
    rating: 2,
    num: 196,
  },
  mimicry: {
    shortDesc: "Changes the PokÃ©mon's type depending on the terrain.",
    effect: {},
    id: 'mimicry',
    name: 'Mimicry',
    rating: 0.5,
    num: 250,
  },
  minus: {
    desc:
      "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
    shortDesc:
      "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
    onModifySpAPriority: 5,
    id: 'minus',
    name: 'Minus',
    rating: 0,
    num: 58,
  },
  mirrorarmor: {
    shortDesc: 'Bounces back only the stat-lowering effects that the PokÃ©mon receives.',
    id: 'mirrorarmor',
    name: 'Mirror Armor',
    rating: 2,
    num: 240,
  },
  mistysurge: {
    shortDesc: 'On switch-in, this Pokemon summons Misty Terrain.',
    id: 'mistysurge',
    name: 'Misty Surge',
    rating: 4,
    num: 228,
  },
  moldbreaker: {
    shortDesc:
      "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
    id: 'moldbreaker',
    name: 'Mold Breaker',
    rating: 3.5,
    num: 104,
  },
  moody: {
    desc:
      'This Pokemon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn.',
    shortDesc:
      'Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn.',
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    id: 'moody',
    name: 'Moody',
    rating: 5,
    num: 141,
  },
  motordrive: {
    desc:
      'This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.',
    shortDesc:
      "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
    id: 'motordrive',
    name: 'Motor Drive',
    rating: 3,
    num: 78,
  },
  moxie: {
    desc:
      "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
    shortDesc:
      "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
    id: 'moxie',
    name: 'Moxie',
    rating: 3.5,
    num: 153,
  },
  multiscale: {
    shortDesc: 'If this Pokemon is at full HP, damage taken from attacks is halved.',
    id: 'multiscale',
    name: 'Multiscale',
    rating: 3.5,
    num: 136,
  },
  multitype: {
    shortDesc:
      'If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.',
    id: 'multitype',
    name: 'Multitype',
    rating: 4,
    num: 121,
  },
  mummy: {
    desc:
      'Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.',
    shortDesc:
      'Pokemon making contact with this Pokemon have their Ability changed to Mummy.',
    id: 'mummy',
    name: 'Mummy',
    rating: 2.5,
    num: 152,
  },
  naturalcure: {
    shortDesc: 'This Pokemon has its major status condition cured when it switches out.',
    id: 'naturalcure',
    name: 'Natural Cure',
    rating: 3,
    num: 30,
  },
  neuroforce: {
    shortDesc:
      "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
    id: 'neuroforce',
    name: 'Neuroforce',
    rating: 2.5,
    num: 233,
  },
  neutralizinggas: {
    desc:
      "If the PokÃ©mon with Neutralizing Gas is in the battle, the effects of all PokÃ©mon's Abilities will be nullified or will not be triggered.",
    shortDesc: 'Nullifies abilities while on the field.',
    id: 'neutralizinggas',
    name: 'Neutralizing Gas',
    rating: 5,
    num: 256,
  },
  noguard: {
    shortDesc: 'Every move used by or against this Pokemon will always hit.',
    onAnyInvulnerabilityPriority: 1,
    id: 'noguard',
    name: 'No Guard',
    rating: 4,
    num: 99,
  },
  normalize: {
    desc:
      "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
    shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
    onModifyTypePriority: 1,
    onBasePowerPriority: 8,
    id: 'normalize',
    name: 'Normalize',
    rating: 0,
    num: 96,
  },
  oblivious: {
    desc:
      'This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate.',
    shortDesc: 'This Pokemon cannot be infatuated or taunted. Immune to Intimidate.',
    id: 'oblivious',
    name: 'Oblivious',
    rating: 1.5,
    num: 12,
  },
  overcoat: {
    shortDesc:
      'This Pokemon is immune to powder moves and damage from Sandstorm or Hail.',
    onTryHitPriority: 1,
    id: 'overcoat',
    name: 'Overcoat',
    rating: 2,
    num: 142,
  },
  overgrow: {
    desc:
      'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.',
    shortDesc:
      "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'overgrow',
    name: 'Overgrow',
    rating: 2,
    num: 65,
  },
  owntempo: {
    desc:
      'This Pokemon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate.',
    shortDesc: 'This Pokemon cannot be confused. Immune to Intimidate.',
    id: 'owntempo',
    name: 'Own Tempo',
    rating: 1.5,
    num: 20,
  },
  parentalbond: {
    desc:
      "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
    shortDesc:
      "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
    onBasePowerPriority: 8,
    id: 'parentalbond',
    name: 'Parental Bond',
    rating: 4.5,
    num: 184,
  },
  pastelveil: {
    shortDesc: 'Protects the PokÃ©mon and its ally PokÃ©mon from being poisoned.',
    id: 'pastelveil',
    name: 'Pastel Veil',
    rating: 2,
    num: 257,
  },
  perishbody: {
    desc:
      'When hit by a move that makes direct contact, the PokÃ©mon and the attacker will faint after three turns unless they switch out of battle.',
    shortDesc:
      'When hit by a contact move, the PokÃ©mon and the attacker faint in 3 turns.',
    id: 'perishbody',
    name: 'Perish Body',
    rating: 1,
    num: 253,
  },
  pickpocket: {
    desc:
      'If this Pokemon has no item, it steals the item off a Pokemon that makes contact with it. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.',
    shortDesc:
      'If this Pokemon has no item, it steals the item off a Pokemon making contact with it.',
    id: 'pickpocket',
    name: 'Pickpocket',
    rating: 1,
    num: 124,
  },
  pickup: {
    shortDesc:
      'If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.',
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    id: 'pickup',
    name: 'Pickup',
    rating: 0.5,
    num: 53,
  },
  pixilate: {
    desc:
      "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
    onModifyTypePriority: -1,
    onBasePowerPriority: 8,
    id: 'pixilate',
    name: 'Pixilate',
    rating: 4,
    num: 182,
  },
  plus: {
    desc:
      "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
    shortDesc:
      "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
    onModifySpAPriority: 5,
    id: 'plus',
    name: 'Plus',
    rating: 0,
    num: 57,
  },
  poisonheal: {
    desc:
      'If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.',
    shortDesc:
      'This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.',
    onDamagePriority: 1,
    id: 'poisonheal',
    name: 'Poison Heal',
    rating: 4,
    num: 90,
  },
  poisonpoint: {
    shortDesc: '30% chance a Pokemon making contact with this Pokemon will be poisoned.',
    id: 'poisonpoint',
    name: 'Poison Point',
    rating: 1.5,
    num: 38,
  },
  poisontouch: {
    shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
    id: 'poisontouch',
    name: 'Poison Touch',
    rating: 2,
    num: 143,
  },
  powerconstruct: {
    desc:
      'If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.',
    shortDesc:
      'If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.',
    onResidualOrder: 27,
    id: 'powerconstruct',
    name: 'Power Construct',
    rating: 5,
    num: 211,
  },
  powerofalchemy: {
    desc:
      'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
    shortDesc: 'This Pokemon copies the Ability of an ally that faints.',
    id: 'powerofalchemy',
    name: 'Power of Alchemy',
    rating: 0,
    num: 223,
  },
  powerspot: {
    shortDesc:
      "This Pokemon's allies have the base power of their moves multiplied by 1.3.",
    onAllyBasePowerPriority: 8,
    id: 'powerspot',
    name: 'Power Spot',
    rating: 0,
    num: 249,
  },
  prankster: {
    shortDesc:
      "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
    id: 'prankster',
    name: 'Prankster',
    rating: 4,
    num: 158,
  },
  pressure: {
    desc:
      "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP.",
    shortDesc:
      "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
    id: 'pressure',
    name: 'Pressure',
    rating: 2.5,
    num: 46,
  },
  primordialsea: {
    desc:
      'On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.',
    shortDesc:
      'On switch-in, heavy rain begins until this Ability is not active in battle.',
    id: 'primordialsea',
    name: 'Primordial Sea',
    rating: 4.5,
    num: 189,
  },
  prismarmor: {
    desc:
      'This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    shortDesc: 'This Pokemon receives 3/4 damage from supereffective attacks.',
    isUnbreakable: true,
    id: 'prismarmor',
    name: 'Prism Armor',
    rating: 3,
    num: 232,
  },
  propellertail: {
    shortDesc:
      "Ignores the effects of opposing PokÃ©mon's moves/Abilities that redirect move targets.",
    onRedirectTargetPriority: 3,
    id: 'propellertail',
    name: 'Propeller Tail',
    rating: 0,
    num: 239,
  },
  protean: {
    desc:
      "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
    shortDesc:
      "This Pokemon's type changes to match the type of the move it is about to use.",
    id: 'protean',
    name: 'Protean',
    rating: 4.5,
    num: 168,
  },
  psychicsurge: {
    shortDesc: 'On switch-in, this Pokemon summons Psychic Terrain.',
    id: 'psychicsurge',
    name: 'Psychic Surge',
    rating: 4,
    num: 227,
  },
  punkrock: {
    desc:
      'Boosts the power of sound-based moves. The PokÃ©mon also takes half the damage from these kinds of moves.',
    shortDesc: 'Boosts sound move power, 0.5Ã— damage from sound moves.',
    onBasePowerPriority: 8,
    id: 'punkrock',
    name: 'Punk Rock',
    rating: 3,
    num: 244,
  },
  purepower: {
    shortDesc: "This Pokemon's Attack is doubled.",
    onModifyAtkPriority: 5,
    id: 'purepower',
    name: 'Pure Power',
    rating: 5,
    num: 74,
  },
  queenlymajesty: {
    desc:
      'While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.',
    shortDesc:
      'While this Pokemon is active, allies are protected from opposing priority moves.',
    id: 'queenlymajesty',
    name: 'Queenly Majesty',
    rating: 2,
    num: 214,
  },
  quickfeet: {
    desc:
      'If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.',
    shortDesc:
      'If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.',
    id: 'quickfeet',
    name: 'Quick Feet',
    rating: 2.5,
    num: 95,
  },
  raindish: {
    desc:
      'If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.',
    shortDesc:
      'If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.',
    id: 'raindish',
    name: 'Rain Dish',
    rating: 1.5,
    num: 44,
  },
  rattled: {
    desc:
      "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate.",
    shortDesc:
      'Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.',
    id: 'rattled',
    name: 'Rattled',
    rating: 1.5,
    num: 155,
  },
  receiver: {
    desc:
      'This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.',
    shortDesc: 'This Pokemon copies the Ability of an ally that faints.',
    id: 'receiver',
    name: 'Receiver',
    rating: 0,
    num: 222,
  },
  reckless: {
    desc:
      "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
    shortDesc:
      "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
    onBasePowerPriority: 8,
    id: 'reckless',
    name: 'Reckless',
    rating: 3,
    num: 120,
  },
  refrigerate: {
    desc:
      "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
    shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",
    onModifyTypePriority: -1,
    onBasePowerPriority: 8,
    id: 'refrigerate',
    name: 'Refrigerate',
    rating: 4,
    num: 174,
  },
  regenerator: {
    shortDesc:
      'This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.',
    id: 'regenerator',
    name: 'Regenerator',
    rating: 4.5,
    num: 144,
  },
  ripen: {
    shortDesc: 'Ripens Berries and doubles their effect.',
    id: 'ripen',
    name: 'Ripen',
    rating: 2.5,
    num: 247,
  },
  rivalry: {
    desc:
      "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
    shortDesc:
      "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
    onBasePowerPriority: 8,
    id: 'rivalry',
    name: 'Rivalry',
    rating: 0,
    num: 79,
  },
  rkssystem: {
    shortDesc:
      'If this Pokemon is a Silvally, its type changes to match its held Memory.',
    id: 'rkssystem',
    name: 'RKS System',
    rating: 4,
    num: 225,
  },
  rockhead: {
    desc:
      'This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.',
    shortDesc:
      'This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.',
    id: 'rockhead',
    name: 'Rock Head',
    rating: 3,
    num: 69,
  },
  roughskin: {
    desc:
      'Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.',
    shortDesc: 'Pokemon making contact with this Pokemon lose 1/8 of their max HP.',
    onAfterDamageOrder: 1,
    id: 'roughskin',
    name: 'Rough Skin',
    rating: 2.5,
    num: 24,
  },
  runaway: {
    shortDesc: 'No competitive use.',
    id: 'runaway',
    name: 'Run Away',
    rating: 0,
    num: 50,
  },
  sandforce: {
    desc:
      "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
    shortDesc:
      "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
    onBasePowerPriority: 8,
    id: 'sandforce',
    name: 'Sand Force',
    rating: 2,
    num: 159,
  },
  sandrush: {
    desc:
      "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
    shortDesc:
      "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
    id: 'sandrush',
    name: 'Sand Rush',
    rating: 3,
    num: 146,
  },
  sandspit: {
    shortDesc: "The PokÃ©mon creates a sandstorm when it's hit by an attack.",
    id: 'sandspit',
    name: 'Sand Spit',
    rating: 2,
    num: 245,
  },
  sandstream: {
    shortDesc: 'On switch-in, this Pokemon summons Sandstorm.',
    id: 'sandstream',
    name: 'Sand Stream',
    rating: 4,
    num: 45,
  },
  sandveil: {
    desc:
      "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.",
    shortDesc:
      "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
    id: 'sandveil',
    name: 'Sand Veil',
    rating: 1.5,
    num: 8,
  },
  sapsipper: {
    desc:
      'This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.',
    shortDesc:
      "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
    onTryHitPriority: 1,
    id: 'sapsipper',
    name: 'Sap Sipper',
    rating: 3,
    num: 157,
  },
  schooling: {
    desc:
      'On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.',
    shortDesc:
      'If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.',
    onResidualOrder: 27,
    id: 'schooling',
    name: 'Schooling',
    rating: 2.5,
    num: 208,
  },
  scrappy: {
    desc:
      'This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate.',
    shortDesc: 'Fighting, Normal moves hit Ghost. Immune to Intimidate.',
    onModifyMovePriority: -5,
    id: 'scrappy',
    name: 'Scrappy',
    rating: 3,
    num: 113,
  },
  screencleaner: {
    desc:
      "On switch-in, this PokÃ©mon ends the effects of Reflect, Light Screen, and Aurora Veil for both the user's and the opposing side.",
    shortDesc: 'Removes Reflect, Light Screen, and Aurora Veil on switch-in.',
    id: 'screencleaner',
    name: 'Screen Cleaner',
    rating: 2,
    num: 251,
  },
  serenegrace: {
    shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
    onModifyMovePriority: -2,
    id: 'serenegrace',
    name: 'Serene Grace',
    rating: 3.5,
    num: 32,
  },
  shadowshield: {
    desc:
      'If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    shortDesc: 'If this Pokemon is at full HP, damage taken from attacks is halved.',
    isUnbreakable: true,
    id: 'shadowshield',
    name: 'Shadow Shield',
    rating: 4,
    num: 231,
  },
  shadowtag: {
    desc:
      'Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.',
    shortDesc:
      'Prevents adjacent foes from choosing to switch unless they also have this Ability.',
    id: 'shadowtag',
    name: 'Shadow Tag',
    rating: 5,
    num: 23,
  },
  shedskin: {
    desc:
      'This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.',
    shortDesc:
      'This Pokemon has a 33% chance to have its status cured at the end of each turn.',
    onResidualOrder: 5,
    onResidualSubOrder: 1,
    id: 'shedskin',
    name: 'Shed Skin',
    rating: 3,
    num: 61,
  },
  sheerforce: {
    desc:
      "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.",
    shortDesc:
      "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
    onBasePowerPriority: 8,
    id: 'sheerforce',
    name: 'Sheer Force',
    rating: 3.5,
    num: 125,
  },
  shellarmor: {
    shortDesc: 'This Pokemon cannot be struck by a critical hit.',
    onCriticalHit: false,
    id: 'shellarmor',
    name: 'Shell Armor',
    rating: 1,
    num: 75,
  },
  shielddust: {
    shortDesc:
      "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
    id: 'shielddust',
    name: 'Shield Dust',
    rating: 2,
    num: 19,
  },
  shieldsdown: {
    desc:
      'If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.',
    shortDesc:
      'If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.',
    onResidualOrder: 27,
    isUnbreakable: true,
    id: 'shieldsdown',
    name: 'Shields Down',
    rating: 3.5,
    num: 197,
  },
  simple: {
    desc:
      "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
    shortDesc:
      "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
    id: 'simple',
    name: 'Simple',
    rating: 4.5,
    num: 86,
  },
  skilllink: {
    shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
    id: 'skilllink',
    name: 'Skill Link',
    rating: 3,
    num: 92,
  },
  slowstart: {
    shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",
    effect: { duration: 5, onModifyAtkPriority: 5 },
    id: 'slowstart',
    name: 'Slow Start',
    rating: -1,
    num: 112,
  },
  slushrush: {
    shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
    id: 'slushrush',
    name: 'Slush Rush',
    rating: 2.5,
    num: 202,
  },
  sniper: {
    shortDesc:
      'If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.',
    id: 'sniper',
    name: 'Sniper',
    rating: 2,
    num: 97,
  },
  snowcloak: {
    desc:
      "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.",
    shortDesc:
      "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
    id: 'snowcloak',
    name: 'Snow Cloak',
    rating: 1.5,
    num: 81,
  },
  snowwarning: {
    shortDesc: 'On switch-in, this Pokemon summons Hail.',
    id: 'snowwarning',
    name: 'Snow Warning',
    rating: 4,
    num: 117,
  },
  solarpower: {
    desc:
      "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
    shortDesc:
      "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
    onModifySpAPriority: 5,
    id: 'solarpower',
    name: 'Solar Power',
    rating: 2,
    num: 94,
  },
  solidrock: {
    shortDesc: 'This Pokemon receives 3/4 damage from supereffective attacks.',
    id: 'solidrock',
    name: 'Solid Rock',
    rating: 3,
    num: 116,
  },
  soulheart: {
    desc:
      "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints.",
    shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints.",
    onAnyFaintPriority: 1,
    id: 'soulheart',
    name: 'Soul-Heart',
    rating: 3.5,
    num: 220,
  },
  soundproof: {
    shortDesc: 'This Pokemon is immune to sound-based moves, including Heal Bell.',
    id: 'soundproof',
    name: 'Soundproof',
    rating: 1.5,
    num: 43,
  },
  speedboost: {
    desc:
      "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
    shortDesc:
      "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
    onResidualOrder: 26,
    onResidualSubOrder: 1,
    id: 'speedboost',
    name: 'Speed Boost',
    rating: 4.5,
    num: 3,
  },
  stakeout: {
    shortDesc:
      "This Pokemon's attacking stat is doubled against a target that switched in this turn.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'stakeout',
    name: 'Stakeout',
    rating: 4.5,
    num: 198,
  },
  stall: {
    shortDesc:
      'This Pokemon moves last among Pokemon using the same or greater priority moves.',
    id: 'stall',
    name: 'Stall',
    rating: -1,
    num: 100,
  },
  stalwart: {
    shortDesc:
      "Ignores the effects of opposing PokÃ©mon's Abilities and moves that draw in moves.",
    onRedirectTargetPriority: 3,
    id: 'stalwart',
    name: 'Stalwart',
    rating: 0,
    num: 242,
  },
  stamina: {
    shortDesc:
      "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
    id: 'stamina',
    name: 'Stamina',
    rating: 3.5,
    num: 192,
  },
  stancechange: {
    desc:
      "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
    shortDesc:
      "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
    onBeforeMovePriority: 0.5,
    id: 'stancechange',
    name: 'Stance Change',
    rating: 4.5,
    num: 176,
  },
  static: {
    shortDesc: '30% chance a Pokemon making contact with this Pokemon will be paralyzed.',
    id: 'static',
    name: 'Static',
    rating: 2,
    num: 9,
  },
  steadfast: {
    shortDesc: 'If this Pokemon flinches, its Speed is raised by 1 stage.',
    id: 'steadfast',
    name: 'Steadfast',
    rating: 1,
    num: 80,
  },
  steamengine: {
    shortDesc:
      "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves.",
    id: 'steamengine',
    name: 'Steam Engine',
    rating: 1,
    num: 243,
  },
  steelworker: {
    shortDesc:
      "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'steelworker',
    name: 'Steelworker',
    rating: 3.5,
    num: 200,
  },
  steelyspirit: {
    shortDesc:
      "This Pokemon and its allies' Steel-type moves have their BP mutiplied by 1.5.",
    onAllyBasePowerPriority: 8,
    id: 'steelyspirit',
    name: 'Steely Spirit',
    rating: 3,
    num: 252,
  },
  stench: {
    shortDesc:
      "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch.",
    onModifyMovePriority: -1,
    id: 'stench',
    name: 'Stench',
    rating: 0.5,
    num: 1,
  },
  stickyhold: {
    shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",
    id: 'stickyhold',
    name: 'Sticky Hold',
    rating: 1.5,
    num: 60,
  },
  stormdrain: {
    desc:
      'This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.',
    shortDesc:
      'This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.',
    id: 'stormdrain',
    name: 'Storm Drain',
    rating: 3,
    num: 114,
  },
  strongjaw: {
    desc: "This Pokemon's bite-based attacks have their power multiplied by 1.5.",
    shortDesc:
      "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
    onBasePowerPriority: 8,
    id: 'strongjaw',
    name: 'Strong Jaw',
    rating: 3,
    num: 173,
  },
  sturdy: {
    desc:
      'If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.',
    shortDesc:
      'If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.',
    onDamagePriority: -100,
    id: 'sturdy',
    name: 'Sturdy',
    rating: 3,
    num: 5,
  },
  suctioncups: {
    shortDesc:
      "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
    onDragOutPriority: 1,
    id: 'suctioncups',
    name: 'Suction Cups',
    rating: 1,
    num: 21,
  },
  superluck: {
    shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",
    id: 'superluck',
    name: 'Super Luck',
    rating: 1.5,
    num: 105,
  },
  surgesurfer: {
    shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",
    id: 'surgesurfer',
    name: 'Surge Surfer',
    rating: 2.5,
    num: 207,
  },
  swarm: {
    desc:
      'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.',
    shortDesc:
      "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'swarm',
    name: 'Swarm',
    rating: 2,
    num: 68,
  },
  sweetveil: {
    shortDesc: 'This Pokemon and its allies cannot fall asleep.',
    id: 'sweetveil',
    name: 'Sweet Veil',
    rating: 2,
    num: 175,
  },
  swiftswim: {
    desc:
      "If Rain Dance is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled.",
    shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
    id: 'swiftswim',
    name: 'Swift Swim',
    rating: 3,
    num: 33,
  },
  symbiosis: {
    desc:
      "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
    shortDesc:
      'If an ally uses its item, this Pokemon gives its item to that ally immediately.',
    id: 'symbiosis',
    name: 'Symbiosis',
    rating: 0,
    num: 180,
  },
  synchronize: {
    desc:
      'If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.',
    shortDesc:
      'If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.',
    id: 'synchronize',
    name: 'Synchronize',
    rating: 2,
    num: 28,
  },
  tangledfeet: {
    shortDesc: "This Pokemon's evasiveness is doubled as long as it is confused.",
    id: 'tangledfeet',
    name: 'Tangled Feet',
    rating: 1,
    num: 77,
  },
  tanglinghair: {
    shortDesc:
      'Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.',
    id: 'tanglinghair',
    name: 'Tangling Hair',
    rating: 2,
    num: 221,
  },
  technician: {
    desc:
      "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
    shortDesc:
      "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
    onBasePowerPriority: 8,
    id: 'technician',
    name: 'Technician',
    rating: 3.5,
    num: 101,
  },
  telepathy: {
    shortDesc: 'This Pokemon does not take damage from attacks made by its allies.',
    id: 'telepathy',
    name: 'Telepathy',
    rating: 0,
    num: 140,
  },
  teravolt: {
    shortDesc:
      "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
    id: 'teravolt',
    name: 'Teravolt',
    rating: 3.5,
    num: 164,
  },
  thickfat: {
    desc:
      "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
    shortDesc:
      'Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.',
    onSourceModifyAtkPriority: 6,
    onSourceModifySpAPriority: 5,
    id: 'thickfat',
    name: 'Thick Fat',
    rating: 3.5,
    num: 47,
  },
  tintedlens: {
    shortDesc:
      "This Pokemon's attacks that are not very effective on a target deal double damage.",
    id: 'tintedlens',
    name: 'Tinted Lens',
    rating: 4,
    num: 110,
  },
  torrent: {
    desc:
      'When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.',
    shortDesc:
      "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'torrent',
    name: 'Torrent',
    rating: 2,
    num: 67,
  },
  toughclaws: {
    shortDesc: "This Pokemon's contact moves have their power multiplied by 1.3.",
    onBasePowerPriority: 8,
    id: 'toughclaws',
    name: 'Tough Claws',
    rating: 3.5,
    num: 181,
  },
  toxicboost: {
    desc:
      'While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.',
    shortDesc: 'While this Pokemon is poisoned, its physical attacks have 1.5x power.',
    onBasePowerPriority: 8,
    id: 'toxicboost',
    name: 'Toxic Boost',
    rating: 2.5,
    num: 137,
  },
  trace: {
    desc:
      'On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon\'s Ability. However, if one or more adjacent Pokemon has the Ability "No Ability", Trace won\'t copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned "No Ability", as well as Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Schooling, Stance Change, Trace, and Zen Mode.',
    shortDesc:
      "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
    id: 'trace',
    name: 'Trace',
    rating: 2.5,
    num: 36,
  },
  triage: {
    shortDesc: "This Pokemon's healing moves have their priority increased by 3.",
    id: 'triage',
    name: 'Triage',
    rating: 3.5,
    num: 205,
  },
  truant: {
    shortDesc: 'This Pokemon skips every other turn instead of using a move.',
    onBeforeMovePriority: 9,
    effect: {},
    id: 'truant',
    name: 'Truant',
    rating: -1,
    num: 54,
  },
  turboblaze: {
    shortDesc:
      "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
    id: 'turboblaze',
    name: 'Turboblaze',
    rating: 3.5,
    num: 163,
  },
  unaware: {
    desc:
      "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
    shortDesc:
      "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
    id: 'unaware',
    name: 'Unaware',
    rating: 3.5,
    num: 109,
  },
  unburden: {
    desc:
      'If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.',
    shortDesc:
      'Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.',
    effect: {},
    id: 'unburden',
    name: 'Unburden',
    rating: 3.5,
    num: 84,
  },
  unnerve: {
    desc:
      "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon's Speed tiers.",
    shortDesc:
      'While this Pokemon is active, it prevents opposing Pokemon from using their Berries.',
    onFoeTryEatItem: false,
    id: 'unnerve',
    name: 'Unnerve',
    rating: 1.5,
    num: 127,
  },
  victorystar: {
    shortDesc:
      "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",
    id: 'victorystar',
    name: 'Victory Star',
    rating: 2.5,
    num: 162,
  },
  vitalspirit: {
    shortDesc:
      'This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.',
    id: 'vitalspirit',
    name: 'Vital Spirit',
    rating: 2,
    num: 72,
  },
  voltabsorb: {
    desc:
      'This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.',
    shortDesc:
      'This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.',
    id: 'voltabsorb',
    name: 'Volt Absorb',
    rating: 3.5,
    num: 10,
  },
  wanderingspirit: {
    desc:
      'The PokÃ©mon exchanges Abilities with a PokÃ©mon that hits it with a move that makes direct contact.',
    shortDesc: 'Exchanges abilities when hitting a PokÃ©mon with a contact move.',
    id: 'wanderingspirit',
    name: 'Wandering Spirit',
    rating: 2.5,
    num: 254,
  },
  waterabsorb: {
    desc:
      'This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.',
    shortDesc:
      'This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.',
    id: 'waterabsorb',
    name: 'Water Absorb',
    rating: 3.5,
    num: 11,
  },
  waterbubble: {
    desc:
      "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
    shortDesc:
      "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
    onModifyAtkPriority: 5,
    onModifySpAPriority: 5,
    id: 'waterbubble',
    name: 'Water Bubble',
    rating: 4.5,
    num: 199,
  },
  watercompaction: {
    shortDesc:
      "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",
    id: 'watercompaction',
    name: 'Water Compaction',
    rating: 1.5,
    num: 195,
  },
  waterveil: {
    shortDesc:
      'This Pokemon cannot be burned. Gaining this Ability while burned cures it.',
    id: 'waterveil',
    name: 'Water Veil',
    rating: 2,
    num: 41,
  },
  weakarmor: {
    desc:
      'If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.',
    shortDesc:
      'If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.',
    id: 'weakarmor',
    name: 'Weak Armor',
    rating: 1,
    num: 133,
  },
  whitesmoke: {
    shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
    id: 'whitesmoke',
    name: 'White Smoke',
    rating: 2,
    num: 73,
  },
  wimpout: {
    desc:
      'When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.',
    shortDesc: 'This Pokemon switches out when it reaches 1/2 or less of its maximum HP.',
    id: 'wimpout',
    name: 'Wimp Out',
    rating: 1,
    num: 193,
  },
  wonderguard: {
    shortDesc:
      'This Pokemon can only be damaged by supereffective moves and indirect damage.',
    id: 'wonderguard',
    name: 'Wonder Guard',
    rating: 5,
    num: 25,
  },
  wonderskin: {
    desc:
      'All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.',
    shortDesc:
      'Status moves with accuracy checks are 50% accurate when used on this Pokemon.',
    onModifyAccuracyPriority: 10,
    id: 'wonderskin',
    name: 'Wonder Skin',
    rating: 2,
    num: 147,
  },
  zenmode: {
    desc:
      "If this Pokemon is a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.",
    shortDesc:
      'If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.',
    onResidualOrder: 27,
    effect: {},
    id: 'zenmode',
    name: 'Zen Mode',
    rating: 0,
    num: 161,
  },
  mountaineer: {
    shortDesc:
      'On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.',
    id: 'mountaineer',
    isNonstandard: 'CAP',
    name: 'Mountaineer',
    rating: 3,
    num: -2,
  },
  rebound: {
    desc:
      'On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.',
    shortDesc:
      'On switch-in, blocks certain status moves and bounces them back to the user.',
    id: 'rebound',
    isNonstandard: 'CAP',
    name: 'Rebound',
    onTryHitPriority: 1,
    effect: { duration: 1 },
    rating: 3,
    num: -3,
  },
  persistent: {
    desc:
      'The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.',
    shortDesc:
      'When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.',
    id: 'persistent',
    isNonstandard: 'CAP',
    name: 'Persistent',
    rating: 3,
    num: -4,
  },
}
