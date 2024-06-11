import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<section>
    <app-banner></app-banner>
  </section>
  <section>
    <app-navbar></app-navbar>
  </section>
  <section>
    <app-hero></app-hero>
  </section>
  <section>
    <app-products></app-products>
  </section>
  <section>
    <app-footer></app-footer>
  </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, HeroComponent, ProductsComponent, FooterComponent, BannerComponent]
})
export class AppComponent {
  title = 'Cheree E-Commerce Web App';
}