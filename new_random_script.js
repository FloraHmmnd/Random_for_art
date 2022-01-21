// data

const dataNotes = [
  {
    id: 1,
    name: 'do',
    types: [
      { type: "", color: '#FF0000' },
      { type: '#', color: '#FF808' }
    ]
  },

  {
    id: 2,
    name: 'ré',
    types: [
      { type: "", color: '#FFFF0' },
      { type: '#', color: '#FFFF80' },
      { type: 'b', color: '#E6E673' }
    ]
  },

  {
    id: 3,
    name: 'mi',
    types: [
      { type: "", color: '#04FF00' },
      { type: 'b', color: '#75E673' }
    ]
  },

  {
    id: 4,
    name: 'fa',
    types: [
      { type: "", color: '#00FFF7' },
      { type: '#', color: '#80FFFB' }
    ]
  },

  {
    id: 4,
    name: 'sol',
    types: [
      { type: "", color: '#000CFF' },
      { type: '#', color: '#8085FF' },
      { type: 'b', color: '#7378E6' }
    ]
  },

  {
    id: 5,
    name: 'la',
    types: [
      { type: "", color: '#FF00FB' },
      { type: '#', color: '#FF80FD' },
      { type: 'b', color: '#E673E4' }
    ]
  },

  {
    id: 6,
    name: 'si',
    types: [
      { type: "", color: '#FF00FB' },
      { type: 'b', color: '#FFC880' }
    ]
  },

  {
    id: 7,
    name: 'soupir',
    types: [
      { type: "", color: '#030303' },
    ]
  }
]

const dataTempo = [
  {
    name: 'largo',
    min: 0.666,
    max: 1
  },

  {
    name: 'lento',
    min: 0.866,
    max: 1.133
  },

  {
    name: 'adagio',
    min: 1,
    max: 1.333
  },

  {
    name: 'andante',
    min: 1.266,
    max: 1.666
  },

  {
    name: 'moderato',
    min: 1.466,
    max: 1.866
  },

  {
    name: 'allegretto',
    min: 1.266,
    max: 2.133
  },

  {
    name: 'allegro',
    min: 1.866,
    max: 2.666
  },

  {
    name: 'vivace',
    min: 2,
    max: 2.333
  },

  {
    name: 'presto',
    min: 2.333,
    max: 3.333
  },

  {
    name: 'prestissimo',
    min: 3.333,
    max: 3.666
  },

  {
    name: 'free',
    min: 1,
    max: 1
  }
]

// Class of notes

class Note {
  constructor (name, color, type) {
    this.name = name
    this.color = color
    this.type = type
  }
}

class Tempo {
  constructor (name, min, max) {
    this.name = name
    this.min = min
    this.max = max
  }
}

// création array note

let notes = []



for (let i = 0; i < dataNotes.length; i++) {
  let item = dataNotes[i]
  for (let j = 0; j < item.types.length; j++) {
    let note = new Note(item.name, item.types[j].color, item.types[j].type)

    notes.push(note)
  }
}

console.log(notes)

/// Program for a random score

function getNumberOfNotes () {
  var numberOfNotes = document.getElementById('number_of_notes').value
  console.log(numberOfNotes)
  count = numberOfNotes
  display()
}

let count = 0

const display = async () => {
  for (let i = 0; i < count; i++) {
    let tempo = getTempo()
    await new Promise(r =>
      setTimeout(r, randomizeTime(1000 / tempo.min, 7000 / tempo.max))
    )
    writeNotes()
  }
}

function writeNotes () {
  let note = randomizeElements(notes)
  console.log('note random = ' + note)
  document.getElementById('note').innerText =
    note.name + note.type + randomizeOctave(getRangeOfOctave())
  document.getElementById('note').style.color = note.color
}

function randomizeElements (elem) {
  let randomNote = elem[Math.floor(Math.random() * elem.length)]

  return randomNote
}

function randomizeTime (min, max) {
  console.log('min= ' + min + 'max=' + max)
  let seconds = Math.floor(Math.random() * (max - min) + min)

  console.log('seconds=' + seconds)
  return seconds
}

function getRangeOfOctave () {
  var octaveMin = parseInt(document.getElementById('min_octave').value)
  var octaveMax = parseInt(document.getElementById('max_octave').value)
  if (octaveMin > octaveMax) {
    document.getElementById('error_octave_message').innerText =
      "Please enter a correct value, minimum octave can't be superior to maximum octave."
  } else {
    var rangeOfOctaves = []
    for (var i = octaveMin; i < octaveMax + 1; i++) {
      rangeOfOctaves.push(i)
    }
    console.log('range octaves =' + rangeOfOctaves)
    return rangeOfOctaves
  }
}

function randomizeOctave (octaves) {
  let randomOctave = octaves[Math.floor(Math.random() * octaves.length)]
  return randomOctave
}

function getTempo () {
  let tempoNameChosen = document.getElementById('choice_tempo').value
  let tempoToPlay
  dataTempo.forEach(tempo => {
    if (tempoNameChosen == tempo.name) {
      tempoToPlay = new Tempo(tempo.name, tempo.min, tempo.max)
    }
  })
  return tempoToPlay
}
