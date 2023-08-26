import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInputUrlComponent } from './box-input-url.component';

describe('BoxInputUrlComponent', () => {
  let component: BoxInputUrlComponent;
  let fixture: ComponentFixture<BoxInputUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxInputUrlComponent]
    });
    fixture = TestBed.createComponent(BoxInputUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
