import { Component } from '@angular/core';

import { Project } from '../interface/project';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.sass']
})
export class ProjectEntryComponent {
	project: Project = {
		title: 'Test Project',
		summary: 'Test Summary AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		role: 'Test Role AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		references: [
			{ text: 'Downloads', link: null },
			{ text: 'Google', link: 'https://www.google.com' },
			{ text: 'Youtube', link: 'https://www.youtube.com' },
		],
		media: null
	}
}
