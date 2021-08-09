import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdfComponent } from './vdf.component';

describe('VdfComponent', () => {
  let component: VdfComponent;
  let fixture: ComponentFixture<VdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
