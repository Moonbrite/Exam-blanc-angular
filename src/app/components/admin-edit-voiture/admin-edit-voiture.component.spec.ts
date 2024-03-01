import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditVoitureComponent } from './admin-edit-voiture.component';

describe('AdminEditVoitureComponent', () => {
  let component: AdminEditVoitureComponent;
  let fixture: ComponentFixture<AdminEditVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditVoitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
