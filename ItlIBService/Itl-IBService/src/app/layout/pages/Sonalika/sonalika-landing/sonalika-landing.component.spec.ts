import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonalikaLandingComponent } from './sonalika-landing.component';

describe('SonalikaLandingComponent', () => {
  let component: SonalikaLandingComponent;
  let fixture: ComponentFixture<SonalikaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonalikaLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonalikaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
