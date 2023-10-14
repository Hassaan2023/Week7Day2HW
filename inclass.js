console.log('Hello World 2')

// Day 2: Countinue with control flow 
// Switch case statement
const day = new Date().getDay()
console.log(day, typeof day)

const literalDay = new Date().toString();
console.log(literalDay, typeof literalDay)

switch(day){
    case 0:
        console.log('Sunday')
        break;
    case 1: 
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    default:
        console.log('Some other day')
};

switch(literalDayday.split(' ')[o]){
    case "Sun":
        console.log('Sunday')
        
    case "Mon": 
        console.log('Monday')
        
    case "Tues":
        console.log('Tuesday')
        
    case "Wed":
        console.log('Wednesday')
        
    default:
        console.log('Some other day')
};

// JS Object (AKA Python Dictionaries)
const person = {
    name: "Shoha",
    age: 9001,
    teams: [
        'Dodgers',
        'Lakers',
        'Rams',
    ],
    wallet: {
        visa: 100,
        amex: 1000,
        bofa: 20
    }
};

// access data in obj
console.log(person['name']) // bracket notation
console.log(person.name) // dot notation

// get keys / values/ pairs
// person.keys() // this does not work
// .keys() is a static method
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// loop through the keys 
for (let item in person){
    console.log(item)
};

for (let item of Object.keys(person)){
    console.log(item, 2)
};

// OOP
// Prototypes vs Classes 
// Create a protoype 
function Car(make, model=1000, y){
    this.make = make;
    this.model = model;
    this.year = y;
    this.mileage = 0

    this.drive = function (miles){
        this.mileage += miles
        console.log('Your Odometer reading: ${this.mileage}')
    }


    this.park = () => {
        console.log('parking..')
        console.log('your odometer reading: ${this,mileage}')
    }
};

const c1 = new Car("Honda", "Civic", 1999)
console.log(c1.make)
console.log(c1.model)
console.log(c1.year)
c1.drive(100)
c1.drive(2000)
c1.park()

// Classes 
class Sentient {

}











being1 = new Sentinent ()
console.log(being.lifespan)


class Human extends Sentient 























// Destructuring an array
// const person1 = ["Shaha", "Tsucida", 9001]
//const first_name = person1[0]
//const last_name = person1[1]
//const age = person1[2]
// const [first_name, last_name, age] = person1 / destructure 

// destructuring an object 
// your variable name will be key name
// const pokemon = {
//     pokemonName: "Pikachu",
//     imgUrl: 'google.com',
//     abilities: ['thunderbolt', 'shockwave'],
//     hp: 10
// }

// const {imgUrl, abilities, pokemonName} = pokemon

// console.log(imgUrl)
// console.log(abilites)
// console.log(pokemonName)

// Asynchornous Section of JS

// function snooze5(action){
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     console.log(4)
//     console.log(5)
//     action()
// }


// snooze5(c1)