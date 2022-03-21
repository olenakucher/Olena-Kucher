// Task 1
let admin;
let user = "Anna";
admin = user;
// alert (admin);


// Task2
user = "ivan"
let newUser = user.charAt(0).toUpperCase() + user.slice(1)

console.log(newUser)

// Task 3

// concat
let text1 = 'Hello'
let text2 = 'World'
let text3 = text1.concat(' ', text2)
console.log(text3)

//trim
let text4 = '    Hello The Netherlands    '
console.log(text4.trim())

//Split the words in the sentence 
let text = "Hello The Netherlands";
let result = text.split(" ");
console.log(result)

//Search
let text7 = "Hello The Netherlands";
let position = text.search("The");
console.log(position)

//Checks if the text starts with certain characters
let text8 = "Hello The Netherlands";
let result2 = text.startsWith("Hello");
console.log(result2)

// Task 4
let a = '';
let b = 'bbb';
let c = false;
let test1 = !b.length === c; // true
let test2 = a.length > b.length; // false
let test3 = !a.length && !b.length;  //false
let test4 = a === c;  // false