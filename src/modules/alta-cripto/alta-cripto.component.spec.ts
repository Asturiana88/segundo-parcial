import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCriptoComponent } from './alta-cripto.component';

describe('AltaCriptoComponent', () => {
  let component: AltaCriptoComponent;
  let fixture: ComponentFixture<AltaCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
