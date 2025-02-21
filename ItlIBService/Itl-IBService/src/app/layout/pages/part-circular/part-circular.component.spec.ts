import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCircularComponent } from './part-circular.component';

describe('PartCircularComponent', () => {
  let component: PartCircularComponent;
  let fixture: ComponentFixture<PartCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartCircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
