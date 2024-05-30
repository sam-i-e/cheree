import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <div class="products">
    <style>
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    h1 {
      animation: slideInFromLeft 1s ease-out;
      font-size: 3em;
      color: #333;
      /* Additional styling for h1 */
    }

    p {
      animation: slideInFromLeft 1s ease-out;
      
    }
  </style>
      <h1>Looku ni moto 🔥</h1>
    <p>
      products works!

      hurray!
    </p>
    </div>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
