export interface TestimonialType {
	summary: string;
	fullName: string;
	jobTitle: string;
	profilePhoto: {
		data: {
			attributes: {
				alternativeText: string;
				caption: string;
				name: string;
				url: string;
			};
		};
	};
}
