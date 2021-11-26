const json = [
  {
    id: 1,
    name: 'do',
    types: [
      { type: null, color: '#FF0000' },
      { type: '#', color: '#FF808' }
    ]
  },

  {
    id: 2,
    name: 'ré',
    types: [
      { type: null, color: '#FFFF0' },
      { type: '#', color: '#FFFF80' },
      { type: 'b', color: '#E6E673' }
    ]
  },

  {
    id: 3,
    name: 'mi',
    types: [
      { type: null, color: '#04FF00' },
      { type: 'b', color: '#75E673' }
    ]
  },

  {
    id: 4,
    name: 'fa',
    types: [
      { type: null, color: '#00FFF7' },
      { type: '#', color: '#80FFFB' }
    ]
  },

  {
    id: 4,
    name: 'sol',
    types: [
      { type: null, color: '#000CFF' },
      { type: '#', color: '#8085FF' },
      { type: b, color: '#7378E6' }
    ]
  },

  {
    id: 5,
    name: 'la',
    types: [
      { type: null, color: '#FF00FB' },
      { type: '#', color: '#FF80FD' },
      { type: 'b', color: '#E673E4' }
    ]
  },

  {
    id: 6,
    name: 'si',
    types: [
      { type: null, color: '#FF00FB' },
      { type: 'b', color: '#FFC880' }
    ]
  },

  {
    id: 7,
    name: 'soupir',
    types: [
      { type: null, color: '#FF00FB' },
      { type: 'b', color: '#FFFFFF' }
    ]
  }
]


// console.log(json[0].types[1].color)

// const c = new Note('do', '#FF0000')
// const cHash = new Note('do#', '#FF8080')

// const d = new Note('ré', '#FFFF00')
// const dHash = new Note('ré#', '#FFFF80')
// const dFlat = new Note('réb', '#E6E673')

// const e = new Note('mi', '#04FF00')
// const eFlat = new Note('mib', '#75E673')

// const f = new Note('fa', '#00FFF7')
// const fHash = new Note('fa#', '#80FFFB')

// const g = new Note('sol', '#000CFF')
// const gHash = new Note('sol#', '#8085FF')
// const gFlat = new Note('solb', '#7378E6')

// const a = new Note('la', '#FF00FB')
// const aHash = new Note('la#', '#FF80FD')
// const aFlat = new Note('lab', '#E673E4')

const b = new Note('si', '#FF00FB')
const bFlat = new Note('sib', '#FFC880')

const silence = new Note('soupir', "FFFFFF")
