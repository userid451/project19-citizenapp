import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitizenpassPage } from './citizenpass.page';

describe('CitizenpassPage', () => {
  let component: CitizenpassPage;
  let fixture: ComponentFixture<CitizenpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenpassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitizenpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
