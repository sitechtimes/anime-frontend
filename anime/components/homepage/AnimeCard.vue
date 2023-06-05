<template>
	<NuxtLink :to="`/anime/` + mal_id">
		<div class="card-container">
			<div class="card-cover">
				<img class="card-image" :src="`${imageUrl}`" alt="" format="webp" />
				<div class="card-info">
					<EpisodeSvg :episode="episode" />
					<p class="card-media">{{ mediaType }}</p>
				</div>
			</div>
			<p class="card-title">{{ animeName }}</p>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
export default {
	name: "AnimeCard",
	props: {
		imageUrl: {
			type: String,
			required: true,
		},
		episode: {
			required: true,
		},
		mediaType: {
			required: true,
		},
		animeName: {
			type: String,
			required: true,
		},
		mal_id: {
			type: Number,
		},
	},
	computed: {
		trimTitle() {
			if (this.animeName.length <= 28) {
				return this.animeName;
			}
			return this.animeName.slice(0, 28) + "...";
		},
	},
};
</script>

<style scoped>
.card-container {
	display: flex;
	flex-direction: column;
	transition: 300ms;
}
.card-container:hover > .card-cover {
	opacity: 50%;
}
.card-container:hover > .card-title {
	color: var(--primary);
}
.card-cover {
	display: flex;
	flex-direction: column;
}
.card-image {
	border-radius: 0.5rem 0.5rem 0 0;
	object-fit: cover;
	aspect-ratio: 225/350;
}
.card-info {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-secondary);
	padding: 0.2rem 0.6rem;
	border-radius: 0 0 0.5rem 0.5rem;
}
.card-title {
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-light);
	padding-top: 0.5rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.card-media {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
}

@media screen and (max-width: 1024px) {
	.card-title {
		font-size: var(--h6);
	}
}

@media screen and (max-width: 767px) {
	.card-media {
		font-size: var(--h8);
	}
	.card-title {
		font-size: var(--h7);
	}
}
</style>
