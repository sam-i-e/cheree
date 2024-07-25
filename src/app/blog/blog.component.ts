import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="marketing-container">
      <h2>Stay up to date on the latest news and Products</h2>
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
  items = [
    {
      image: 'assets/img1.jpg',
      title: 'Sustainable Fashion: Why Thrifting is the Future',
      description: 'As the fashion industry continues to grow, so does its impact on the environment. At Cheree, we believe in promoting sustainable fashion through thrifting. By purchasing pre-loved items, you are not only saving money but also reducing waste and conserving resources. Join us in making a positive impact on the planet, one stylish outfit at a time.',
    },
    {
      image: 'assets/img5.jpg',
      title: 'SwiftCash Group Holdings Registers Strong Recovery',
      description: 'Nairobi Monday 13th May 2024... After reporting a 5% decline in profit after tax for the...',
    },
    {
      image: 'assets/Herooo.jpg',
      title: 'Sustainable Fashion: Why Thrifting is the Future',
      description: 'As the fashion industry continues to grow, so does its impact on the environment. At Cheree, we believe in promoting sustainable fashion through thrifting. By purchasing pre-loved items, you are not only saving money but also reducing waste and conserving resources. Join us in making a positive impact on the planet, one stylish outfit at a time',
    },
    // {
    //   image: 'path-to-image4.jpg',
    //   title: 'EazzyBiz with SC',
    //   description: 'EazzyBiz has all the tools designed to ensure that you can maintain your competitive advantage...',
    // },
  ];
}
