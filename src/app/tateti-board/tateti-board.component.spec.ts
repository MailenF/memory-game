import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetiBoardComponent } from './tateti-board.component';

describe('TatetiBoardComponent', () => {
  let component: TatetiBoardComponent;
  let fixture: ComponentFixture<TatetiBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatetiBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetiBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
