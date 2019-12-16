import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.book = this.booksService.getBook(id);
  }
}
