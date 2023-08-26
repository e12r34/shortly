import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule

import { ContentComponent } from './content.component';
import { SectionOneComponent } from './section/section-one/section-one.component';
import { BoxInputUrlComponent } from './box-input-url/box-input-url.component';
import { SectionTwoComponent } from './section/section-two/section-two.component';
import { SectionBoostComponent } from './section/section-boost/section-boost.component';
import { ModalLoadingComponent } from './modals/modal-loading/modal-loading.component';
import { ModalDialogSuccessShortenComponent } from './modals/modal-dialog-success-shorten/modal-dialog-success-shorten.component';
import { FormsModule } from '@angular/forms';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ], // Import HttpClientTestingModule
      declarations: [
        ContentComponent,
        SectionOneComponent,
        BoxInputUrlComponent,
        SectionTwoComponent,
        SectionBoostComponent,
        ModalLoadingComponent,
        ModalDialogSuccessShortenComponent
      ],
      // You might need to provide additional services here if they are used by ContentComponent or its dependencies
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
