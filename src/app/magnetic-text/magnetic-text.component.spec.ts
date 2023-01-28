import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticTextComponent } from './magnetic-text.component';

describe('MagneticTextComponent', () => {
  let component: MagneticTextComponent;
  let fixture: ComponentFixture<MagneticTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagneticTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
