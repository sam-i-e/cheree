import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
  <div class="marketing-container">
      <h2>Stay up to date on the latest news and SwiftCash Products</h2>
      <div class="cards-container">
        <div class="card" *ngFor="let item of items">
          <img [src]="item.image" alt="News Image">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <button>More info</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
