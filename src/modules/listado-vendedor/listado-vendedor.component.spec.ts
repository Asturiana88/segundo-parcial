import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVendedorComponent } from './listado-vendedor.component';

describe('ListadoVendedorComponent', () => {
  let component: ListadoVendedorComponent;
  let fixture: ComponentFixture<ListadoVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
