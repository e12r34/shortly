import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('fadeIn', style({ opacity: 1, transform: 'translateY(0)' })),
      state('fadeOut', style({ opacity: 0, transform: 'translateY(-10px)' })),
      transition('fadeIn => fadeOut', animate('0.2s ease-in-out')),
      transition('fadeOut => fadeIn', animate('0.2s ease-in-out')),
    ]),
  ],
})

export class NavbarComponent {

  showContent=false

  constructor(){

  }

  toggleProduct(){
    this.showContent = !this.showContent;
  }

}
