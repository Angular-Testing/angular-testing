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
