import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCriptoVendedorComponent } from './listado-cripto-vendedor.component';

describe('ListadoCriptoVendedorComponent', () => {
  let component: ListadoCriptoVendedorComponent;
  let fixture: ComponentFixture<ListadoCriptoVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCriptoVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCriptoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
