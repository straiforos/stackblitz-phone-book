import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialComponent } from './dial.component';

describe('DialComponent', () => {
  let component: DialComponent;
  let fixture: ComponentFixture<DialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialComponent]
    });
    fixture = TestBed.createComponent(DialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
