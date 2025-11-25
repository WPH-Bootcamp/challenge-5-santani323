 
type Book = {
  title: string;
  author: string;
  year: number;
};

 
const books: Book[] = [];

 
function addBook(title: string, author: string, year: number): void {
  books.push({ title, author, year });
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

 
function listBooks(): void {
  console.log('All Books:');
  for (const book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  }
}

 
function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }
  const found = books.filter((book) => book.title.includes(title));
  console.log(`Search Results for "${title}":`);
  if (found.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }
  for (const book of found) {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  }
}

export { addBook, listBooks, searchBook };
