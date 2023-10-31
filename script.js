const planets = [
    { 
        id: 0,
        name: "Mercury",
        numOfMoons: 0
    },
    {
        id: 1,
        name: "Venus",
        numOfMoons: 0
    },
    {
        id: 2,
        name: "Earth",
        numOfMoons: 1
    },
    {
        id: 3,
        name: "Mars",
        numOfMoons: 2
    },
    {
        id: 4,
        name: "Jupiter",
        numOfMoons: 79
    },
    {
        id: 5,
        name: "Saturn",
        numOfMoons: 62
    },
    {
        id: 6,
        name: "Uranus",
        numOfMoons: 27
    },    
    {
        id: 7,
        name: "Neptune",
        numOfMoons: 14
    }, 
]

// MAP CHALLENGE

const planetNamesUpperCased = planets.map(function(planetNames){
  return planetNames.name.toUpperCase()
})
// ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"]
console.log(planetNamesUpperCased);

// FILTER CHALLENGE 1

const planetId = 7;
const planetNameById = planets.filter(function(planet){
  return planet.id === 7
})[0];

// "Neptün"
console.log(planetNameById.name);

// FILTER CHALLENGE 2

const planetName = "Earth";
const planetNumMoonsByName = planets.filter(function(planet){
  return planet.name === "Earth"
})
// "Earth's number of moons is: 1"
console.log(`Earth's number of moons is ${planetNumMoonsByName[0].numOfMoons}`);

// REDUCE CHALLENGE

const moonsTotal = planets.reduce(function(total, planet){
  return total += planet.numOfMoons
},0)
//85
console.log(moonsTotal); 

// Chain Challenge

const planetNamesWithMoons = planets.filter(function(planet){
  return planet.numOfMoons > 0
}).map(function(planet){
  return planet.name
})

//["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
console.log(planetNamesWithMoons);




// Challenge Reduce
function unique(arrays) {
    return arrays.reduce(function(special, array){
     if(!special.includes(array)){
         special.push(array)
     }
      return special
    },[])
  }
  const numbers = [1, 1, 2, 3, 4, 4];
  //[1, 2, 3, 4]
  console.log(unique(numbers))




// Challenge Reduce 1
  const letters = ['h', 'e', 'l', 'l', 'o']
const greeting = letters.reduce(function(words, letter){
  return words + letter
},"")
// "hello" 
console.log(greeting) 




//// Challenge Reduce 2 
const numbersG = [ 100, 3, 4, 1, 2];
const total = numbersG.reduce(function(calc, number){
  return calc * number
},1)
// 2400 
console.log(total); 



// // Challenge Reduce Bonus
const arrays = [["Kevin", "Carrol"], ["Poly", "Frank"]];
const flattenedArray = arrays.reduce(function(flat, array){
  return flat.concat(array)
},[])

// ["Kevin", "Carrol", "Poly", "Frank"] 
console.log(flattenedArray);




// MAP CHALLENGES

// 1
const numbersD = [1, 1, 2, 3, 5];
const numbersAddFive = numbersD.map(number => number + 5)
// [6, 6, 7, 8, 10]
console.log(numbersAddFive); 



// 2 
const numbersReformatted = numbers.map(function(number){
  return number.toString() + ":" + " " 
})
// ["1: ", "1: ", "2: ", "3: ", "5: "] 
console.log(numbersReformatted);



// 3
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map(function(word){
  return word.slice(0, -1)
})
//["plane", "train", "automobile"]
console.log(singularWords);



// 4:
const firstLetters = words.map(function(word){
  return word[0]
})
//["p", "t", "a"]
console.log(firstLetters);



// Bonus:
const capitalizedWords = words.map(function(word){
  return word[0].toUpperCase() + word.slice(1, -1)
})
//["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);