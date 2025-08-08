// Hai un array di oggetti rappresentanti libri:
const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];



// Snack 1

// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

const longBooks = books.filter(book => book.pages > 300);

const longBooksTitles = longBooks.map(book => book.title)

const allTitles = books.map(book => book.title)

console.log(longBooks)
console.log(longBooksTitles)
console.log(allTitles)


// Snack 2

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = books.filter(book => book.available === true)

const discountedBooks = availableBooks.map(book => {
    const discountedPrice = Math.round(parseInt(book.price) * (1 - 0.20) * 100) / 100 + "€"
    const newBooks = {
        ...book,
        price: discountedPrice
    } 
    return newBooks
})

const fullPricedBook = discountedBooks.find(book => {
    const price = parseInt(book.price)
    const integerPrice = Number.isInteger(price)
    return integerPrice
})

console.log(availableBooks)
console.log(discountedBooks)
console.log(fullPricedBook)





