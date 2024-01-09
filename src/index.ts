//----------//
// any type //
//----------//

let age: any
let title

age = 30
age = false

title = 25
title = {
  any: 'object',
  you: 'want'
}

//--------------------//
// any type in arrays //
//--------------------//

let things: any[] = [1, 2, 3, 'a', 'b', 'c', ['another', 'array'], {an: 'object'}]

//--------------------//
// functions with any //
//--------------------//

function addTogether(value: any): any {
  return value + value
}

console.log(addTogether(10))
console.log(addTogether('echo'))
console.log(addTogether([1, 2, 3]))

// ------------------- USE CASE: ------------------- 
// useful for migration from JS -> TS because it will
// avoid errors at first while still being valid TS.
