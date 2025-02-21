import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolisLandingComponent } from './solis-landing.component';

describe('SolisLandingComponent', () => {
  let component: SolisLandingComponent;
  let fixture: ComponentFixture<SolisLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolisLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolisLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
