// Task 1

let array1 = ['one', 'two', 'three',  'four']
let reversed = array1.reverse()  // reverse() reverses an array
console.log(reversed)

let array2 = [1, 4, 9, 11]
let map = array2.map(x => x = x+1)   // map() creates a new array where each element is modified in rhe same certain way
console.log(map)

console.log(Array.from('Hello'))  // from() creates an array from the object

let array3 = [1, 2, 3, 4, 5]
let even = (Element) => Element = 2
console.log(array3.some(even))  // some() tests if at least one element meets the specified parameters


//Task 2
let fruits = ['Apple', 'Orange']
fruits.push('Banana')
fruits[1] = 'Mango'
let FirstElement = fruits.shift()
console.log (FirstElement)
fruits.unshift ('Pear', 'Melon')
console.log(fruits)


//Task 3
let array4 = ['o', 'f', 'a', 'n', 'g']
array4[1] = 'r'
array4.push('e')
console.log(array4.join(''))