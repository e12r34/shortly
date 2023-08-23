import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.modules';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule

  ]
})
export class MainModule { }
