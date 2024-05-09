import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<section>
    <app-navbar></app-navbar>
  </section>`,
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent]
})
export class AppComponent {
  title = 'Cheree E-Commerce Web App';
}
