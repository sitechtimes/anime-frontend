<template>
	<div class="charts-container">
		<div class="charts-rank">{{ rank }}</div>
		<img class="charts-img" :src="`${img}`" alt="" />
		<div class="charts-info">
			<h3 class="charts-title">{{ title }}</h3>
			<div class="charts-details">
				<div class="chartsEpBox">
					<div id="ep" v-if="episode">{{ episode }}</div>
					<div id="ep" v-if="!episode">N/A</div>
					<EpisodeSVG />
				</div>
				<h4 class="charts-votes">{{ votes }}</h4>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import EpisodeSVG from "../episodeSvg.vue";

export default {
	name: "EpisodeCard",
	components: {
		EpisodeSVG,
	},
	props: {
		rank: {
			type: Number,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		episode: {
			type: Number,
			required: true,
		},
		votes: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.chartsEpBox {
	display: flex;
	flex-direction: row;
	align-items: center;
}
#ep {
	line-height: 2rem;
	color: var(--off-white);
	font-size: var(--h7);
	font-weight: var(--fw-reg);
	background-color: var(--secondary);
	padding-left: 0.6rem;
	border-radius: 0.2rem 0 0 0.2rem;
}
.charts-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 9rem;
	background-color: var(--tertiary);
	margin-top: 1rem;
	border-radius: 0.75rem;
}
.charts-rank {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5.5rem;
	height: 100%;
	background-color: var(--secondary);
	color: var(--white);
	font-size: var(--h2);
	font-weight: var(--fw-reg);
	border-radius: 0.75rem 0 0 0.75rem;
}
.charts-img {
	height: 100%;
}
.charts-info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 55%;
	padding-left: 1rem;
}
.charts-title {
	display: block;
	white-space: nowrap;
	width: 100%;
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-reg);
	text-overflow: ellipsis;
	overflow: hidden;
}
.charts-details {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
}
.charts-ep {
	color: var(--white);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
	padding: 0.5rem;
}
.charts-votes {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
	padding-left: 1rem;
}
</style>
