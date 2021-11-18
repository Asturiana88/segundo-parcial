import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCompradorComponent } from './listado-comprador.component';

describe('ListadoCompradorComponent', () => {
  let component: ListadoCompradorComponent;
  let fixture: ComponentFixture<ListadoCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
