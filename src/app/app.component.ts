import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ShopingService } from './shoping.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lib-app';
  constructor(
    private route: Router,
    private cart: ShopingService
    ) {

  }
  goToMain(): void {
    this.route.navigate(['/main'])
  }
  goToCatalog(): void {
    this.route.navigate(['/catalog'])
  }
  goToCart(): void {
    this.route.navigate(['/cart'])
  }
  ngOnInit(): void {
    this.cart.createCart();
  }
}
