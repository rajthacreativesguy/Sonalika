import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonalikaMainContentComponent } from './sonalika-main-content.component';

describe('SonalikaMainContentComponent', () => {
  let component: SonalikaMainContentComponent;
  let fixture: ComponentFixture<SonalikaMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonalikaMainContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonalikaMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
