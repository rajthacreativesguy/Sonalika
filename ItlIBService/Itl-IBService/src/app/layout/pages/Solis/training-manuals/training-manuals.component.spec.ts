import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingManualsComponent } from './training-manuals.component';

describe('TrainingManualsComponent', () => {
  let component: TrainingManualsComponent;
  let fixture: ComponentFixture<TrainingManualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingManualsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
