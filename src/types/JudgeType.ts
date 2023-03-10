export interface JudgeType {
	id: string;
	attributes: {
		fullName: string;
		judgeBio: string;
		judgePhoto: {
			data: {
				attributes: { name: string; caption: string; alternativeText: string; url: string };
			};
		};
	};
}
