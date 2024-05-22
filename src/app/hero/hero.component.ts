import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
  <div class=hero>  
  <p>
      hero works!
      hero works!
      // Here we go!
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
