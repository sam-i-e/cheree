import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
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
      image: 'assets/user1.jpg',
      title: 'SwiftCash Recognized at Think Business Banking Awards with Top...',
      description: 'SwiftCash emerged as a top performer at the 20th Edition of the Think Business Banking...',
    },
    {
      image: 'path-to-image2.jpg',
      title: 'SwiftCash Group Holdings Registers Strong Recovery',
      description: 'Nairobi Monday 13th May 2024... After reporting a 5% decline in profit after tax for the...',
    },
    {
      image: 'path-to-image3.jpg',
      title: 'Mastercard and SwiftCash to Revolutionize Cross Border Money...',
      description: 'Nairobi, Kenya 12th April 2024... Mastercard and SwiftCash have announced a strategic...',
    },
    {
      image: 'path-to-image4.jpg',
      title: 'EazzyBiz with SC',
      description: 'EazzyBiz has all the tools designed to ensure that you can maintain your competitive advantage...',
    },
  ];
}
