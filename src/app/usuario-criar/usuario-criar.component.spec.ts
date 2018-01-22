import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCriarComponent } from './usuario-criar.component';

describe('UsuarioCriarComponent', () => {
  let component: UsuarioCriarComponent;
  let fixture: ComponentFixture<UsuarioCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
