import { Component } from '@angular/core';
import { TextLink } from 'src/app/interfaces/text-link';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.sass']
})
export class InfoHeaderComponent {
	projectRepoLink: TextLink = {
		text: 'GitHub',
		link: 'https://github.com/IanGaither/portfolio-site',
		externalLink: true
	}

	mailtoLink: TextLink = {
		text: 'mail@iangaither.com',
		link: 'mailto:mail@iangaither.com',
		externalLink: true
	}

	linkedinLink: TextLink = {
		text: 'in/iangaither',
		link: 'https://www.linkedin.com/in/iangaither/',
		externalLink: true
	}

	aboutMeContent: string = "As a developer I love tackling challenging problems and developing new and interesting ideas. My experience began with some basic Java GUI development, but has since branched out dramatically, ranging from game and game engine development, to web development, to even a bit of embedded work with microcontrollers. I have a passion for pushing what's possible and going beyond what’s expected, whether that be in creating game experiences or developing tools and infrastructure that are extensible and robust. Simply put– I like making cool things."
}
