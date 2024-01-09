//--------//
// tuples //
//--------//

let person: [string, number, boolean] = ['John', 24, false] // sort of like an object without field names

person[0] = 'Jim'
person[1] = 30

//---------------//
// tuple example //
//---------------//

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [101.4, 88.9]

function useCoords(): [number, number] {
  const lat = 44.6
  const long = 97.1

  return [lat, long]
}

const [lat, long] = useCoords()

//--------------//
// named tuples //
//--------------//

let user: [name: string, age: number]
// user.name = 'Joe' CANT DO THIS
user = ['Joe', 25]
console.log(user[0])

// why not use an object instead?
