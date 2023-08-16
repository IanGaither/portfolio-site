import { TextLink } from "./text-link";
import { MediaItem } from "./media-item";


export interface Project {
	title: string;
	summary: string;
	role: string;
	downloads?: TextLink[];
	references?: {description: string, textLink: TextLink}[];
	media?: MediaItem[];
};