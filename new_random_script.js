import {json} from './data.js';

// Class of notes

class Note {
  constructor (name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}


// création array note

// let notes = []

// for (let i=0; i< json.length; i++) {
//   let item = json[i];
//   for (let j=0; j<item.length; j++){
//     let spec = item[j]
//     let note = new Note(item.name, item.spec.color,item.spec.types)  
//     notes.push(note)
//   }
  
// }

// console.log(notes)




// const jsonData = [
//   {
//     id: 1,
//     name: 'do',
//     types: [
//       { type: null, color: '#FF0000' },
//       { type: '#', color: '#FF808' }
//     ]
//   },

//   {
//     id: 2,
//     name: 'ré',
//     types: [
//       { type: null, color: '#FFFF0' },
//       { type: '#', color: '#FFFF80' },
//       { type: 'b', color: '#E6E673' }
//     ]
//   }];


let notes = []
// let note = [];

 for (let i=0; i< json.length; i++) {
    let item = json[i];
     for (let j=0; j<item.types.length; j++) {


        let note = new Note(item.name, item.types[j].color, item.types[j].type);

        // let spec = item.types[j].type
        // let col = item.types[j].color
       
        // note.push(item.name)
        // note.push(col)
        // note.push(spec)
      
        notes.push(note)

        
    }
  
  }
  
 console.log(notes)

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

