export enum MediaType {
	Video,
	Image
}

export interface TextLink {
	text: string;
	link: string;
}

export interface Project {
	title: string;
	summary: string;
	role: string;
	downloads?: TextLink[];
	references?: {description: string, textLink: TextLink}[];
	media?: {filename: string, type: MediaType}[];
};