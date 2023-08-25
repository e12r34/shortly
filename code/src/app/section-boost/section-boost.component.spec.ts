import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBoostComponent } from './section-boost.component';

describe('SectionBoostComponent', () => {
  let component: SectionBoostComponent;
  let fixture: ComponentFixture<SectionBoostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionBoostComponent]
    });
    fixture = TestBed.createComponent(SectionBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
