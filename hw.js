// Using the information we've covered today answer the following 3 questions.

// And answer 2 code wars problems for tonight as well. One that you've done previously in python, one that you have not yet done. All must be produced in JavaScript.

// Once the questions are completed, commit them to github and submit the github link to the assignment

// As recommended material, you may also watch the videos listed below on the JavaScript Event loop and Promised Based functions.

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function FavDishes(person) {
    for (const key in person) {
      if (Array.isArray(person[key])) {
        console.log(`${key}: ${person[key].join(", ")}`);
      } else if (typeof person[key] === "object") {
        for (const subKey in person[key][0]) {
          console.log(`${subKey}: ${person[key][0][subKey]}`);
        }
      } else {
        console.log(`${key}: ${person[key]}`);
      }
    }
  }
  
  let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
      {
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt",
      },
    ],
  };
  
  FavDishes(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) { // Create our Person Prototype
    this.name = name;
    this.age = age;

  this.printInfo = () => { // Use an arrow to create the printInfo method
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

 this.addAge = (years) => { // Create another arrow function for the addAge method that takes a single parameter 
        this.age += years; // Adding to the age 
    };
}
const person1 = new Person("Shoha", 30);
const person2 = new Person("Maseeh", 21);

person1.addAge(1);
person2.addAge(3);

person1.printInfo();
person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}
const inputString = "now thats a big word ";
checkStringLength(inputString)
    .then((message) => {
        console.log(message); 
    })
    .catch((message) => {
        console.log(message); 
    });


// Codewars problem 1
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage:
  console.log(evenOrOdd(4));  // Output: "Even"
  console.log(evenOrOdd(7));  // Output: "Odd"

// Codewars Problem 2
https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript

function binToDec(bin) {
    // Check if the input is a valid binary string
    if (!/^[01]+$/.test(bin)) {
      throw new Error("Invalid binary input");
    }
  
    let decimal = 0;
    for (let i = bin.length - 1, j = 0; i >= 0; i--, j++) {
      // Convert the binary digit at position i to a decimal value (0 or 1)
      const digit = parseInt(bin[i], 10);
      // Add the decimal value of the digit to the result
      decimal += digit * Math.pow(2, j);
    }
  
    return decimal;
  }
  
  // Example usage:
  const binaryNumber = "1101";
  const decimalNumber = binToDec(binaryNumber);
  console.log(decimalNumber); // Output: 13