import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ShopingService } from '../shoping.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input('book') bookInfo: Book;
  @Input('isInCart') isInCart: boolean;
  constructor(
    private cart: ShopingService,
  ) { }

  ngOnInit() {
    console.log(this.bookInfo);
  }

  addToCart(): void {
    this.cart.addBook(this.bookInfo);
  }

}
