import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
  <div class=hero> 
    <h1>My Hero</h1>
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
