import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

import { MediaItem, MediaType } from '../../interfaces/media-item';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';


@Component({
  selector: 'app-project-media-carousel',
  templateUrl: './project-media-carousel.component.html',
  styleUrls: ['./project-media-carousel.component.sass'],
})
export class ProjectMediaCarouselComponent {
	@Input() carouselId!: string;
	@Input() carouselItems!: MediaItem[];
	@ViewChildren('video') videos?: QueryList<ElementRef>;
	readonly MediaType = MediaType; // enables enum usage in html template

	// pauses videos on slide change
	slideChange(slideEvent: NgbSlideEvent) {
		// pause any videos that could be playing
		this.videos?.forEach(element => {
			element.nativeElement.pause();
		})
	}
}
