import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RestablecercontrasenaPage } from './restablecercontrasena.page';

describe('RestablecercontrasenaPage', () => {
  let component: RestablecercontrasenaPage;
  let fixture: ComponentFixture<RestablecercontrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablecercontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
