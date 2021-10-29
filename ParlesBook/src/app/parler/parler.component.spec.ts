import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlerComponent } from './parler.component';

describe('ParlerComponent', () => {
  let component: ParlerComponent;
  let fixture: ComponentFixture<ParlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
