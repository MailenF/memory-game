import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetiSquareComponent } from './tateti-square.component';

describe('TatetiSquareComponent', () => {
  let component: TatetiSquareComponent;
  let fixture: ComponentFixture<TatetiSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatetiSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetiSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
