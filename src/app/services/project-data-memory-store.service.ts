import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../interface/project';


const projectList: Project[] = [
	{
		title: 'Test Project 1',
		summary: 'Test Summary AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		role: 'Test Role AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		references: [
			{ text: 'Downloads', link: null },
			{ text: 'Google', link: 'https://www.google.com' },
			{ text: 'Youtube', link: 'https://www.youtube.com' },
		],
		media: null
	},
	{
		title: 'Test Project 2',
		summary: 'Test Summary BBBBBBBBBBBBBBBBBBBBBBBBB',
		role: 'Test Role BBBBBBBBBBBBBBBBBBBBBBBBB',
		references: [
			{ text: 'Downloads', link: null },
			{ text: 'Stack Overflow', link: 'https://stackoverflow.com' },
		],
		media: null
	}
]


@Injectable({
	providedIn: 'root'
  })
export class ProjectDataMemoryStoreService implements InMemoryDbService {
  createDb() {
	//maps projectList to */projects api calls
	return {projects: projectList};
  }
}
