import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
  <div class=hero> 
    <div class="head1">
    <h1>Browse our latest products</h1>
    </div>
    <div class="head2">
  <p>
      Shop with us
    </p>
</div>
    </div>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
