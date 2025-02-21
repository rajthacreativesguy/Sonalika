import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorManualsComponent } from './operator-manuals.component';

describe('OperatorManualsComponent', () => {
  let component: OperatorManualsComponent;
  let fixture: ComponentFixture<OperatorManualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorManualsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
