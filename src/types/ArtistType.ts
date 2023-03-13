export interface ArtistType {
		id: number;
		attributes: {
			fullName: string;
			excerpt: string;
			slug: string;
			genre: string;
			featured: boolean;
			featuredImage: {
				data: {
					attributes: { name: string; alternativeText: string; caption: string; url: string };
				};
			};
		};
}
