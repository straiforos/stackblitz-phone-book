import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookListComponent } from './phone-book-list.component';

describe('PhoneBookListComponent', () => {
  let component: PhoneBookListComponent;
  let fixture: ComponentFixture<PhoneBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneBookListComponent]
    });
    fixture = TestBed.createComponent(PhoneBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
