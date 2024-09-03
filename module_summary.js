//object syntax
const cat = {
	name: 'tribbers',
	age: 5,
}

//object declare ways

// 1.object.create()
var orgObject = {
	company:  'ABC corp'
};

const employee = Object.create(orgObject);
console.log(employee);

//{ company: 'ABC Corp' }

// 2.the keyword new 
var person = new Object();

person.firstName = 'testFirstName';
person.lastName = 'testLastName';

//access property values
const zoo = {
	lion: 'meat',
	panda: 'bamboo'
}

console.log(zoo.lion);
console.log(zoo['lion']);

var animal = 'lion';
console.log(zoo[animal]);

//object

var zooFood = {
	lion: 'meat',
	panda: 'bamboo',
}

Object.keys(zoo);
//['lion', 'panda']
Object.values(zoo);

//repository name: js-objects-tasks, js-string-tasks