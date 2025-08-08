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


// Snack 3

// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

const authors = books.map(book => book.author.name)

const areAuthorsAdults = books.every(book => book.author.age >= 18)

const bookOrdered = books.sort((a, b) => areAuthorsAdults ? a.author.age - b.author.age : b.author.age - a.author.age)



console.log(authors)
console.log(areAuthorsAdults)
console.log(books)


// Snack 4

// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = books.map(book => book.author.age)

const agesSum = ages.reduce((acc, numero) => {
    return acc + numero
}, 0)

const media = agesSum / ages.length

console.log(ages)
console.log(agesSum)
console.log(media)







