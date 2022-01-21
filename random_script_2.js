

// // Class of notes

// class Note {
//     constructor (name, color) {
//         this.name = name;
//         this.color = color;
//     }
// }


// class Gamme {
    
//     constructor() {
//         this.notes = [];
//     }
  
//     addNote(note, couleur) {
//         var note = new Note(note, couleur);
//         this.notes.push(note);
//         return note;
//     }

//     getNotes() {
//         return this.notes;
//     }

//     getRandomNote() {    
//         return this.notes[Math.floor(Math.random() * this.notes.length)]
//     }
    
// }


// const c = new Gamme();
// // var note = c.addNote('do', '#FF0000');
// // console.log(note.name);

// c.addNote('re', '#FFFF00');
// c.addNote('mi', '#04FF00');
// c.addNote('fa', '#00FFF7');
// c.addNote('sol', '#000CFF');
  
  
// function writeNotes () {
//     let note = c.getRandomNote();
//     document.getElementById('note').innerText = note.name;
//     document.getElementById('note').style.color = note.color;
// }
  
// function silence() {
//     document.getElementById('note').innerText = "silence";
//     document.getElementById('note').style.color = "white";
// }
  
// function randomizeTime (min, max) {
//     let seconds = Math.floor(Math.random() * (max - min) + min)
//     console.log(seconds)
//     return seconds
// }
  
  
  
//   function setDisplay () {
//     var numberOfNotes;
//     while (isNaN(numberOfNotes)) {
//       numberOfNotes = prompt('enter a number to display the random score')
//     }
//     return numberOfNotes
//   }
  
//   const display = async () => {
//     var count = setDisplay();
//     for (let i = 0; i < count; i++) {
//       await new Promise(r => setTimeout(r, randomizeTime(1000, 5000)))
//       writeNotes();
//       await new Promise(r => setTimeout(r, randomizeTime(1000, 5000)))
//       silence();
//     }
//   }
  
//   display()
  