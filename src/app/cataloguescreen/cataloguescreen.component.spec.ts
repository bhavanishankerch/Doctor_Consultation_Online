import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguescreenComponent } from './cataloguescreen.component';

describe('CataloguescreenComponent', () => {
  let component: CataloguescreenComponent;
  let fixture: ComponentFixture<CataloguescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataloguescreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataloguescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
