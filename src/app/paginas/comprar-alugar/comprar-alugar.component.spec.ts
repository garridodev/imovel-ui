import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarAlugarComponent } from './comprar-alugar.component';

describe('ComprarAlugarComponent', () => {
  let component: ComprarAlugarComponent;
  let fixture: ComponentFixture<ComprarAlugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarAlugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarAlugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
