import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  template: `
    <div class="crypto-section">
  <h1>Checkout out our <span>Bestsellers</span></h1>
  <div class="features">
    <div class="feature">
      <img src="assets/img7.jpg" alt="Untraceable Icon">
      <h2>Nike Air Max 97</h2>
      <p>Ksh 2500.</p>
    </div>
    <div class="feature">
      <img src="assets/img8.jpg" alt="Untraceable Icon">
      <h2>New Balance 990</h2>
      <p>Ksh 1700.</p>
    </div>
    <div class="feature">
      <img src="assets/img9.jpg" alt="Untraceable Icon">
      <h2>Vans Old Skool</h2>
      <p>Ksh 1499</p>
    </div>
    <div class="feature">
      <img src="assets/img10.jpg" alt="Autonomy Icon">
      <h2>Converse Chuck Taylor All Star</h2>
      <p>Ksh 1999.</p>
    </div>
    <div class="feature">
      <img src="assets/img11.jpg" alt="Transparency Icon">
      <h2>Adidas Yeezy Boost 350</h2>
      <p>Ksh 2000</p>
    </div>
  </div>
</div>
  `,
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
