import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddVoitureComponent } from './admin-add-voiture.component';

describe('AdminAddVoitureComponent', () => {
  let component: AdminAddVoitureComponent;
  let fixture: ComponentFixture<AdminAddVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddVoitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
