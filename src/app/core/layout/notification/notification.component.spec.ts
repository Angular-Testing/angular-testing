import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// @Pipe({
//   name: 'status',
// })
// class FakeSatusPipe implements PipeTransform {
//   transform(value: string): string {
//     return value;
//   }
//   constructor() {}
// }

// fdescribe('GIVEN the NotificationComponent', () => {
//   let component: NotificationComponent;
//   let fixture: ComponentFixture<NotificationComponent>;
//   describe('WHEN the store sends a notification', () => {
//     beforeEach(async () => {
//       await TestBed.configureTestingModule({
//         declarations: [NotificationComponent],
//       }).compileComponents();
//     });

//     beforeEach(() => {
//       fixture = TestBed.createComponent(NotificationComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
//     it('THEN should display the notification', () => {});
//     it('AND THEN should call the close method after 3 seconds', fakeAsync(() => {}));
//   });
// });
