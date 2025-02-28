import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonalikaSeriesComponent } from './sonalika-series.component';

describe('SonalikaSeriesComponent', () => {
  let component: SonalikaSeriesComponent;
  let fixture: ComponentFixture<SonalikaSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonalikaSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonalikaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
