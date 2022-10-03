import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects$(): Observable<Project[]> {
    console.log('getProjects$');
    const url = `${environment.apiHost}projects/`;
    console.log('url', url);
    return this.http.get<Project[]>(url);
  }

  getProjectById$(projectId: string): Observable<Project> {
    return this.http.get<Project>(`${environment.apiHost}projects/${projectId}`);
  }

  postProject$(project: Project): Observable<Project> {
    project.id = this.createSlug(project.name);
    return this.http.post<Project>(`${environment.apiHost}projects/`, project);
  }

  putProject$(project: Project): Observable<Project> {
    return this.http.put<Project>(`${environment.apiHost}projects/${project.id}`, project);
  }

  deleteProject$(projectId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiHost}projects/${projectId}`);
  }
  private createSlug(name: string) {
    return name.toLowerCase().replace(/ /g, '_');
  }
}
