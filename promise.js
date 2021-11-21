let promise = new Promise((resolve) => {
    let delay = randomizeTime(2000,8000);
    console.log('new delay: ' + delay);
    setTimeout(() => {
      resolve();
    }, delay);
});

/////////////////////////////////////

handle = function(resolve) {
    let delay = randomizeTime(2000,8000);
    console.log('new delay: ' + delay);
    setTimeout(() => {
      resolve();
    }, delay);
}
///////////////////

handle = (resolve) => {
    let delay = randomizeTime(2000,8000);
    console.log('new delay: ' + delay);
    setTimeout(() => {
      resolve();
    }, delay);
};
////////////////////

function handlecc(resolve) {
    let delay = randomizeTime(2000,8000);
    console.log('new delay: ' + delay);
    setTimeout(() => {
      resolve();
    }, delay);
}



let promise1 = new Promise(handlecc);

/////////////////


      function randomizeTime (min, max) {
        let seconds = Math.floor(Math.random() * (max - min) + min)
        console.log(seconds)
        return seconds
      }

      function randomizeElements () {
        const valeurs = ['do','do#', 'ré','ré#','réb', 'mi','mib', 'fa','fa#', 'sol','sol#','solb', 'la','la#','lab', 'si','sib']
        let elemRandom = valeurs[Math.floor(Math.random() * valeurs.length)]
        return elemRandom;
      }

      x = 0;

      function writeNotes() {
          document.getElementById('note').innerHTML = randomizeElements();
          setTimeout(writeNotes, randomizeTime(5000, 10000))
      }
      


     

// async function display(){
//   let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() {myResolve(writeNotes);},randomizeTime(5000,10000))
//   })
// }

// const list = [1, 2, 3, 4]
counter = 0;
maxCount = 0;
const task = async () => {
  // for (const item of list) {
 // do {
    let promise = new Promise((resolve) => {
        let delay = randomizeTime(2000,8000);
        console.log('new delay: ' + delay);
        setTimeout(() => {
          resolve();
        }, delay);
    });

    promise.then((result) => {
      document.getElementById('note').innerHTML = randomizeElements();
      // console.log('Yello, D\'oh');
      if (counter < maxCount) {
        counter++;
        task();
      }
    })
  }


maxCount = setDisplay();
task();


      function display (x) {
        for (var i = 0; i < x; i++) {
         setTimeout(writeNotes, randomizeTime(5000, 10000))
          // la boucle doit attendre le set Time out
          
        }
      } 

      function setDisplay () {
        var numberOfNotes 
        while (isNaN(numberOfNotes)) {
          numberOfNotes = prompt('enter a number to display the random score')
        }
        return numberOfNotes
      } 

      

      // display(setDisplay())



 