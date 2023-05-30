interface animeRest {
	aired_from: string;
	aired_to: string;
	anime_awards: [];
	anime_characters: [];
	anime_genre: { genre: string }[];
	anime_name: string;
	anime_studio: { studio: string }[];
	avg_rating: string;
	episodes: number;
	id: number;
	image_url: string;
	large_image_url: string;
	mal_id: number;
	media_type: string;
	num_rated: number;
	season: string;
	small_image_url: string;
	status: string;
	summary: string;
	trailer_url: string;
}

interface animeGraphql {
	malId: number;
	animeName: string;
	episodes: number;
	mediaType: string;
	status: string;
	summary: string;
	largeImageUrl: string;
	numRated: number;
	avgRating: number;
	airedTo: string;
	airedFrom: string;
	animeGenre: {
		genre: string;
	}[];
	animeStudio: {
		studio: string;
	}[];
	animeAwards: {
		awardName: string;
		date: string;
	}[];
}

export { animeRest, animeGraphql };
