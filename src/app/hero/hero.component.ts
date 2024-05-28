import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
  <div class=hero> 
    <div class="head1">
    <h1>Fashion on a Budget: Look Good, Feel Great</h1>
    </div>
    <div class="head2">
  <p>
      Browse our latest products
    </p>
</div>
  <button>Start Exploring</button>
    </div>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
