import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMylocationComponent } from './btn-mylocation.component';

describe('BtnMylocationComponent', () => {
  let component: BtnMylocationComponent;
  let fixture: ComponentFixture<BtnMylocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnMylocationComponent]
    });
    fixture = TestBed.createComponent(BtnMylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
