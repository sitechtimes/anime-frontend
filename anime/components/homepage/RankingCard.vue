<template>
	<div class="rankingCard">
		<div class="rc-rank">{{ rank }}</div>
		<div class="rc-info">
			<div class="rc-title">{{ title }}</div>
			<div class="rc-sub">
				<div class="rc-studio">{{ studio }}</div>
				<div class="rc-stars">
					<StarSVG />
					<p>{{ stars }}</p>
				</div>
			</div>
		</div>
		<div class="rc-img">
			<img :src="`${img}`" alt="" />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "RankingCard",
	components: {},
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
	background-color: #fff;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
	margin-bottom: 3rem;
    width: 70vw;
    height: 12rem;
}
.rc-rank {
	font-size: 1.5rem;
	font-weight: 600;
	color: #000;
}
.rc-info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.rc-title {
	font-size: 1.25rem;
	font-weight: 600;
	color: #000;
}
.rc-sub {
	display: flex;
	align-items: center;
	column-gap: 1rem;
}   
.rc-studio {
	font-size: 1rem;
	font-weight: 400;
	color: #000;
}
.rc-stars {
	display: flex;
	align-items: center;
	column-gap: 0.25rem;
}
.rc-img {
	width: 50%;
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
