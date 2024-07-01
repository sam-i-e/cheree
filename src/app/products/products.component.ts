import { Component } from '@angular/core';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
  <div class="inner-container">
     <h1>
    Swift Cash makes it Easy to
    <span class="highlight">Deposit</span> to Deriv.
  </h1>
    <div class="grid">
      
      <div class="card">
        <div class="img-container">
          <img
            src="assets/heroapp.png"
            alt="Family having dinner"
            class="img"
          />
        </div>
        <div class="content">
          <h3>Automated Deposits to Deriv</h3>
          <p>
            Our automated payment scheduling system takes the hassle out of managing due dates. Simply set up your recurring payments, and our system will handle the rest, ensuring timely payments and avoiding late fees.
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
            src="assets/hero.jpg"
            alt="Senior couple"
            class="img"
          />
        </div>
        <div class="content">
          <h3>Fast Deposits & Withdrawals</h3>
          <p>
            Our intelligent budgeting tools analyze your income and expenses, providing personalized recommendations to help you allocate your funds wisely. Track your spending, set realistic goals, and watch your savings grow.
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
            src="assets/product.jpg"
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
