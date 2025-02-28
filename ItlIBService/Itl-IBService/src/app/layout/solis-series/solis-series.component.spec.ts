import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolisSeriesComponent } from './solis-series.component';

describe('SolisSeriesComponent', () => {
  let component: SolisSeriesComponent;
  let fixture: ComponentFixture<SolisSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolisSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolisSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
