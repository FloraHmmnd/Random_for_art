
// Class of notes

class Note {
  constructor (name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}

// const typeOfNote = {
// 	bemol: "b",
// 	diese: "#",
// 	none: "",
// }

// création array note

let notes = []

for (let i=0; i< json.length; i++) {
  let item = json[i];
  
 let note = new Note(item.name, item.color,item.types)  
notes.push(note)
}

console.log(notes)

///
const c = new Note('do', '#FF0000')
const cHash = new Note('do#', '#FF8080')
const d = new Note('ré', '#FFFF00')
const dHash = new Note('ré#', '#FFFF80')
const dFlat = new Note('réb', '#E6E673')
const e = new Note('mi', '#04FF00')
const eFlat = new Note('mib', '#75E673')
const f = new Note('fa', '#00FFF7')
const fHash = new Note('fa#', '#80FFFB')
const g = new Note('sol', '#000CFF')
const gHash = new Note('sol#', '#8085FF')
const gFlat = new Note('solb', '#7378E6')
const a = new Note('la', '#FF00FB')
const aHash = new Note('la#', '#FF80FD')
const aFlat = new Note('lab', '#E673E4')
const b = new Note('si', '#FF00FB')
const bFlat = new Note('sib', '#FFC880')
const silence = new Note('soupir', "FFFFFF")

/// Program for a random score


function writeNotes () {
  let note = randomizeElements();
  document.getElementById('note').innerText = note.name + randomizeOctave(getRangeOfOctave());
  document.getElementById('note').style.color = note.color;
}

function getTempo(){
  var tempo = parseInt(document.getElementById("choice_tempo").value);
  tempo = tempo * 100;
  console.log(tempo)
  return tempo
}





function getRangeOfOctave(){
  var octaveMin = parseInt(document.getElementById("min_octave").value);
  var octaveMax = parseInt(document.getElementById("max_octave").value);
  if (octaveMin > octaveMax) {
 document.getElementById("error_octave_message").innerText = "Please enter a correct value, minimum octave can't be superior to maximum octave.";
 }
  else {
 var rangeOfOctaves = [];
 for (var i = octaveMin; i < octaveMax+1; i++) {
 rangeOfOctaves.push(i);
 }
 console.log(rangeOfOctaves)
 return rangeOfOctaves
  }
}

function randomizeOctave(octaves) {
    let randomOctave = octaves[Math.floor(Math.random() * octaves.length)]
  return randomOctave;
}

function randomizeElements () {
  const arrayOfNotes = [
    c,
    d,
    e,
    f,
    g,
    a,
    b,
    cHash,
    dHash,
    dFlat,
    eFlat,
    fHash,
    gHash,
    gFlat,
    aHash,
    aFlat,
    bFlat
  ]
  let randomNote = arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)]
  return randomNote;
}

function randomizeTime (min, max) {
  let seconds = Math.floor(Math.random() * (max - min) + min)
  seconds = seconds / getTempo()
  console.log(seconds)
  return seconds
}



// function setDisplay () {
//   var numberOfNotes
//   while (isNaN(numberOfNotes)) {
//     numberOfNotes = prompt('enter a number to display the random score')
//   }
//   return numberOfNotes
// }

let count = 0;

const display = async () => {
  for (let i = 0; i < count; i++) {
    await new Promise(r => setTimeout(r, randomizeTime(1000, 5000)))
    writeNotes();
  }
}

function getNumberOfNotes(){
  var numberOfNotes = document.getElementById("number_of_notes").value;
  console.log(numberOfNotes);
  count = numberOfNotes;
  display()
}

