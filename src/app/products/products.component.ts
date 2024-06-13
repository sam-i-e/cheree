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

    h2 {
      animation: slideInFromLeft 1s ease-out;
      font-size: 3em;
      color: #333;
      /* Additional styling for h1 */
    }

    p {
      animation: slideInFromLeft 1s ease-out;

    }
  </style>
      <!-- <h1>Looku ni moto 🔥</h1>
    <p>
      products works!

      hurray!
    </p> -->
    </div>
    <section class="prod">
      <div class="containers">
       <!-- <div class="title">
        <p>Looku Ni Moto 🔥</p>
        <h2><span>Best</span>Seller</h2>
       </div> -->
       <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-main">
            <div class="discount">8%</div>
            <div class="label label-green">Pre-Order</div>
            <!-- <div class="product-container">
              <div class="p"><img src="../assets/img1.jpg" alt="Product"></div>
              <div class="p1"><img src="../assets/img2.jpg" alt="Product"></div>
              <div class="p2"><img src="../assets/img3.jpg" alt="Product"></div>
            </div> -->
            <div class="image">
              <img src="../assets/img1.jpg" alt="Image">
            </div>
            <!-- <div class="cart-line">
            <div class="cart-item">
            <ul>
                <li><a href=""><i class="fa fa-shopping-basket"></i></a></li>
                <li><a href=""><i class="fa fa-heart"></i></a></li>
                <li><a href=""><i class="fa fa-search"></i></a></li>
              </ul>
            </div>
            </div> -->
          </div>
          <div class="content">
            <a href="">Trousers</a>
            <div class="price">$2000</div>
            <div class="rating">
              <i class="fa fa-star"></i>
            </div>
          </div>
            </div> 
            
              
        </div>
       </div>
       </div>
      <!-- </div> -->
    </section>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
