import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  name: string;
  author: string;
  year: number;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  onAddClick(): void {
    this.booksService.addBook(this.name, this.author, this.year);
    this.author = null;
    this.name = null;
    this.year = null;
  }
}
