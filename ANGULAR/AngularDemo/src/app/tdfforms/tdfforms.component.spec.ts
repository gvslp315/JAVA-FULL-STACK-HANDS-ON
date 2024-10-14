import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFFormsComponent } from './tdfforms.component';

describe('TDFFormsComponent', () => {
  let component: TDFFormsComponent;
  let fixture: ComponentFixture<TDFFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TDFFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
