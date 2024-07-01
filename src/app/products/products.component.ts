import { Component } from '@angular/core';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
  <div class="inner-container">
     <h1>
    Looku ni
    <span class="highlight">Moto</span>🔥
  </h1>
    <div class="grid">
      
      <div class="card">
        <div class="img-container">
          <img
            src="assets/img5.jpg"
            alt="Family having dinner"
            class="img"
          />
        </div>
        <div class="content">
          <h3>Automated Deposits to Deriv</h3>
          <p>
            Our automated fees.
          </p>
          <button class="button">
            Download the App
            <span class="arrow">&#8594;</span>
          </button>
        </div>
      </div>

      

      <div class="card">
        <div class="img-container">
          <img
            src="assets/img4.jpg"
            alt="Senior couple"
            class="img"
          />
        </div>
        <div class="content">
          <h3>Fast Deposits & Withdrawals</h3>
          <p>
            Our intelligent.
          </p>
          <button class="button">
            Find Out More
            <span class="arrow">&#8594;</span>
          </button>
        </div>
      </div>

      <div class="card">
        <div class="img-container">
          <img
            src="assets/img2.jpg"
            alt="Senior couple"
            class="img"
          />
        </div>
        <div class="content">
          <h3>Fast Deposits & Withdrawals</h3>
          <p>
            Our intelligent 
          </p>
          <button class="button">
            Find Out More
            <span class="arrow">&#8594;</span>
          </button>
        </div>
      </div>

      <div class="card">
        <div class="img-container">
          <img
            src="assets/img3.jpg"
            alt="Family embrace"
            class="img"
          />
        </div>
        <div class="content">
          <h3>Security is our Priority</h3>
          <p>
            Define your financial goals, whether it's saving for a down payment, paying off debt, or building an emergency fund. Our goal setting tools help you create a roadmap and track your progress, keeping you motivated and accountable every step of the way.
          </p>
          <button class="button">
            Download the App
            <span class="arrow">&#8594;</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
