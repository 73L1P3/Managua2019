//~Template Literals~//
/* 
let word1 = 'Felipe';
let word2 = 'Sotomayor';
let num1 = 3;
let num2 = 4;

// const fullName = `${word1} ${word2}`;
// const fullName = `${num1 + num2} ${word2}`;

let example = `${word1}
${word2}`;

// console.log(fullName);
console.log(example);*/

//~Destructuring Objects~//
/* 
const personalInformation = {
  firstName: 'Felipe',
  lastName: 'Sotomayor',
  city: 'Managua',
  state: 'Managua',
  zipCode: '14002'
};

const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn} ${ln}`);*/

//~Destructuring Arrays~//
/* 
// let name = ['Felipe', 'Linux Nub', 'Sotomayor'];
let [firstName, middleName, lastName] = ['Felipe', 'Linux Nub', 'Sotomayor'];

lastName = 'Gutierrez';

console.log(lastName);*/

//~Object Literal~//
/* 
function addressMaker(city, state) {
  //   const newAddress = { newCity: city, newState: state };
  const newAddress = { city, state };

  console.log(newAddress);
}

addressMaker('Managua', 'Managua'); */

//Challenge~
/* 
function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: 'Nicaragua'
  };
  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

addressMaker({ city: 'Managua', state: 'Managua' }); */

//~For of Loop~//
/* 
// let incomes = [5222, 4222, 5333];
// let total = 0;
let fullName = 'Felipe Linux Nub Sotomayor';

for (const char of fullName) {
  console.log(char);
  //   total += income;
}
// console.log(total);*/

//~Spread Operator~//
/* 
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

example2.push(true);

console.log(example2);*/

/* let example1 = {
  firstName: 'Felipe'
};

let example2 = {
  ...example1
};

console.log(example2); */

//~Rest Operator~//
/* 
function add(...nums) {
  console.log(nums);
  //   console.log(arguments);
}

add(5, 4, 2, 4);
 */

//~Arrow Function~//
/* 
function add(...num) {
  //   let total = num.reduce(function(x, y) {
  //     return x + y;
  //   });
  let total = num.reduce((x, y) => x + y);
  console.log(total);
}

add(2, 4, 5, 1, 6);*/

//~Default Params~//
/* 
function add(numArray = []) {
  let total = 0;
  numArray.forEach(Element => {
    total += Element;
  });
  console.log(total);
}

add();
 */

//~Includes()~//
/* 
let numArray = [1, 2, 3, 4, 5, 6];

// console.log(numArray.indexOf(0));
console.log(numArray.includes(0));
console.log(numArray.includes(2)); */

//~Let and Const~//
