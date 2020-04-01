import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfScreeningPage } from './self-screening.page';

describe('SelfScreeningPage', () => {
  let component: SelfScreeningPage;
  let fixture: ComponentFixture<SelfScreeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfScreeningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfScreeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
