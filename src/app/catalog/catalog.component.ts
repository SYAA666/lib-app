import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Books } from '../books';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public books: Book[];
  constructor() { }

  ngOnInit() {
    this.books = Books;
  }

}
