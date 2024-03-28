export type Tag = {
	id?: string;
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
	collectives?: Collective;
};

type CollectiveExternalLink = {
	type: string;
	link: string;
};

type Collective = {
	tags: string[];
	external_links: CollectiveExternalLink[];
	description: string;
	link: string;
	name: string;
	slug: string;
};
