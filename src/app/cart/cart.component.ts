import { Component, OnInit } from '@angular/core';
import { ShopingService } from '../shoping.service';
import { Book } from '../book';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart: Book[];
  public totalCost: number;

  constructor(
    private shop: ShopingService
  ) { }

  ngOnInit() {
    this.cart = this.shop.getCart();
    this.findSum();
  }

  public deleteBook(book: Book): void {
    this.shop.deleteBook(book);
    this.cart = this.shop.getCart();
    this.findSum();
  }

  public deleteAllBooks(): void {
    this.cart.length = 0;
    this.shop.deleteAll();
    this.findSum();
  }

  public findSum() {
    this.totalCost = 0; 
    this.cart.forEach((book: Book) => {
      this.totalCost += book.cost;
    })
  }

}
