export interface Project {
	title: string;
	summary: string;
	role: string;
	references: {text: string, link: string | null | undefined}[] | null;
	media: string | null;
};