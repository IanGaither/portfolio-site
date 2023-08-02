import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
	private projectUrl = 'api/projects';

  	constructor(private http: HttpClient) { }

	
	getProjects(): Observable<Project[]> {
		return this.http.get<Project[]>(this.projectUrl);
	}
}
