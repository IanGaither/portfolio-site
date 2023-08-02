import { Component } from '@angular/core';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass']
})
export class ProjectListComponent {
	projects: Project[] = [];

	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.projectsService.getProjects().subscribe(projectEntries => this.projects = projectEntries);
	}
}
