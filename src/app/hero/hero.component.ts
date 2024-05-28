import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
  <div class=hero> 
    <div class="head1">
    <h1>My Hero</h1>
    </div>
  <p>
      Shop with us
    </p>
    <p>
      hero works!
      Here we go!
    </p>
    </div>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
