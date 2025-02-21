import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalBulletinComponent } from './technical-bulletin.component';

describe('TechnicalBulletinComponent', () => {
  let component: TechnicalBulletinComponent;
  let fixture: ComponentFixture<TechnicalBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalBulletinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
