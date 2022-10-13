import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

fdescribe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

fdescribe('GIVEN the UsersService isolated from remote server', () => {
  let service: UsersService;
  let controller: HttpTestingController;
  let testRequest: TestRequest;
  const remoteUrl = 'http://localhost:3000/';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    controller = TestBed.inject(HttpTestingController);
  });

  describe('WHEN getTokenByCredentials$ is called', () => {
    const input: { email: string; password: string } = { email: '', password: '' };
    beforeEach(() => {
      service.getTokenByCredentials$(input).subscribe();
    });
    it('THEN should send the credentials as payload', () => {
      const expectedUrl = `${remoteUrl}login`;
      const requestMock = controller.expectOne(expectedUrl);
      expect(requestMock.request.body).toBe(input);
    });
  });

  describe('WHEN getUserById$ is called and server returns errors', () => {
    const input = 'not_found';
    let actual: HttpErrorResponse | unknown;
    beforeEach(() => {
      service.getUserById$(input).subscribe({
        next: data => {
          actual = undefined;
        },
        error: err => {
          actual = err;
        },
      });
      const expectedUrl = `${remoteUrl}users/not_found`;
      testRequest = controller.expectOne(expectedUrl);
      testRequest.flush('User not found', { status: 404, statusText: 'Not Found' });
    });
    it('THEN should receive the error, not data', () => {
      expect(actual).toBeDefined();
    });
  });

  afterEach(() => {
    controller.verify();
  });
});
