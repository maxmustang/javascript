//page 36
//   Functional programming is a style of programming that uses high-order functions to facilitate
//   code organization and reuse
//
//
// High Order Functions
//   threats a function as a data, receiving it as a argument or/and returning it as a value
//
//   High order functions can be used to
//     abstract algorithms from datatypes:
//       reduces the 'needs' to support datatypes in order to reusable algorithms
//        SAMPLES
const test = require( 'tape')
const shows = [
  { artist: 'x', city:'rj', ticketPrice: 10 },
  { artist: 'y', city:'mg', ticketPrice: 20 },
  { artist: 'z', city:'sp', ticketPrice: 30 }
]

const books = [
  { artist: 'x1', price: 10 },
  { artist: 'y2', price: 20 },
  { artist: 'z3', price: 30 }
]
test('Data abstraction', (t) => {
  let sortedShows = shows.sort((a,b) => a.ticketPrice < b.ticketPrice)
  let sortedBooks = books.sort((a,b) => a.price < b.price)
  t.ok(sortedShows[0].ticketPrice > sortedShows[2].ticketPrice, 'show sorted correctly')
  t.ok(sortedBooks[0].price > sortedBooks[2].price, 'books sorted correctly')
  t.end()
})

// as a high-order function, sort receives a function and handle what it have to do without knowing the
// specific type of it object

// forEach SAMPLES
test('Changing all books artist to George R R Martin', t => {
  books.forEach(book => book.title = 'Game of thrones')
  t.ok(books[0].title === 'Game of thrones', 'probably a GOT book')
  t.ok(books[1].title === 'Game of thrones', 'probably a GOT book')
  t.ok(books[2].title === 'Game of thrones', 'probably a GOT book')
  t.end()
})
