import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the components used in your MainComponent's template
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './content/footer/footer.component';
import { SectionOneComponent } from './content/section/section-one/section-one.component';
import { SectionTwoComponent } from './content/section/section-two/section-two.component';
import { BoxInputUrlComponent } from './content/box-input-url/box-input-url.component';
import { SectionBoostComponent } from './content/section/section-boost/section-boost.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalLoadingComponent } from './content/modals/modal-loading/modal-loading.component';
import { ModalDialogSuccessShortenComponent } from './content/modals/modal-dialog-success-shorten/modal-dialog-success-shorten.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule],
      declarations: [
        MainComponent,
        NavbarComponent,
        ContentComponent,
        FooterComponent,
        SectionOneComponent,
        BoxInputUrlComponent,
        SectionTwoComponent,
        SectionBoostComponent,
        ModalLoadingComponent,
        ModalDialogSuccessShortenComponent
      ], // Add AppNavbarComponent to the declarations
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
