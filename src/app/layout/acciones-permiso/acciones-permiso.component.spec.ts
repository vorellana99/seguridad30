import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesPermisoComponent } from './acciones-permiso.component';

describe('AccionesPermisoComponent', () => {
  let component: AccionesPermisoComponent;
  let fixture: ComponentFixture<AccionesPermisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesPermisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
