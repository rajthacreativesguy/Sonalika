import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCircularsComponent } from './service-circulars.component';

describe('ServiceCircularsComponent', () => {
  let component: ServiceCircularsComponent;
  let fixture: ComponentFixture<ServiceCircularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCircularsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCircularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
