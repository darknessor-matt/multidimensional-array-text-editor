import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSidebarComponent } from './popup-sidebar.component';

describe('PopupSidebarComponent', () => {
  let component: PopupSidebarComponent;
  let fixture: ComponentFixture<PopupSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
