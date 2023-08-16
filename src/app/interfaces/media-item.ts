export enum MediaType {
	Video,
	Image
}

export interface MediaItem {
	sourceFilename: string;
	mediaType: MediaType;
}