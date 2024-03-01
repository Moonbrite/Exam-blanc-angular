import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoitureComponent } from './admin-voiture.component';

describe('AdminVoitureComponent', () => {
  let component: AdminVoitureComponent;
  let fixture: ComponentFixture<AdminVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVoitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
