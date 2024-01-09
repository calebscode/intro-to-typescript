//-----------//
// functions //
//-----------//

function add(a: number, b: number): number {
  return a + b
}

// arrow function syntax
const subtract = (a: number, b: number): number => {
  return a - b
}

const a = 60
const b = 9
console.log(`Add: ${a} + ${b} = ${add(a, b)}`)
console.log(`Subtract: ${a} - ${b} = ${subtract(a, b)}`)

// void return types
function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, b) => a + b, 0)
  console.log(total)
}

addAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])

//-----------------------//
// return type inference //
//-----------------------//

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}!`
}

console.log(formatGreeting('leonard', 'top of the morning'))
