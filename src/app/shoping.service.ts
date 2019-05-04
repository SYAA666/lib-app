import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {
  private cart: Book[];
  constructor() { }
  public createCart(): void {
    this.cart = [];
  }
  public addBook(book: Book): void {
    this.cart.push(book);
  }
  public deleteBook(book: Book): void {
    this.cart.splice(this.cart.indexOf(book), 1);

  }
  public wipeCart(): void {
    this.cart.length = 0;
  }
  public getCart(): Book[] {
    return this.cart;
  }
  public deleteAll(): void {
    this.cart.length = 0;
  }
}
