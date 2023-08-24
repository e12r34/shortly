import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogSuccessShortenComponent } from './modal-dialog-success-shorten.component';

describe('ModalDialogSuccessShortenComponent', () => {
  let component: ModalDialogSuccessShortenComponent;
  let fixture: ComponentFixture<ModalDialogSuccessShortenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDialogSuccessShortenComponent]
    });
    fixture = TestBed.createComponent(ModalDialogSuccessShortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
