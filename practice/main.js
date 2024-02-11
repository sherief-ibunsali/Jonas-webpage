// let age = 15;
// if (age >= 18) {
//   console.log("This is eligible");
// } else {
//   let ageLeft = 18 - age;
//   console.log(`You need to wait till ${ageLeft} years`);
// }
// const string1 = String("123");
// console.log(string1, typeof string1);
// const number = Number("123");
// console.log(number, typeof number);
// const boolean = Boolean(1);
// console.log(boolean);

// const obj = {
//   name: "sherief",
// };
// console.log(obj.__proto__);

// function Person(name, lname) {
//   this.name = name;
//   this.lname = lname;
// }
// Person.prototype.age = 12;
// Person.prototype.fullName = function () {
//   return this.name + " " + this.lname;
// };
// const person1 = new Person("sherief", "Ibunsali");
// console.log(person1.fullName());

// console.log(person1.hasOwnProperty("name"));
// console.log(person1.hasOwnProperty("age"));
// console.log(person1.__proto__);
// console.log(Person.prototype.constructor);

// const arr = [1, 2, 3, 4];
// console.log(arr.__proto__.__proto__.__proto__);
// const arr2 = [2, 2, 2, 4, 5, 6, 4, 5];
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   details() {
//     return this.name + " " + this.age;
//   }
// }
// Person.prototype.method1 = function () {
//   return `Hey ${this.name}`;
// };
// const person = new Person("sherief", 21);
// console.log(person);
// console.log(person.method1());

// const object = {
//   movements: [200, 300, 400, 500, 600],
//   get details() {
//     return this.movements.pop();
//   },
//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };
// console.log(object.details);
// object.latest = 9000;
// console.log(object);

// class Clfun {
//   constructor(fname, year) {
//     this.fname = fname;
//     this.year = year;
//   }
//   get getAge() {
//     return 2023 - this.year;
//   }
//   set changeName(name) {
//     console.log(`${(this.fname = name)} is your new name`);
//   }
//   set fname(nam) {
//     if (nam.includes(" ")) {
//       this._fname = nam;
//     } else {
//       alert(`${nam} is not a full name`);
//     }
//   }
//   get fname() {
//     return this._fname;
//   }
// }
// const details = new Clfun("sherief I", 2002);
// // details.changeName = "Miskath Begum";
// console.log(details);

// const obj = {
//   calAge() {
//     return 2023 - this.year;
//   },
// };
// const person = Object.create(obj);
// person.name = "sherief";
// person.year = 2002;
// console.log(person.calAge());

// const details = Object.create(obj);
// details.name = "ibunsali";
// details.year = 1988;
// console.log(details.calAge());
// console.log(details.__proto__ === obj);

// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Parent.prototype.getAge = function () {
//   return `Your age is ${2023 - this.age}`;
// };
// function Child(name, age, degree) {
//   Parent.call(this, name, age);
//   this.degree = degree;
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
// Child.prototype.getDetails = function () {
//   return `My name is ${this.name} your age is ${this.age} and I have completed my graduation on ${this.degree}`;
// };
// const details = new Child("sherief", 2002, "B.Sc.Physics");
// console.log(details.getAge());
// console.log(Child.prototype.constructor);
// console.log(details);
// console.log(details.__proto__);
// console.log(details.__proto__.__proto__);
// console.log(details.__proto__.__proto__.__proto__);

// function Car(name, speed) {
//   this.name = name;
//   this.speed = speed;
//   console.log(`Current speed ${this.speed}`);
// }
// Car.prototype.acclerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.name} is going at ${this.speed}Khm speed`);
// };
// Car.prototype.break = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.name} has reduced at ${this.speed}Khm speed`);
// };
// function Ev(name, speed, charge) {
//   Car.call(this, name, speed);
//   this.charge = charge;
// }
// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.charged = function () {
//   console.log(
//     `${this.name} is going at ${this.speed}Khm speed by having ${this.charge}% of the charge`
//   );
// };
// Ev.prototype.charging = function (ch) {
//   this.charge = ch;
// };
// Ev.prototype.acclerate = function () {
//   this.speed = this.speed + 20;
//   this.charge = this.charge - 2;
//   console.log(
//     `${this.name} is going at ${this.speed}Khm speed by having ${this.charge}% of the charge`
//   );
// };
// const details = new Ev("sherief", 120, 87);
// details.charging(90);
// details.acclerate();
// // details.break();
// // details.charged();
// console.log(details);

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     console.log(`Thank you ${this.owner}`);
//   }
//   getMovements() {
//     return this.movements;
//   }
//   deposit(val) {
//     return this.movements.push(val);
//   }
//   withdraw(val) {
//     return this.deposit(-val);
//   }
//   approvalLoan(val) {
//     return true;
//   }
//   requestedLoan(val) {
//     if (this.approvalLoan(val)) {
//       this.deposit(val);
//       console.log("Loan has approved");
//     }
//   }
// }
// const acc1 = new Account("sherief", "Rs", 1111);
// acc1.deposit(200);
// acc1.withdraw(90);
// console.log(acc1);
// acc1.requestedLoan(1000);
// console.log(acc1.getMovements());

// console.log(Array.prototype.__proto__.__proto__);
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log("Hey", this.name);
//   }
// }
// const she = new User("sherief");
// console.log(she);
// she.sayHi();
// alert(User === User.prototype.constructor);
// console.log(User.prototype.sayHi);

// class Fun {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   set getMail(val) {
//     this.email = val;
//   }
// }
// const fun = new Fun("sherief", 21, "sherief@");
// fun.getMail = "ibun@";
// fun.name = "misakth";
// console.log(fun);

// *****************************Data Structure******************************************

// Destructure

// old way to store each values in the separate variable
// const arr = [1, "sherief", 3, 5]
// let num1 = arr[0];
// let str = arr[1];
// let num2 = arr[2];
// let num3 = arr[3];
// console.log(num1);
// console.log(str);
// console.log(num2);
// console.log(num3);

// const [num1, str, num2, num3] = arr;
// console.log(num1);
// console.log(str);
// console.log(num2);
// console.log(num3);

// const restaurent = {
//   catagories: ["Indian", "French", "German"],
//   startmenu: ["Idly", "Dosa", "Rice"],
//   mainmenu: ["Pizza", "Burger", "Showerma"],
//   order: function (start, main) {
//     return [this.startmenu[start], this.mainmenu[main]];
//   },
//   openingHours: {
//     fri: {
//       open: 8,
//       close: 9,
//     },
//     thr: {
//       open: 7,
//       close: 10,
//     },
//     sat: {
//       open: 11,
//       close: 12,
//     },
//   },
// };
// const { name = "sherief", catagories: cat, openingHours } = restaurent;
// console.log(name);
// console.log(cat);
// console.log(openingHours);

// console.log(restaurent.order(1, 1));
// const [x, y] = restaurent.order(1, 1);
// console.log(x, y);
// const [one, two, three] = restaurent.catagories;
// console.log(one);
// console.log(two);
// console.log(three);

// const arr = [1, 2, [4, 5]];
// console.log(arr);
// [i, j, [l, m]] = arr;
// console.log(i);
// console.log(j);
// console.log(l);
// console.log(m);
// const ar2 = [1, 2, 3, 4];
// const [p, , q] = ar2;
// console.log(p);
// console.log(q);
// const {
//   fri,
//   thr: { open: o, close: c },
//   sat,
// } = openingHours;
// console.log(o, c);
// console.log(fri);
// // console.log(thr);
// console.log(sat);

// const { open, close } = fri;
// console.log(open);
// console.log(close);

// spread
// const arr = [1, 2, 3, 4];
// const ar2 = [5, 6, 7, ...arr];
// console.log(ar2);
// const newDish = [...restaurent.catagories, "Italic", "Japanese", "Chinese"];
// console.log(newDish);

// const name2 = "sherief";
// console.log(name2);
// const newName = [...name2, " ", "s"];
// console.log(newName);

// const sample = ["sherief", "ibunsali", "miskath"];
// const [a, ...other] = sample;
// console.log(a);
// console.log(other);
// const obj1 = {
//   nam: "ibunsali",
//   age: 21,
//   skills: ["html", "css", "js"],
// };
// const obj2 = {
//   abc: "abc",
//   ...obj1,
// };
// console.log(obj2);

// const newRestaurant = {
//   founder: "Mohammed Sherief",
//   ...restaurent,
// };

// // const guest = newRestaurant.guestValue ? newRestaurant.guestValue : 10;
// const guest = newRestaurant.guestValue || 20;
// console.log(guest);
// console.log(newRestaurant);

// const nullish = 0;
// const checkVal = nullish ?? 20;
// console.log(checkVal);
// const rest1 = {
//   name: "restful",
//   numGuest: 1,
// };
// const rest2 = {
//   name: "restless",
//   age: 21,
// };
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 222;
// console.log(rest1);
// console.log(rest2);

// const match = {
//   team1: "India",
//   team2: "Australia",
//   players: [
//     ["Watson", "Warner", "Smith", "Starc"],
//     ["Dhoni", "Virat", "Rohit", "Siraj"],
//   ],
//   score: "120",
//   runsScorer: ["Watson", "Smith", "Dhoni", "Virar"],
//   date: "June 20 2023",
//   odds: {
//     team1: "120",
//     x: 3.65,
//     team2: "121",
//   },
// };
// // console.log(match);
// // const [player1, player2] = match.players;
// // console.log(player1);
// // console.log(player2);

// // const [wkT1, ...otherPly1] = player1;
// // const [wkT2, ...otherPly2] = player2;
// // console.log(wkT1);
// // console.log(otherPly1);
// // console.log(wkT2);
// // console.log(otherPly2);
// // const allPlayers = [...player1, ...player1];
// // console.log(allPlayers);

// const playerFinal = [
//   ...player1,
//   "Finch",
//   "Maxwell",
//   ...player2,
//   "KL Rahul",
//   "Pant",
// ];
// console.log(playerFinal);
// const {
//   odds: { team1, x, team2 },
// } = match;
// console.log(team1, x, team2);

// const menu = [
//   "sherief",
//   true,
//   12.5,
//   50,
//   "This is your goal to get a job from It",
// ];
// for (key of menu) {
//   console.log(key);
// }

// let values = [23, 90, -10, 88, -112, -11];
// let add = [];
// let sub = [];
// for (let i = 0; i < values.length; i++) {
//   if (values[i] > 0) {
//     add.push(values[i]);
//   } else {
//     sub.push(values[i]);
//   }
// }
// console.log(add);
// console.log(sub);

// const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(weekDays);
// const openingHours = {
//   name: "sheiref",
//   [weekDays[1]]: {
//     open: 8,
//     close: 10,
//   },
//   [weekDays[4]]: {
//     open: 10,
//     close: 9,
//   },
//   [weekDays[2]]: {
//     open: 7,
//     close: 11,
//   },
// };
// console.log(openingHours);

// for (let keys of Object.keys(openingHours)) {
//   console.log(keys);
// }
// const keys = Object.keys(openingHours);
// const values = Object.values(openingHours);
// const entities = Object.entries(openingHours);
// console.log(keys);
// console.log(values);
// console.log(entities);
// let openStr = `we are open shop on ${keys.length} days per week`;
// console.log(openStr);
// for (let days of keys) {
//   openStr += `${days}:`;
// }
// console.log(openStr);

// const game = {
//   team1: "Aus",
//   team2: "Ind",
//   player: [
//     ["watson", "warner", "smith"],
//     ["dhoni", "raina", "sachin"],
//   ],
//   score: "4:0",
//   scored: ["watson", "sachin"],
//   date: "Nov 07 2024",
//   odds: {
//     team1: 1.23,
//     x: 3.45,
//     team: 6.5,
//   },
// };

// for (let [i, j] of game.scored.entries()) {
//   console.log(`${i + 1} Goal has scored by ${j}`);
//   // console.log(k);
// }
// const odds = Object.values(game.odds);
// console.log(odds);
// let average = 0;
// for (let avg of odds) {
//   // console.log(avg);
//   average = average + avg;
//   average = average / odds.length;
//   console.log(average);
// }

const map = new Map();
map.set("name", "sherief");
map.set(1, "number");
map.set("open", 8);
map.set("close", 19);
console.log(map.get("name"));
console.log(map.has("name"));
console.log(map);
const time = 21;
console.log(time > map.get("open") ? "hei" : "byre");
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const openingHours = {
  name: "sheiref",
  [weekDays[1]]: {
    open: 8,
    close: 10,
  },
  [weekDays[4]]: {
    open: 10,
    close: 9,
  },
  [weekDays[2]]: {
    open: 7,
    close: 11,
  },
};
for (let k of Object.keys(openingHours)) {
  console.log(k);
}
const question = new Map([
  ["question", "which is your favourite programming language"],
  [1, "C"],
  [2, "C++"],
  [3, "Java"],
  [4, "JavaScript"],
]);
console.log(question);
console.log(Object.entries(openingHours));
console.log(new Map(Object.entries(openingHours)));
// console.log(new Map(openingHours));

for (let l of question.values()) {
  console.log(l);
}
console.log([...question, "sherif"]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// string

const aitLine = "Tap Air Portugal";
console.log(aitLine[0]);
console.log(aitLine[1]);
console.log("sherif"[3]);
console.log([1, 3][0]);
console.log(aitLine.indexOf(" "));
console.log(aitLine.indexOf("l"));
console.log(aitLine.slice(2, aitLine.length - 1));
console.log(aitLine.slice(5, aitLine.indexOf("u")));

function sun(seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got a middle name");
  } else {
    console.log("You got lucky");
  }
}
sun("11B");
sun("12E");
console.log(aitLine.toLowerCase());
console.log(aitLine.toUpperCase());

const name = "jOnAs";
console.log(name);
let lower = name.toLowerCase();
const capitalize = lower[0].toUpperCase() + lower.slice(1);
console.log(capitalize);

const price = "288,77&";
console.log(price.replace(",", ".").replace("&", "$"));
console.log("sheiref".replace("h", "H"));
console.log("sherief".repeat(12));

// console.log("a+very+nice+string".join(""));
console.log("Mohammed sherief Ibunsali".split("e"));
const [fname, lname] = "Mohammed Sherief".split(" ");
console.log(fname);
console.log(lname);

const sample1 = [1, 2, 3, 4, 5];
for (let [i, k] of sample1.entries()) {
  console.log("i", i);
  console.log("k", k);
}
