import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaycompoComponent } from './twowaycompo.component';

describe('TwowaycompoComponent', () => {
  let component: TwowaycompoComponent;
  let fixture: ComponentFixture<TwowaycompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaycompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaycompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
