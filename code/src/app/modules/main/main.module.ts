import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.modules';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { ModalLoadingComponent } from './content/modals/modal-loading/modal-loading.component';
import { ModalDialogSuccessShortenComponent } from './content/modals/modal-dialog-success-shorten/modal-dialog-success-shorten.component';




@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ContentComponent,
    ModalLoadingComponent,
    ModalDialogSuccessShortenComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,

  ]
})
export class MainModule { }
