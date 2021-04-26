const secondArgIsntZero = func =>
  (...args) => {
    if (args[1] === 0) {
      throw new Error('Second arg is zero!!');
    }

    return func(...args);
  }

const argsAreNumbers = func =>
  (...args) => {
    if (!args.every(arg => typeof arg === 'number')) {
      throw new Error('Args must be numbers');
    }

    return func(...args);
  }

const divide = secondArgIsntZero(
  argsAreNumbers(
    (x, y) => {
      return x / y;
    }
  )
);

const add = argsAreNumbers(
  (...args) => args.reduce((sum, x) => sum + x)
);

/////////////////////////

const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () => console.log(`My favorite number is ${myFavoriteNumber}`);
}

const createMultiplier = y => {
  return x => x * y;
}

//////////////////////////////////

const person = {
  name: 'John',
  age: 34,
  greet: () => console.log('Hello!!'),
};

const careerData = {
  name: 'Jon',
  jobTitle: 'Software developer',
  salary: 60000,
  yearsAtCompany: 5,
};

// let newObject = {};

// for (let [key, value] of Object.entries(person)) {
//   newObject[key] = value;
// }

// for (let [key, value] of Object.entries(careerData)) {
//   newObject[key] = value;
// }

// const newObject = Object.assign({}, person, careerData);

const newObject = {
  ...person,
  ...careerData,
}

const arr1 = [1, 2, 3];

const arr2 = [5, 6, 7];

const allNumbers = [...arr1, 4, ...arr2];

/////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let doubledNumbers = [];

// for (let x of numbers) {
//   doubledNumbers.push(x * 2);
// }

const doubledNumbers = numbers.map(x => x * 10);

const words = ['Hello', 'goodbye', 'hi', 'greetings'];

const uppercasedWords = words.map(word => word.toUpperCase());

const people = [{
  name: 'John',
  age: 34,
  hairColor: 'brown',
}, {
  name: 'Jane',
  age: 40,
  hairColor: 'red',
}, {
  name: 'Nancy',
  age: 20,
  hairColor: 'blonde',
}];

const names = people.map(person => person.name);

/////////////////////////////////

// let evenNumbers = [];

// for (let x of numbers) {
//   if (x % 2 === 0) {
//     evenNumbers.push(x);
//   }
// }

const not = func => (...args) => !func(...args);
const isEven = x => x % 2 === 0;
const isOdd = not(isEven);

const oddNumbers = numbers.filter(isOdd);

///////////////////////////////////////////////

const numbersProduct = numbers.reduce((product, x) => {
  // console.log(`product: ${product}, x: ${x}`);
  return product * x;
}, 1);

const pairs = [['a', 1], ['b', 2,], ['c', 3]]

/*
  {
    a: 1,
    b: 2,
    c: 3,
  }
*/

const pairsObj = pairs.reduce((obj, pair) => ({
  ...obj,
  [pair[0]]: pair[1],
}), {});

///////////////////////////////////////////////

// const addB = (x) => (y) => (z) => x + y + z;

const getPropertyWithDefault = (defaultValue, propertyName) => (obj) => obj[propertyName] || defaultValue;

const getName = getPropertyWithDefault("", 'name');
const getAge = getPropertyWithDefault("N/A", 'age');

getName({ name: 'John' });
getName({ name: 'Fido' });
getName({ name: 'Chrysler Building' });

//////////////////////////////////////////////////

// f(x) = x + 1
const add1 = x => x + 1;

// g(x) = 2x
const double = x => x * 2;

// h(x) = x^2
const square = x => x * x;

double(add1(4)) // g(f(x)) === 2(x + 1)

square(double(add1(4))); // h(g(f(x))) === (2(x + 1))^2

const compose = (...funcs) => x =>
  funcs.reduce((acc, func) => func(acc), x);

//////////////////////////////////////////////

const capitalizeName = obj => ({
  ...obj,
  name: obj.name.toUpperCase(),
});

const removeAge = obj =>
  Object.keys(obj).reduce((acc, key) => {
    return key === 'age'
      ? acc
      : {
        ...acc,
        [key]: obj[key],
      };
  }, {})

const capitalizeHairColor = obj => ({
  ...obj,
  hairColor: obj.hairColor.toUpperCase()
});

const formatPerson = compose(capitalizeName, removeAge, capitalizeHairColor);