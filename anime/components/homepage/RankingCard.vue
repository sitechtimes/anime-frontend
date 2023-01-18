<template>
	<div class="rankingCard">
		<div class="rc-rank" :id="`rank${rank}`">{{ rank }}</div>
		<div class="rc-info">
			<div class="rc-title">{{ title }}</div>
			<div class="rc-sub">
				<div class="rc-studio">{{ studio }}</div>
				<div class="rc-stars">
					<starSVG />
					<p class="rc-stars-num">{{ stars }}</p>
				</div>
			</div>
		</div>
		<div class="rc-img">
			<img :src="`${img}`" alt="" />
		</div>
	</div>
</template>

<script lang="ts">
import starSVG from "@/components/starSVG.vue";

export default {
	name: "RankingCard",
	components: {
		starSVG
	},
	props: {
		rank: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		studio: {
			type: String,
			required: true,
		},
		stars: {
			type: Number,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
.rankingCard {
	display: flex;
	margin: auto;
	align-items: center;
	justify-content: space-between;
	background-color: var(--primary);
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
	margin-bottom: 3rem;
	width: 70vw;
	height: 14rem;
	padding-left: 1.5%;
}
.rc-rank {
	font-family: "LIBRARY 3 AM", sans-serif;
	color: var(--white);
	/* background-color: var(--secondary); */
	background-color: #87000B;
	height: 100%;
	width: 7rem;
	align-items: center;
	justify-content: center;
	display: flex;
	font-size: var(--h1);
	font-weight: var(--fw-med);
}
#rank1 {
	color: rgb(255, 183, 0);
}
#rank2 {
	color: rgb(0, 195, 255);
}
#rank3 {
	color: #04ff9f;
}
.rc-info {
	display: flex;
	flex-direction: column;
	height: 100%;
	flex-grow: 2;
	padding-left: 3rem;
	padding-top: 1rem;
}
.rc-title {
	font-size: var(--h3);
	color: var(--white);
	font-weight: var(--fw-med);
}
.rc-sub {
	display: flex;
	align-items: center;
	column-gap: 4rem;
	justify-content: space-between;
	width: 90%;
}
.rc-studio {
	font-size: var(--h5);
	font-weight: 400;
	color: var(--white);
}
.rc-stars {
	display: flex;
	align-items: center;
	column-gap: 0.25rem;
}
.rc-stars-num {
	font-size: var(--h5);
	font-weight: var(--fw-reg);
	color: var(--white);
}
.rc-img {
	width: 60%;
	height: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
}
.rc-img img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
