import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spyHomeService: HomeService;
  beforeEach(async () => {
    spyHomeService = jasmine.createSpyObj<HomeService>('HomeService', {
      loadProjectViews: undefined,
      deleteProject: undefined,
    });
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: HomeService, useValue: spyHomeService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call "loadProjectViews" on init', () => {
    expect(spyHomeService.loadProjectViews).toHaveBeenCalled();
  });
  it('should call "deleteProject" on delete', () => {
    const input = '1';
    component.onDelete(input);
    const expected = '1';
    expect(spyHomeService.deleteProject).toHaveBeenCalledWith(expected);
  });
});

function findNativeEl<T>(fixture: ComponentFixture<T>, selector: string): HTMLElement | null {
  const nativeElement = fixture.nativeElement.querySelector(selector);
  return nativeElement;
}
function getTextContent<T>(fixture: ComponentFixture<T>, selector: string): string | null {
  const nativeElement = findNativeEl(fixture, selector);
  return nativeElement ? nativeElement.textContent : null;
}

fdescribe('GIVEN the Home component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: HomeService, useValue: { loadProjectViews: () => {} } }],
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  describe('WHEN starts', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('SHOULD display the title ?', () => {});
    it('SHOULD pass the title to the page component', () => {});
    it('SHOULD include the ab-loading component', () => {});
    it('SHOULD not include the ab-error component', () => {});
    it('SHOULD not include the ab-projects component', () => {});
  });
});
