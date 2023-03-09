export interface PartnerType {
	id: string;
	attributes: {
		description: string;
		name: string;
		logo: {
			data: {
				attributes: {
					alternativeText: string;
					caption: string;
					name: string;
					url: string;
				};
			};
		};
	};
}
