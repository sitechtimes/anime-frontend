<template>
	<NuxtLink to="/animeInfo">
		<div @click="$emit('saveAnimeID')" class="box">
			<img class="image-placeholder" :src="`${imageUrl}`" alt="" />
			<div class="info-column">
				<h1 class="title">{{ animeName }}</h1>
				<div class="info-row">
					<div class="star-rating">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							class="star"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14.0946 1.60341C14.6868 -0.25269 17.3132 -0.252693 17.9054 1.60341L20.2772 9.03723C20.5418 9.86642 21.3122 10.4293 22.1826 10.4293H29.9343C31.8629 10.4293 32.6743 12.89 31.1239 14.0371L24.7903 18.7232C24.1021 19.2324 23.8143 20.1232 24.0745 20.9389L26.4789 28.4746C27.0689 30.3237 24.9442 31.8447 23.384 30.6903L17.1896 26.1072C16.4827 25.5842 15.5173 25.5842 14.8104 26.1072L8.61604 30.6903C7.0558 31.8447 4.93115 30.3237 5.5211 28.4746L7.92546 20.9389C8.1857 20.1232 7.89791 19.2324 7.20966 18.7232L0.87612 14.0371C-0.674271 12.89 0.137065 10.4293 2.06569 10.4293H9.81743C10.6878 10.4293 11.4582 9.86642 11.7228 9.03723L14.0946 1.60341Z"
								fill="#FFEB34"
							/>
						</svg>
					</div>
					<p>{{ episodes }}</p>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
export default {
	name: "SearchResultComp",
	props: {
		imageUrl: {
			type: String,
			required: true,
		},
		animeName: {
			type: String,
			required: true,
		},
		episodes: {
			required: true,
		},
	},
};
</script>

<style>
.box {
	background-color: rgb(68, 68, 68);
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	height: 10rem;
}
.box:nth-child(even) {
	background-color: rgb(39, 39, 39);
}
.image-placeholder {
	height: 90%;
	aspect-ratio: 3/4;
	object-fit: cover;
}
.info-column {
	margin-left: 1vw;
	width: 75%;
	display: flex;
	flex-direction: column;
	gap: 0.5vh;
}
.title {
	font-size: var(--h4);
	white-space: nowrap;
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
}
.info-row {
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: var(--h7);
	gap: 2rem;
}
.star-rating {
	display: flex;
	align-items: center;
}
.star {
	height: 1rem;
	width: 1rem;
	margin-right: 0.5rem;
}
</style>
