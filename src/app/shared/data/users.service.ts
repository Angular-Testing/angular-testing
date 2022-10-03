import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getTokenByCredentials$(credentials: { email: string; password: string }): Observable<string> {
    return this.http
      .post<{ accessToken: string }>(`${environment.apiHost}login`, credentials)
      .pipe(map(res => res.accessToken));
  }

  public getUserById$(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiHost}users/${userId}`);
  }
}
