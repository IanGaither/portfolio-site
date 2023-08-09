import { Component, Input } from '@angular/core';

import { TextLink } from '../../interfaces/text-link';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass']
})
export class LinkComponent {
	@Input() textLink!: TextLink;
}
