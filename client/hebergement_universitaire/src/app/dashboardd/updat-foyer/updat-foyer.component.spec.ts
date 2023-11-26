import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatFoyerComponent } from './updat-foyer.component';

describe('UpdatFoyerComponent', () => {
  let component: UpdatFoyerComponent;
  let fixture: ComponentFixture<UpdatFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
