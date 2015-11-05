// HEART OF A UI COMPONENT OBJECT by JAMES
// attribute + INITIALIZE + RENDER
// EXAMPLE AD AT STARWARSNEWSNET.COM
var comp = {

   domElement: null,

   initialize: function(domSelector) {
     console.log('initializing component');
     this.domElement = document.createElement('img'); //<img />
     domSelector.appendChild(this.domElement);
   },

   render: function(imageSrc) {
     this.domElement.src = imageSrc; // <img src='imageSrc'>
   }

};

var body = document.getElementsByTagName('body')[0];
console.log(body);
body.innerHTML = '';
var ponyImg = 'http://www.animalsbase.com/wp-content/uploads/2015/06/Pony.jpg';
comp.initialize(body);
comp.render(ponyImg);


////////////////////END JAMES EXAMPLE COMPONET///////




console.log('component has loaded.');

window.onload = function() {
    console.log('all files that this pg needs have been loaded');
// basic selectors

// maps element to a js var and can manipulate html using this var
var container = document.getElementById('container');
console.log(container);
console.log(container);

var monsters = ['wreck-it ralph', 'lion king', 'Ganon'];

for (var baddie in monsters) { // creates var baddies in maonsters array
    var li = document.createElement('li'); //create new DOM element by list element and put in li variable so can use the li var as in li.innerHTML = ... to put html into list items
    li.innerHTML = monsters[baddie]; // put html for that item of monsters array into a list elem as html
    container.appendChild(li); //append li as child of container element in html
} // end for block of code

// now we need to creat an image! and assoc with js var
var kittenImage = document.createElement('img');
kittenImage.alt = 'A cute random kitten';
kittenImage.id = 'kitten';
// src = image sourceMappingURL
kittenImage.src ='http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg';
container.appendChild(kittenImage);

//modify cuteness  level of kitten
var kitten = document.querySelector('#kitten');
kitten.src = "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg";

var listItemsArray = document.getElementsByTagName('li');
console.log(listItemsArray);

for (var li in listItemsArray) {
    listItemsArray[li].innerHTML  = 'We are the champions (my friend)';
} //

// target ID return single obj
// target classes document.getElementsByClassName rtn array of objs
// target by html tag  document.getElementsByTagName('sting');  rtns array of objs
// query selectors document.get....


var status = document.getElementById('status-message');
var btn = document.getElementById('addPoint');

// initt our UI component
user.initialize(status);
// selector.addEventListener(eventType, function());
btn.addEventListener('click', function() {
    user.updateScoreByOnePoint();
});



// bind events to a DOM element
// var body = document.getElementsByTagName('body')[0];
//
// // we need add a listenr for events to an element
// // slack has links to listen for various events
// // selector.addEventListener
//
// // mouse events
// body.addEventListener('click', function() {
//     console.log('why you click me bro?');
// });
//
// //touch events
// body.addEventListener('touchstart', function() {
//     //console.log(events);
//     //touchstart
//     //touchmove ie for drag and drop
//     //touchend
//     console.log('why you click me bro?');
// });
// // keyboard events
// body.addEventListener('keyup', function(event) {
//     // look for specific keys to be pressed
//     if (event.keyCode == 13) {
//         console.log('why press enter so much yo');
//     }
//     console.log(event.keyCode);
// });













} // end window.onload!!!!!!!!!!!!!!!!!!!!!!!!!!


//creat user inter component
//goal creat obj// that can update self
// and visually thaw that if needed

// ex#1: user compoNENT
var user = {
    name: null,
    score: 0,
    domElement: null,
    initialize: function() {
        if (this.name === null) {
            this.name = prompt('what is your name?');
        }
        this.domElement = document.createElement('div');
        elementToAppendTo.appendChild(this.domElement);
        console.log('initialize complete');
    },
    //innerHTM: valid html to place in our domElement
    render: function(innerHTML) {
        if (typeof(innerHTML) == 'string') {
            this.domElement.innerHTML = innerHTML;
        }
    },
    buildPlayerStatusString: function() {
        return this.name + ': ' + this.score;
    },
    getName: function() {
        return this.name;
    },
    // this function is a "setter" that updates value with controls in place to validate
    saveName: function(newName) {
        if (typeof(newName) == 'string' && newName.length > 0) {
            this.name = newName;
        } else {
            alert('you entered incorrect or empty name');
        }
    },
    getScore: function() {
        return this.score;
    },
    updateScoreByOnePoint: function() {
        this.score = this.score + 1;
        var status = this.buildPlayerStatusString();
        this.render(status);
        return this.score;
    }

};  // end OBJ USER
