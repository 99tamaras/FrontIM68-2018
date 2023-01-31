import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaRacunaDialogComponent } from './stavka_racuna-dialog.component';

describe('StavkaRacunaDialogComponent', () => {
  let component: StavkaRacunaDialogComponent;
  let fixture: ComponentFixture<StavkaRacunaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StavkaRacunaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaRacunaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});