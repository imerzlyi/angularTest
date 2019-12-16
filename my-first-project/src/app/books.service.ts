import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = BOOKS;

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    return this.books.find(x => x.id === id);
  }

  removeBook(book: Book): void {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  addBook(name: string, author: string, year: number): void {
    const newID = Math.max.apply(Math, this.books.map(f => f.id)) + 1;
    let book = new Book();
    book.id = newID;
    book.name = name;
    book.author = author;
    book.year = +year;
    this.books.push(book);
  }
}
