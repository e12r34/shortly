import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('void => fadeIn', animate('0.2s ease-in-out')),
      transition('fadeIn => fadeOut', animate('0.2s ease-in-out')),
      transition('fadeOut => void', animate('0.2s ease-in-out')),
    ]),
  ],
})

export class NavbarComponent {

  showContentAnimation=false

  constructor(){

  }

  toggleProduct(){
    this.showContentAnimation = !this.showContentAnimation;

  }

}
