// var container = document.getElementById('albumframe');
// console.log(container);

// //create a selector to create img element
// var albumCover = document.createElement('img');
// // define the src for the img
// albumCover.src = "https://upload.wikimedia.org/wikipedia/en/3/30/Habib_Koit%C3%A9_-_Baro.jpg";
// //apppend img > parent container albumframe
// container.appendChild(albumCover);
//
// //listen to playbutton click and log
// //define selector for dome element
// var playButton = document.getElementById('playbutton');
// //add listener and log
// playButton.addEventListener('click', function(event) {
//     console.log('trigger new cover');
// });


// container.addEventListener('click', function() {
//     console.log('clicked!');
// });

//on click playbutton change img albumCover


/////////////////////////////////////
//// EXAMPLE FROM GITBOOK ///////////
////////////////////////////////////

// basic selectors
// declare a selector named container
// access that container via document.getElementById('name-of'id)
// var container = document.getElementById('container');
// console.log(container);
// var monsters = ['Wreck-it Ralph', 'The giraffe from Lion King SNES', 'Ganon'];

//////////////////////////////////////
//my modfiy of above code
//
// var container = document.getElementById('song');
// console.log(container);
// var container = document.getElementsByTagName('h2');
// console.log(container);
//
//
// var h2 = document.createElement('h2');
// console.log(h2);
// h2.innerHTML = 'Next Song Title';
// container.appendChild(h2);




// ////////////////////////////
// for (var baddie in monsters) {
//   // create a new dom element using document.createElement('name-of-tag');
//   var li = document.createElement('li');
//   console.log(li);
//   // access and assign a property to my dom element
//   li.innerHTML = monsters[baddie];
//   // append it to a container using selector.appendChild(domElement)
//   container.appendChild(li);
// }
//
// // now, we need to create an image!
// var kittenImage = document.createElement('img');
// // alt text (alt) - ADA compliancy text for the blind
// kittenImage.alt = 'A cute random kitten';
// kittenImage.id = 'kitten';
// // src = image source
// kittenImage.src = 'http://vignette3.wikia.nocookie.net/clubpenguinpookie/images/d/d0/Extremely-cute-kitten_large.jpg/revision/latest?cb=20140614000321';
// // append my element as a child to a selector
// container.appendChild(kittenImage);




//andrew dushane's code/////////
function Terminal() {
  this.domElement = null;
  this.initialize = function() {
    this.domElement = document.createElement('textarea');
    this.domElement.id = "terminal";
    // replace his $ with "next song here"
    this.domElement.value = " Next Song Here ";
  }
  this.render = function() {
    // replace his Id with 'song'
    var container = document.getElementById('song');
    container.innerHTML = ''; // Delete existing textarea if there is one
    container.appendChild(this.domElement); // Append new textarea
  }
}
// replace hsi button id with mine ('next-song')
var button = document.getElementById('next-song');
button.addEventListener('click' , onButtonClick );

function onButtonClick(e) {
  var newTerminal = new Terminal();
  newTerminal.initialize();
  newTerminal.render();
  //replace his = 'Reset Terminal' with my 'Previous Song'
  e.srcElement.innerHTML = 'Previous Song';
}
