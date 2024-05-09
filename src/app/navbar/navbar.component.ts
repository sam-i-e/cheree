import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#">
          <img src="assets/logo.png" alt="Company Logo">
        </a>
      </div>
      <div class="navbar-menu">
        <ul class="navbar-nav">
          <li class="nav-item"><a href="#">WOMEN</a></li>
          <li class="nav-item"><a href="#">MEN</a></li>
          <li class="nav-item">
            <form class="navbar-search">
              <input type="text" placeholder="Search for items, brands and inspiration">
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
          </li>
          <li class="nav-item"><a href="#"><i class="fa fa-user"></i></a></li>
          <li class="nav-item"><a href="#"><i class="fa fa-heart"></i></a></li>
          <li class="nav-item"><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
        </ul>
      </div>
      <div class="navbar-dropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">New in <i class="fa fa-caret-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <!-- Add more dropdown items as needed -->
            </ul>
          </li>
          <!-- Add more dropdown menus as needed -->
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}