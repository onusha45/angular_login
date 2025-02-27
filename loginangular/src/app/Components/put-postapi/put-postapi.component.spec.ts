import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPostapiComponent } from './put-postapi.component';

describe('PutPostapiComponent', () => {
  let component: PutPostapiComponent;
  let fixture: ComponentFixture<PutPostapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutPostapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutPostapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
