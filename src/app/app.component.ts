import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<section>
    <app-navbar></app-navbar>
  </section>
  <section>
    <app-hero></app-hero>
  </section>`,
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, HeroComponent]
})
export class AppComponent {
  title = 'Cheree E-Commerce Web App';
}
