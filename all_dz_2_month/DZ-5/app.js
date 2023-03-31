const books = ['Война и мир', 'Убить пересмешника', 'Братья Карамазовы', 'Мартин Иден', 'Девушка в белом', 'Первый учитель', 'Остров сокровищ', 'Преступление и наказание',]

function filterBooks(books) {
    const booksWithU = [];
    const otherBooks = [];
    for (const book of books) {
        if (book.includes('у')) {
            booksWithU.push(book);
        } else {
            otherBooks.push(book);
        }
    }
    console.log('Книги с буквой «у»:', booksWithU);
    console.log('Остальные книги:', otherBooks);
}


filterBooks(books)
