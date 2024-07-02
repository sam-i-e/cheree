import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  template: `
    <div class="crypto-section">
  <h1>The Largest & Best <span>Deriv Money Transfer</span> Service</h1>
  <div class="features">
    <div class="feature">
      <img src="assets/img7.jpg" alt="Untraceable Icon">
      <h2>Nike Air Max 97</h2>
      <p>Sending and receiving addresses as well as transacted amounts.</p>
    </div>
    <div class="feature">
      <img src="assets/img8.jpg" alt="Untraceable Icon">
      <h2>New Balance 990</h2>
      <p>Sending and receiving addresses as well as transacted amounts.</p>
    </div>
    <div class="feature">
      <img src="assets/img9.jpg" alt="Untraceable Icon">
      <h2>Vans Old Skool</h2>
      <p>Sending and receiving addresses as well as transacted amounts.</p>
    </div>
    <div class="feature">
      <img src="assets/img10.jpg" alt="Autonomy Icon">
      <h2>Converse Chuck Taylor All Star</h2>
      <p>FX has striven to solve blockchain governance, transparency brings.</p>
    </div>
    <div class="feature">
      <img src="assets/img11.jpg" alt="Transparency Icon">
      <h2>Nike Air Force 1</h2>
      <p>In Deriv, transparency brings trust & old strong transparency.</p>
    </div>
  </div>
</div>
  `,
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
