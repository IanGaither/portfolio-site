import { Component, Input } from '@angular/core';

import { Project } from '../../interfaces/project';


@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.sass']
})
export class ProjectEntryComponent {
	@Input() project!: Project;
}
