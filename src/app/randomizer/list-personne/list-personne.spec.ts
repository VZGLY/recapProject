import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonne } from './list-personne';

describe('ListPersonne', () => {
  let component: ListPersonne;
  let fixture: ComponentFixture<ListPersonne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPersonne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersonne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
