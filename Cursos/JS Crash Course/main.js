//let, const
// You should always use const unless you know you are going to change a value
/*let score = 3;
const iva = .08;
score = 4;
console.log(score);
console.log(iva);*/


// Strings, Numbers, Boolean, Null, Undefined
/*const name = 'Jhon';
const age = 25;
const rating = 4.8;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof rating);*/

/*const name = 'Juan';
const age = 13;

const hello = `My name is ${name} and i am ${age}`;
console.log(hello);*/

/* const s = 'Hello World';
const w = 'Computer, Monitor, mouse, keyword';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(w.split(', '));*/


//Arrays//
/* const Numbers = new Array(1,2,3,4,5);
const Fruts = ['Mango', 'Cherry', 'Apple', 15, true];

Fruts[5] = 69;

Fruts.push(420);
Fruts.unshift('Aguacate');
Fruts.pop();


console.log(Numbers);
console.log(Fruts);
console.log(Array.isArray(Fruts));
console.log(Fruts.indexOf('Cherry'));
//console.log(Fruts[2]);
//console.log(Fruts[5]);
 */

/* const person = {
    firstName: 'Jhon',
    secondName: 'Doe',
    age: 31,
    hobbies: ['Music', 'Movies', 'Sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.secondName);
console.log(person.hobbies[2]);
console.log(person.address.city);

const { secondName, age, address: { state } } = person;
console.log(state);


person.email = 'jhonDoe@gmail.com';
console.log(person.email); */


/* const todo = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Calling Mom',
        isCompleted: false
    }
];

console.log(todo);
console.log(todo[1].text);

const todoJSON = JSON.stringify(todo);//convert to JSON
console.log(todoJSON); */


//Loops//
//for
/* for(let i=0; i<=10; i++){
    console.log(`You are now #${i}`);
}

//for #2
for (let todos of todo){
    console.log(todos.text)
}

//forEach, map, filter
todo.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todo.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todo.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text;
});//just returning the text of the Todo that is completed
console.log(todoCompleted);

//while
let i = 0;
while (i < 10){
    console.log(`While loop is now ${i}`);
    i += 1;
} */

//Conditionals//
const x = 6;
const y = 11;

if (x == 10){
    console.log('x is 10');
}

if (x === 10){//have to be also the same type of value
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10')
} else{
    console.log('x is less than 10')
}

if (x > 5 || y > 10){//if one is true it will work
    console.log('x is more than 5 or y is more than 10');
}

if (x > 5 && y > 10){//the both have to be true
    console.log('x is more than 5 or y is more than 10');
}