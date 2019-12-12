import { Injectable } from '@angular/core';
import { BOOKS } from './mock-books';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = BOOKS;

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books.find(book => book.id === id)
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
