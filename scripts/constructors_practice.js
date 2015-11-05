
// THIS FUNCTION CONSTRUCTS AN OBJECT
// A BLUEPRINT (for a person type of object)
function person(name, age, fact) {

    //assign properties
    this.name = name;
    this.age = parseInt(age);
    this.food = food;

    // assign methods
    this.toString = function() {
        return 'this person ' + this.name + ' is ' + this.age + ' years old and likes to eat ' + food;
    }
}

// DECLARE A VAR CALLED anna
// CREATE A 'new' INSTANCE OF 'person' ('instantiation')
// CREATE A NEW COPY OF PERSON
var Hamburgler = new person('Hamburgler', '40', 'hamburgers');
