import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../interfaces/project';


const projectList: Project[] = [
	{
		title: 'Lirica',
		summary: 'Lirica was an art centric MFA (Master of Fine Arts) thesis project built over nine months using Unreal Engine 4. This project had a large multidisciplinary team with upwards of 30 people at its largest and had core themes focusing on the integration of music into gameplay and visuals.',
		role: 'My primary roles on this team included the integration of animations and gameplay logic, as well as AI behaviors and interactions for all the creatures throughout the world of Lirica. This involved the creation of several custom animations and sequences for mechanics that responded to the player’s actions. However, as a tech lead for the project I was also involved in planning, organizing, and developing many of the low level systems within the game.',
		downloads: [
			{ text: 'Steam', link: 'https://store.steampowered.com/app/1733460/Lirica' },
			{ text: 'DigiPen Institute of Technology', link: 'https://games.digipen.edu/games/lirica' }
		]
	},
	{
		title: 'Ascent',
		summary: 'Ascent was a nine month project with a dual focus– first, to create a custom game engine from scratch using C++, then to develop a game using that engine. Our multidisciplinary team of ten settled on a 2D puzzle platformer that utilized transformation abilities to interact with the world.',
		role: 'My role for this project began with developing the engine’s editor, a tool that our artists and designers could use to build the game and world without having to directly interact with the codebase. However, as we pivoted from developing the engine to focusing on the game itself, my role became much more versatile. I developed most of the game\'s base mechanics, rebuilt the player behavior and controls, and even improved many low level engine systems including physics, collision, and asset loading.',
		downloads: [
			{ text: 'DigiPen Institute of Technology', link: 'https://games.digipen.edu/games/ascent' }
		]
	},
	{
		title: 'TD Squared',
		summary: 'TD Squared was my capstone project at Oregon State University and a project concept I initially devised and proposed myself. I was able to recruit three other computer science majors for the nine month project, which was built entirely in Unreal Engine 4. The base concept was a unique combination of a top-down shooter and a tower defense, providing many different opportunities for expanding upon the mechanics of both genres as they mixed together.',
		role: 'For this project I acted as both the Technical Lead and the Project Manager for the team, handling meetings, documentation, and setting goals and milestones for the project as a whole. For the game itself I focused mainly on lower level systems and aspects that required a deeper knowledge of game development, as I was the only one on the team with previous game development experience. This included tasks like setting up collision channels, creating the player controller, and setting up the AI pathfinding system. I also focused heavily on creating base classes and building blocks that enabled us to rapidly create new abilities and towers without having to worry about how those new entities interacted with the existing game infrastructure.',
		references: [
			{
			description: 'During this project I also wrote a series of blog posts– one of which highlighted the randomized shop system and how I designed the shop’s tower selection process in order to reduce the complexity of creating new towers for the game. This post can be found here:',
			textLink: { text: 'Developing Randomness in our Game: Dynamic Scaling and Relative Probability', link: 'https://blogs.oregonstate.edu/iangaither/2021/11/19/developing-randomness-in-our-game-dynamic-scaling-and-relative-probability/'}
		}]
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
