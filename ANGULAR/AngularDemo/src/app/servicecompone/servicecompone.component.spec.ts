import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecomponeComponent } from './servicecompone.component';

describe('ServicecomponeComponent', () => {
  let component: ServicecomponeComponent;
  let fixture: ComponentFixture<ServicecomponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicecomponeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecomponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
