import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { BoxInputUrlComponent } from './box-input-url.component';
import { ApiService } from 'src/app/services/api/api.service';
import { FormsModule } from '@angular/forms';


describe('BoxInputUrlComponent', () => {
  let component: BoxInputUrlComponent;
  let fixture: ComponentFixture<BoxInputUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule], // Import HttpClientTestingModule
      declarations: [BoxInputUrlComponent],
      providers: [ApiService], // Provide ApiService and its dependencies
    }).compileComponents(); // Compile the component's template

    fixture = TestBed.createComponent(BoxInputUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
