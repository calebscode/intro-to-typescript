//--------//
// arrays //
//--------//

let animes: string[] = ['demon slayer', 'jjk', 'hxh']
let outOf10: number[] = [7, 9, 10]

// updating arrays
animes.push('cowboy bebop')
outOf10.push(10)

// type inference with arrays
let characters = ['gon', 'tanjiro', 'yuji itadori']
characters.push('spike spiegel')
const bestProtag = characters[3]

// union type array
let things = [1, true, 'hello', null]

//-----------------//
// object literals //
//-----------------//

let manga: {
  title: string,
  author: string,
  chapter: number,
  volume: number
} = {
  title: 'Uzumaki',
  author: 'Junji Ito',
  chapter: 1,
  volume: 1
}

manga.chapter = 2

//-------------------------------------//
// type inference with object literals //
//-------------------------------------//

let originStory = {
  parentsDead: true,
  antagonistName: 'Joe Mama',
  complexity: 'low'
}

originStory.complexity = 'high'
