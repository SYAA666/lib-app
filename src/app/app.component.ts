import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lib-app';
  constructor(private route: Router) {

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
}
