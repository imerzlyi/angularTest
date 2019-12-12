import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  { path: 'books', component: BooksComponent, children: [
    { path: '', 
      children: [
        { path: ':id', component: BookDetailComponent },
        { path: 'add', component: AddBookComponent },
        { path: '', component: BooksComponent  },
      ] },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
