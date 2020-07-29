import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  books: Book[] = [];
  isLoading = true;

  book = {};
  isEditing = false;

  addBookForm: FormGroup;
  isbn = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder)  {  }
              

  ngOnInit() {
    this.getBooks();

    this.addBookForm = this.formBuilder.group({
      isbn: this.isbn,
      title: this.title,
      price: this.price
    });    
  }

  getBooks() {

  }

  addBook() {

  }  
  
  enableEditing(book: Book) {
    this.isEditing = true;
    this.book = book;
  }

  cancelEditing() {
    this.isEditing = false;
    this.book = {};
    // reload the books to reset the editing
    this.getBooks();
  }

  editBook(book: Book) {

  }
  
  deleteBook(book: Book) {

  }

}