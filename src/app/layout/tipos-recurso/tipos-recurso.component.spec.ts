import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposRecursoComponent } from './tipos-recurso.component';

describe('TiposRecursoComponent', () => {
  let component: TiposRecursoComponent;
  let fixture: ComponentFixture<TiposRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
