/* A-1 (5)
define and fill an object
Definiere und fülle ein Objekt */

const profileData = {
    name: "Martin",
    surname: "Bittner",
    age: 37,
    city: "Berlin",
  };
  
  /* A-2 (5) */
  const example = {
    1: 10,
    2: 20,
    3: 30,
  };
  
  function convertObjectToArray(obj) {
    return Object.entries(obj);
  }
  
  console.log(convertObjectToArray(example));
  
  /* B-1 (10) */
  let beverages = ["coffee", "tea", "juice"];
  
  function convertArrayData(arr) {
    let var1 = arr[0];
    let var2 = arr[1];
    arr.splice(0, 1, var2);
    arr.splice(1, 1, var1);
    arr.splice(2, 1, "milk");
    return arr;
  }
  
  console.log(convertArrayData(beverages));
  
  /* B-2 (15) */
  
  const cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];
  
  const areas = [
    "891.68 km2",
    "755.3 km2",
    "310.7 km2",
    "207.35 km2",
    "217.41 km2",
  ];
  
  function convertArraysToObject(keyArray, valueArray) {
    const newObject = keyArray.reduce((accumulator, element, index) => {
      accumulator[element] = valueArray[index];
      return accumulator;
    }, {});
    return newObject;
  }
  
  console.log(convertArraysToObject(cities, areas));
  
  /* B-3 (10) */
  
  function createGrid(size, char) {
    const grid = [];
    for (let x = 0; x < size; x++) {
      grid[x] = [];
      for (let y = 0; y < size; y++) {
        grid[x][y] = char;
      }
    }
    return grid;
  }
  
  function createGrid2(size, char) {
    const grid = [];
    for (let x = 0; x < size; x++) {
      grid.push(Array(size).fill(char))
    }
    return grid;
  }
  
  function createGrid3(size, char) {
    return Array(size).fill((Array(size).fill(char)))
  }
  
  
  console.log(createGrid(3, "*"));
  console.log(createGrid2(3, "*"));
  console.log(createGrid3(3, "*"));
  /* B-4 (10) */
  
  let adjectives = ["smart", "kind", "sweet", "small", "clear"];
  
  function wordConverter(array, string) {
    return array.map((element) => element + string);
    
  }
  
  const wordConverter2 = (array, string) =>  array.map((element) => element + string)
  
  console.log(wordConverter(adjectives, "er"));
  console.log(wordConverter2(adjectives, "er"));
  
  /* B-5 (10) */
  const hourTracking = [
    { day: "Monday", start: 8, end: 17 },
    { day: "Tuesday", start: 9, end: 15 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 7, end: 14 },
    { day: "Friday", start: 6, end: 12 },
  ];
  
  function calculateHours(array) {
    let newArray = array.map((element) => {
      let { day, start, end } = element;
      let calc = end - start;
      return calc;
    });
    return newArray.reduce((a, b) => a + b, 0);
  }
  
  console.log(calculateHours(hourTracking));
  
  
  const calculateHours2 = (array) => {
    function reducer(accumulator, {start,end}){
  return accumulator + (end - start)
    }
    return array.reduce(reducer,0)
  }
  
  
  console.log(calculateHours2(hourTracking));
  
  /* C (10) 
  write a class
  schreibe eine Klasse */
  class Course {
    constructor(teacher, type, number) {
      this.teacher = teacher;
      this.type = type;
      this.number = number;
    }
    calcSpace() {
      return this.number * 2;
    }
    spaceNeeded() {
      return `The classroom should be ${this.calcSpace()}m².`;
    }
    details() {
      return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
    }
  }
  
  const student = new Course("Sebastian", "WebDev", 20);
  console.log(student.spaceNeeded());
  console.log(student.details());
  
  /* D-1 (10) */
  
  function capitalizeFirstLetter(param) {
    let string = param.toString();
  
    let array1 = string.split(" ");
    let newarray1 = [];
  
    for (let element of array1) {
      newarray1.push(element.charAt(0).toUpperCase() + element.slice(1));
    }
    return newarray1.join(" ");
  }
  
  console.log(capitalizeFirstLetter(true));
  console.log(capitalizeFirstLetter("the quick brown fox"));
  
  /* D-2 (15) */
  let test = 1134;
  
  function validPin(pin) {
    if (isNaN(pin)) {
      return false;
    }
  
    if (pin.length !== 4) {
      return false;
    }
  
    if (pin.slice(-1) % 2) {
      return false;
    }
  
    const sum = pin
      .split("")
      .reduce((acc, element) => acc + parseInt(element), 0);
  
    if (sum < 5) {
      return false;
    }
  
    const sortedPin = pin.split("").sort();
  
    if (sortedPin[0] === sortedPin[3]) {
      return false;
    }
  
    return true;
  }
  
  console.log(validPin(test));