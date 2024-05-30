import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <div class="products">
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
