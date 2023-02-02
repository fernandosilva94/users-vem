import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartaoComponent } from './create-cartao.component';

describe('CreateCartaoComponent', () => {
  let component: CreateCartaoComponent;
  let fixture: ComponentFixture<CreateCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCartaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
