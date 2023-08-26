import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.modules';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { ModalLoadingComponent } from './content/modals/modal-loading/modal-loading.component';
import { ModalDialogSuccessShortenComponent } from './content/modals/modal-dialog-success-shorten/modal-dialog-success-shorten.component';
import { FooterComponent } from './content/footer/footer.component';
import { SectionBoostComponent } from './content/section/section-boost/section-boost.component';
import { SectionOneComponent } from './content/section/section-one/section-one.component';
import { BoxInputUrlComponent } from './content/box-input-url/box-input-url.component';
import { SectionTwoComponent } from './content/section/section-two/section-two.component';





@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ContentComponent,
    ModalLoadingComponent,
    ModalDialogSuccessShortenComponent,
    FooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionBoostComponent,
    BoxInputUrlComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,

  ]
})
export class MainModule { }
