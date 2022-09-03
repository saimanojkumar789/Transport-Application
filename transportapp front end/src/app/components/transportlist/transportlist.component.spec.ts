import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportlistComponent } from './transportlist.component';

describe('TransportlistComponent', () => {
  let component: TransportlistComponent;
  let fixture: ComponentFixture<TransportlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
