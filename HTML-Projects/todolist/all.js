// arrays and couple of methods -----------------------------------
// let value

// const myArr = [1,"item2","item3","item4",361];

// const myArr2 = [65,12.1,90.3,"ab","eags"]

// value = myArr.length;

// value = myArr[0];
// value = myArr[myArr.length -1];

// myArr[1] = 400;

// value = myArr;

// myArr.splice(0,2)
// myArr.pop()

// console.log(myArr.indexOf(361))

// myArr.reverse();
// console.log(myArr)

// value = myArr;
// value = myArr.sort();

// value = myArr.sort(function(x,y){
//     return x-y;
// });

//  value = myArr.sort( (x,y) => x-y )
// console.log(value)

//
// arrays and couple of methods ----------------------------------------

// conditionals

// ==
// ===
// !=
// >
// <
// >=
// <=

// const a = 5;
// const b = 5;

// if (a === b){
//     function equal(value) {
//         console.log("a equals b");
//         return value;
//     }
//     equal();
// }

// const a = 15;
// const b = 40;

// if (a === b) {
//     function plus(value) {
//         const result = a + b;
//         console.log(result);
//         return value;
//     }

//     plus();
// }

// function math() {
//   const a = 35;
//   const b = 99;
//   const c = a + b + 55;

//     const result = a + b * c;

//   console.log(result);
// }

// math();

// (newMath) => newMath = result; result = 5+10 ;console.log(result)

// function newMath(){

//  const a = 10;
//  const b = 20;
//     const result = a + b;

//   console.log(result)
// }

// newMath()

// console.log((4 == 2) && ("abc" == "abc"))

// console.log((1==1)|| ("any" == "any"))
// const err = false;
// err ? console.log("hata var"):console.log("hata yok")

// console.warn("warning")
// console.error("error
// console.clear()

// let value;

// const now = new Date();

//  const date1 = new Date("3-11-1998 12:15:35");

//  const date2 = new Date("october 5 2006");

//  const date3 = new Date("12/5/1975")

// //  value = date1;

// //  console.log()

// value = date1.getMonth();

// console.log(value);
// console.log(date1.getMonth());
// console.log(date2.getDate());

// date3.setFullYear(2000)

// console.log(date3)

// const x = (10);
// console.log(typeof x);

// const name1 = "john doe";

// console.log(name1);

// let a = false;
// let b = true;
// const c = null;
// const d = undefined;

// const person = {
//     name: "john doe",
//     age: 20,
// }
// console.log(person);
// console.log(typeof person)

// const date = new Date();

// console.log(date);
// console.log(typeof date)

// const myFunc = function(){
//     console.log("myFunc is working")
// }
// myFunc()

// // let a = 100;
// const a = 110;

// let b = 100;
// // a = 200;
// // a = 200;
// console.log(a,b);

// const a = [1,2,3,4,5];

// a.push("item1");

// console.log(a);

// let i = 0;

// while(i<10){console.log(i) i++} !infinite loop!

// let i = 10;

//  while (i > 0){
//      console.log(i);

//   i -= 2;
//  }

// let i = 0;

// while(i<10) {    !INFINITE LOOP!
//     if (i== 3 || i == 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;

//  do {
//     console.log(i);
//     i++
//  }while(i<30);
// let i = 1;
// while(i<10){
//     i++;

//     console.log(i)
// }

// const langs = ["python","java","c#","c++"];

// let index = 0;

//  while(index < langs.length){
//     console.log(langs[index]);
//     index++;
//  }

// for(let index = 0;index< langs.length;index++){
//     console.log(langs[index]);
// }

// langs.forEach(function(langs,index){
// console.log(langs,index)
// });

// const users = [
//     {named:"john" ,age: 30},
//     {named:"john2" ,age: 33},
//     {named:"johnny3" ,age: 35},
// ];

// const names = users.map(function(user){
//     return user.name;

// });

// const ages = users.map(function(user){
//     return user.age;
// });

// console.log(names,ages);
// console.log(ages);

// const user ={
//     name:"john",
//     age:52
// }
// for(let key in user){
//     console.log(key,user[key])
// }

//functions

// function sayHello(name = "no information",age = "no information") {
//     if (typeof name === "undefined") name = "no info";

//     if(typeof age === "undefined") age = "no info";

//     console.log(`Name: ${name} Age: ${age}`);
// }
// sayHello("aa",50);

// function square(x) {
//     return x * x;

// }

// function cube(x) {
//     return x*x*x;
// }

// // let a = square(12);
// let a = cube(5);
// console.log(a)

// const myFunc = function(name){
//     console.log("hello" + name);
// }
// myFunc("john")

// (function(name){
// console.log("hello: "+ name);
// })("john")

// const database = {
//     host: "localhost",
//     add: function(){
//         console.log("added");
//     },
//     get: function(){
//         console.log("getted");
//     },
//     update: function(id){
//         console.log(`Id: ${id} updated`);
//     },
//     delete: function(id){
//         console.log(`Id ${id} deleted`);
//     },
// }
// // console.log(database.host)
// // console.log(database.add)
// // database.add("item")
// database.delete(5)

// let value;

// const employee1 = {
//     named: "john doe",
//     age: 40,
//     email:"myEmailExample@example.com",
//     langs: ["java","python","js","php"],
//     address: {
//         city: "berlin",
//         street: "12th street of something i dunno",
//     },

//     working: function(){
//         console.log(`${this.named} is working`)
//     }
// };

// const employee2 = {
//     named: "johnny doeeee",
//     age: 45,
//     email:"myEmailExampleTWO@example.com",
//     langs: ["java","python","js","php","c++"],
//     address: {
//         city: "paris",
//         street: "2th street of something i dunno",
//     },

//     working: function(){
//         console.log(`${this.named} is working`)
//     }
// }

// value = employee1;
// // value = employee1.address;
// employee1.working();
// console.log(value)

// const employees = [
//     {employee1},
//     {employee2},
// ]

// console.log(employees[0])

// let value;

// const value1 = 50;

// const value2 = 60;

// value = value1+value2
// value = value1 % value2
// value = Math.round(3.4)

// value = Math.ceil(5.2)
// value=Math.floor(5.6)
// value=Math.sqrt(20)
// value=Math.abs(-2395196)
// value=Math.pow(3,10)
// value=Math.max(5,2,10,-1420,130)
// value=Math.min(5,2,10,-1420,130)
// value = Math.random()
// value = Math.floor(Math.random() * 100 + 1)

// console.log(value)

// function Func(){
//     var value1 = 10;
//     let value2 = 20;
//     const value3 = 30;

//     console.log(value1,value2,value3);
// }
// Func();

// if(true){
//     // var value1 = 40; notWorking
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3)
// }

// let  value = "items1"

// console.log(value)

// let value;

// const element1 = "itemA";
// const element2 = "elementA";

// // value = element1 + " " + element2;
// // value = element1.concat(" ",element2," ","itemB");

// // value = element1.toUpperCase();
// // value = element2.toLocaleLowerCase();

// // value = element1[0];

// // value = element1[element1.length -1];

// // value = element1.indexOf("e")
// // value = element2.charAt(2);
// // value = element2.charAt(element2.length -1);
// // element3 = element1+element2

// const langs = "java,c#,js,Python,c++";

// // value = langs.replace("python","css");
// // value = langs.includes("java");
// // value = langs.includes("asdsad");

// console.log(value)

// const process = 1;

// // if (process === 1){
// //     console.log("process 1");

// // }else if (process === 2){
// //     console.log("process 2")
// // }else{
// //     console.log("unregistered process")
// // }

// switch(process){
//     case 1:
//         console.log("process 1");
//         break;
//     case 2:
//         console.log("process 2");
//         break;
//     case 3:
//         console.log("process 3");
//         break;
//     default:
//         console.log("error");
// }

// const name = "John Doe";
// const department = "Ceo";
// const salary = 100 +"K";

// // const a = "name: " + name + "\n" + "department " + department + "\n" + salary;

// // const a = `Name:${name}\nDepartment:${department}\nSalary:${salary}`

// const html = `
// <ul>
// <li>${name}</li>
// <li>${department}</li>
// <li>${salary}</li>
// </ul>
// `
// document.body.innerHTML = html

// console.log(a)

// let value;

// value = String(0123456789);
// value = String(5.9);
// value = String(true);
// value = String(false)
// value = String(function(){console.log("something")})
// value = String([1,2,3,4,5,6,7,8,9,0]);
// value = String(Object)
// value = (1).toString()

// value = Number("1234567890");
// value = Number(null);
// value = Number(undefined);
// value = Number("Random Words!")
// value = Number(function(){console.log("random words")})
// value = Number([1,2,3,4,5,67,8,9,0])
// value = Number("3.141411414141414141414");
// value = parseFloat("5.53325");
// value = parseInt("3.5215")

// value = Number("50")+ 9;
// console.log(typeof value)
// console.log(value);

// alert("hello")

// confirm("sozlesmeyi imzaladınız")
// if(confirm("you sure about this")){
//     console.log("he was sure about it.")
// }else{
//     console.log("he wasnt sure about it")
// }

// const answer = prompt("2 * 2 = ?");

// if(answer == 4){
//     console.log("correct")
// }else{
//     console.log("you cant even answer this huh")
// }
// let value;
//  value = window;
//  value = window.location
//  value = window.location.host
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;

// if(confirm("wanna refresh page?")){
//     window.location.reload();
// }else{
//     console.log("page is not refreshed");
// }

// value = window.outerHeight;
// value  = window.outerWidth;
// value = window.innerHeight;
// value = window.scrollX;
// value = window.scrollY;

// console.log(value)

// let jsonString = '{ "ages": 30}'

// try {
//     const user = JSON.parse(jsonString);
//     console.log(user.age);
// }
// catch(err){
//     console.log(err.message);
// }
// finally{
//     console.log("this will work even with error n without error")
// }

// const myFunc = () => {
//     console.log("this works")
// }

// myFunc()

// const myFunc = (element1,element2) => console.log("sup",element1,element2)

// myFunc("mister","white")

// const a = x => x + x * x;

// console.log(a(12));

// let num1, num2;

// array = [10, 20, 30, 40, 50, 60];

// // num1 = array[3];
// // num2 = array[1];

// [num1, num2] = array;

// console.log(num1, num2);
// console.log(array);

// // // const nums = {
// // //     a:10,
// // //     b:20,
// // //     c:30,
// // //     d:40,
// // // };

// // // const {a:num1,c:num2,d:num3} = nums;

// // // console.log(nums);

// const nums = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
// };

// const {a:num1,c:num2,d:num3} = nums;

// console.log(num1,num2,num3);

// const getFunc = () => ["elem1","elem2","elem3","elem4","elem5"];

// const [element1,element2,element3,element4,element5] = getFunc();
// console.log(element1,element2,element4);

// const person = {
//     name:"johnny doe",
//     year:2001,
//     salary: 5000,
//     showInfos : () => console.log("showing information")
// };

// const {name:named,year:wasBorn,salary:income,showInfos:showingInfos} = person;

// console.log(named,wasBorn,income);

// showingInfos()

// const person = {
//     name:"john doe",
//     year:2003,
//     salary: 32000,
// };

// const langs = ["Python","Java","C++","Php"];

// const name = "john";

// for(let prop in person) {
//     console.log(prop,person[prop]);
// };

// for(let index in langs) {
//     console.log(index,langs[index])
// }

// for(let index in name){
// console.log(index,name[index]);
// };

// for(let value of person){  err!!
//     console.log(value)
// }

// for (let value in person){
// console.log(value);
// };

// let x = "hello";
// let y = "not hello";

// if(x === y){
//     console.log("equal");
// }else{console.log("not equal")}

// const person1 = {
//     name:"santa",
//     age:500,
// }
// const person2 = {
//     name:"santa",
//     age:500,
// }

// if(person1 === person2){
//     console.log("equals");
// }else{console.log("not equal")} +

// const cities = new Map();
// const key = [1,2,3];
// cities.set("copenhag",54);
// cities.set("new york", 21593);
// // cities.set(key,"list")
// // cities.set("list",key)

// console.log(cities)

// const myset = new Set();

// myset.add(15);
// myset.add(331835);
// myset.add("elem1");
// myset.add(false);
// myset.add(["tetete","asfasfsad",1231,98182]);

// console.log(myset.size)
// myset.delete("elem1")
// console.log(myset.size)

// console.log(myset.has("elem1"))

// myset.forEach(function(value){
//     console.log(value)
// });

// for(let value of myset){
//     console.log(value)
// }

// const array = Array.from(myset);
// console.log(array)

// const langs = ["c#","c++","java","js"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// console.log(...langs)

// const langs2 = ["Javascript","C#",...langs];

// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...number2] =numbers;

// console.log(a,b)

// console.log(number2);

// const addNumbers = (a,b,c) => console.log(a+b+c);
// addNumbers(...numbers);

// let myMap = new Map();

// // console.log(myMap);

// const key1 = "john";
// const key2 = {a:50,b:100};
// const key3 = () => 5;

// myMap.set(key1,"string value");
// myMap.set(key2,"object literal");
// myMap.set(key3,"function")

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));

// console.log(myMap.size)
// console.log(myMap);

// const cities = new Map();

// cities.set("new york",12345);
// cities.set("ankara",6);
// cities.set("berlin",12344545);
// cities.set("paris",12344635731);

// // cities.forEach(function(value,key){
// //     console.log(key,value);
// // });

// // for (let [key,value] of cities){
// //     console.log(key,value)
// // }

// // for(let key of cities.keys()){
//     // console.log(key);
// // };

// // for(let value of cities.values()){
//     // console.log(value)
// // }

// // const array =[["key1","value1"], ["key2","value2"]];

// // const lastMap = new Map(array);
// // console.log(lastMap);

// const array = Array.from(cities);
// [["tokyo",12],["izmir",5]]

// console.log(array);

// const obj1 = {
//   number1: 10,
//   number2: 20,
// };

// const obj2 = {
//   number1: 30,
//   number2: 40,
// };

// // function addNumbers(number3, number4) {
// //   console.log(this.number1 + this.number2 + number3 + number4);
// // }
// // addNumbers(100, 200);

// // addNumbers.call(obj1,100,200);
// // addNumbers.call(obj2,100,200);

// // addNumbers.apply(obj1,[100,200]);

// const getNumbersTotal = (obj) => (number3, number4) =>
//     obj.number1 + obj.number2 + number3 + number4;

// console.log(getNumbersTotal(obj1)(100, 200));
// console.log(getNumbersTotal(obj2)(100, 200));

// const obj = {
//     test1: function(){
//         console.log("test1");
//     },
//     test2: function(){
//         console.log("test2");
//     },

// }
// // console.log(obj);

// const emp = Object.create(obj);
// emp.name = "john";
// emp.age = 30;

// console.log(emp)

// function Person(){

// }
// Person.prototype.test1 = function(){
//     console.log("tester1");
// }
// Person.prototype.test2 = function(){
//     console.log("tester2");
// }

// function Employee(name,age){
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype.showInfos = function(){
//     console.log("name: " + this.name + "age: " +this.age);
// };

// const emp1 = new Employee("john",34);
// const emp2 = new Employee("notJohn",45);

// emp2.showInfos();

// console.log(emp1);
// console.log(emp2);

// console.log(this);

// const emp1 = {
//     name: "john",
//     age: 455,
//     showInfos: ()=> console.log("Showing infos")
// };
// const emp2 = {
//     name: "notJohn",
//     age: 123,
// }
// emp1.showInfos()
// console.log(emp1)

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function(){
//         console.log(this.name,this.age,this.salary);
//     }

// }

// const emp1 = new Employee("john",40,25000);
// const emp2 = new Employee("notJohn",32,33000);

// console.log(emp1,emp2)

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function(){
//     console.log("name "+ this.name + " age: " + this.age);
// }

// // const person = new Person("JOHN",23);
// // console.log(person);

// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;

// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("EMployee");
// }
// // const worker = new Employee("worker1",21);
// // console.log(worker);

// Employee.prototype.showInfos = function(){
//     console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
// }

// const emp = new Employee("john",49,45200);
// console.log(emp)
// emp.toString();
// emp.showInfos();

//todo

// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("submit event");

//     e.preventDefault();
// }

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.target.className)
// })

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("div's container");
// })

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");

// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");

// });

// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("click",run);

// function run(e){
//     if(e.target.className === "fa fa-remove"){
//         console.log("delete success")
//     }
//     if(e.target.id === "filter"){
//         console.log("filter success");
//     }
//     if(e.target.id === "clear-todos"){
//         console.log("clear all")
//     }
// }

// const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("page loaded");
// }

// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);
// filter.addEventListener("paste",run);
// filter.addEventListener("copy",run);
// filter.addEventListener("cut",run);
// filter.addEventListener("select",run);

// function run(e){
// console.log(e.type);
// }

// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//     header.textContent = e.target.value;
//     console.log(e.target.value);
// }

// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.which);
// }
// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key)
// }

// const cardBody = document.querySelectorAll(".card-body")[1];

// const title = document.querySelector("#tasks-title");

// title.addEventListener("click",run);
// title.addEventListener("dblclick",run);
// title.addEventListener("mousedown",run);
// title.addEventListener("mouseup",run);
// title.addEventListener("mouseover",run);
// title.addEventListener("mouseout",run);
// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);

// function run(e) {
//     console.log(e.type);
// }

// const  newLink = document.createElement("a");
// const cardBody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com";
// newLink.target = "_blank";

// newLink.appendChild(document.createTextNode("go to different page"));

// cardBody.appendChild(newLink);

// console.log(newLink)

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");
// // todos[1].remove();
// // console.log(todos)
// todoList.removeChild(todoList.lastElementChild)
// todoList.removeChild(todos[2]);
// console.log(todoList)

// const todoInput = document.getElementById("todo");
// let element;

// // element = todoInput;
// // element = todoInput.classList;

// // todoInput.classList.add("newClass");
// // todoInput.classList.add("myClass1");
// // todoInput.classList.remove("myClass1");

// element = todoInput;
// element = todoInput.placeholder;
// // element = todoInput.getAttribute("placeholder");

// todoInput.setAttribute("placeholder","what");
// todoInput.setAttribute("title","input");
// todoInput.removeAttribute("name")

// element = todoInput;
// console.log(element)
// // console.log(todoInput.getAttribute("placeholder"));

// let value;

// value = document;
// value = document.all[document.all.length-1];
// value = document.all[0];
// value = document.all[10];

// console.log(value);

// const elements = document.all;
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// const elements = Array.from(document.all);

// elements.forEach(element => {
//     console.log(element)
// });

// console.log(elements);

// value = document.all[5];
// value = document.body;
// value = document.head;

// value = document.location;
// value=document.location.hostname;
// value=document.location.port

// value = document.URL;
// value = document.characterSet;

// let value;
// value = document;
// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[0]

// let value;

// value=document.links[0];
// value=document.links[document.links.length-1].getAttribute("class")
// value=document.links[document.links.length-1].getAttribute("href")
// value = document.links[document.links.length-1].classList;
// value=document.links[document.links.length-1].className;

// value = document.forms;
// value=document.forms.length;
// value=document.forms[0]
// value=document.forms["form"]
// value=document.forms[0].id
// value=document.forms[0].getAttribute("id")
// value=document.forms[0].name
// value=document.forms[0].method

// console.log(value);

// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)")
// const cardrow = document.querySelector(".card.row");

// value=todoList
// value=todo;
// value=cardrow

// value=todoList.childNodes[2]
// value=todoList.childNodes

// value = todoList.children;
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[2].textContent = "eeeeasde";
// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "asgokoe";
// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount;
// value = cardrow.parentElement;
// value = cardrow.parentElement.parentElement;

// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;
// value = todo.previousElementSibling.previousElementSibling;

// console.log(value)

// const cardBody = document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h2");

// // newElement.className = "card-title";
// // newElement.id = "tasks-title";
// // newElement.textContent = "new Todos";

// // const body = document.body;
// // body.appendChild(newElement)

// const oldElement = document.querySelector("#tasks-title");
// cardBody.replaceChild(newElement,oldElement);

// console.log(newElement);

// let element;

// // element = document.getElementsByClassName("list-group-item")
// // element = document.getElementsByTagName("div");
// // element = document.querySelector(".list-group-item");
// // element = document.querySelector("li");
// // element = document.querySelector("div");

// element = document.querySelectorAll(".list-group-item"); // Node List

// element.forEach(function(el){
//     console.log(el);

// });

// console.log(element);

// const element = document.querySelector("#clear-todos");

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// element.className = "btn btn-primary";
// element.addEventListener('click', function() {
//     setTimeout(function() {
//         element.className = "btn btn-primary";
//     }, 5000);
// });

// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "del";
// element.innerHTML = "<span style = 'color:green'>del</span>"

// let element2 = document.querySelector("li:last-child");
// element2 = document.querySelector("li:nth-child(2)");
// element2 = document.querySelectorAll("li:nth-child(odd)");
// element2 = document.querySelectorAll("li:nth-child(even)");

// const element2Array = Array.from(element2);

// element2Array.forEach(function(el){
//     el.style.background ="#ccc";
//     el.style.color = "red";
// })
// const elements = document.querySelectorAll(".list-group-item"); // Node List
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";
// });
// // console.log(element2);

// localStorage.setItem("key","value");
// localStorage.setItem("omamiente","papientebomboclat");
// const value = localStorage.getItem("omamiente")
// console.log(typeof value)

// if (localStorage.getItem("omamiente") === null){
//     console.log("no data");
// }else(console.log("yes data my fren"));

// // localStorage.removeItem("key","value")

// const todos = ["todo1","todo2","todo3"];

// localStorage.setItem("todos", JSON.stringify(todos));
// const value = JSON.parse(localStorage.getItem("todos"));

// // console.log(value)

// const form = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo");

// form.addEventListener("submit",addTodo);

// function addTodo(e){
//     const value = todoInput.value;

//     let todos;

//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(value);

//     localStorage.setItem("todos",JSON.stringify(todos))

// e.preventDefaul();
// }

// const form = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo");

// !! LOCAL STORAGE !!

// form.addEventListener("submit",addTodo);

// function addTodo(e){
//     const value = todoInput.value;

//     let todos;

//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push(value);

//     localStorage.setItem("todos", JSON.stringify(todos));

//     e.preventDefault();
// }

// !! LOCAL STORAGE !!

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("addvalue");
// const deletekey = document.querySelector("#deletekey");

// add.addEventListener("click",addItem);
// del.addEventListener("click",deleteItem);
// clear.addEventListener("click",clearItems);

// function addItem(e){
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }
// function deleteItem(e){
//     sessionStorage.setItem(deletekey.value);
// }
// function clearItems(e){
//     sessionStorage.clear();
// }

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function(){
//     console.log("name: " + this.name + "age: " + this.age);
// }
// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee")
// }

// Employee.prototype.showInfos = function(){
//     console.log("name: " + this.name + "age: " + this.age + " salary: " + this.salary);
// }
// const emp = new Employee("xyz",30,25390);

// console.log(emp)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showInfos() {
//     console.log("name: " + this.name + " age: " + this.age);
//   }
// }

// class Employee extends Person {
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }
//   showInfos() {
//     console.log(
//       "name: " + this.name + " age: " + this.age + " salary: " + this.salary
//     );
//   }
//   toString() {
//     console.log("Employee");
//   }
//   raiseSalary(amount) {
//     this.salary += amount;
//   }
// }

// const emp = new Employee("JOHN", 18, 15000);
// emp.raiseSalary(2400);

// console.log(emp);
// emp.showInfos();
// emp.toString();

//old one function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("name:" + this.name + " age: " + this.age + " salary: " + this.salary)
// }
// const emp = new Employee("joe",40,20500);
// console.log(emp)

// new style >>>>
// class Employee {
//     constructor(name,age,salary){
//         this.name = name;
//         this.age=age;
//         this.salary=salary;
//     }
//     showInfos(){
//         console.log("name:" + this.name + " age: " + this.age + " salary: " + this.salary)
//     }

// }
// const emp = new Employee("hoihoi",35,123321);

// console.log(emp);
// emp.showInfos()

// class Maths {
//     static sqrt(x){
//         console.log(x*x);
//     }
//     static cube(x){
//         console.log(x*x*x);
//     }
// }

// Maths.cube(2);
// Maths.cube(4)
// Maths.sqrt(3)




// TODO LIST TODO LIST
// TODO LIST TODO LIST
// TODO LIST TODO LIST
// TODO LIST TODO LIST


const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#clear-todos");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
  todoList.addEventListener("click", deleteTodo);
}

function clearAllTodos(e) {
  if (confirm("sure?")) {
    while (todoList.firstElementChild != null) {
      todoList.removeChild(todoList.firstChild);
    }
    localStorage.removeItem("todos");
  }
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display : none !important");
    } else {
      listItem.setAttribute("style", "display : block");
    }
  });
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "Todo is successfully deleted");
  }

  e.preventDefault()
}

function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage();

  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);

    })

}
function addTodo(e){
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){
        showAlert("danger","please add a todo");
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","todo added");
    }
    e.preventDefault();
}

function getTodosFromStorage(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos=[];
        
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1200);
}
function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
    const link = document.createElement("a")
    
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    
    listItem.className = "list-group-item d-flex justify-content";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    
    todoList.appendChild(listItem);
    todoInput.value = "";

}

// TODO LIST TODO LIST
// TODO LIST TODO LIST
// TODO LIST TODO LIST
// TODO LIST TODO LIST

