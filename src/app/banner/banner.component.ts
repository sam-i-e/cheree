import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: `
   <div class="banner">
  <div class="banner-content">
    <h1>Welcome to Our E-commerce Store!</h1>
    <p>Discover amazing products and great deals</p>
    <button class="shop-now-btn">Shop Now</button>
  </div>
</div>

  `,
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
