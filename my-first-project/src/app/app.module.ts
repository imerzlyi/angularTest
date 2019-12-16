import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksDetailsComponent,
    BooksAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
