import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {
  private cart: Book[];
  constructor() { }
  public addBook(book: Book): void {
    this.cart.push(book);
    console.log(this.cart);
  }
  public deleteBook(book: Book): void {
    this.cart.splice(this.cart.indexOf(book), 0);
  }
  public wipeCart(): void {
    this.cart.length = 0;
  }
}
