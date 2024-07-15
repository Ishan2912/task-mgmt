import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskComponentComponent } from './delete-task-component.component';

describe('DeleteTaskComponentComponent', () => {
  let component: DeleteTaskComponentComponent;
  let fixture: ComponentFixture<DeleteTaskComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTaskComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
