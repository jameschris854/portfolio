import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingMenuButtonComponent } from './floating-menu-button.component';

describe('FloatingMenuButtonComponent', () => {
  let component: FloatingMenuButtonComponent;
  let fixture: ComponentFixture<FloatingMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
