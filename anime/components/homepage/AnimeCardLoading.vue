<template>
	<div class="cardLoad-container">
		<div class="cardLoad-cover">
			<div class="cardLoad-image skeleton"></div>
			<div class="cardLoad-bar skeleton">
				<div id="episode-box">
					<p id="episode-text">100</p>
					<svg
						id="episode-svg"
						width="1rem"
						height="2rem"
						viewBox="0 0 10 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0h8.5a1.5 1.5 90 0 1 1.4 1.9L5 19a1.5 1.5 90 0 1-1.5 1H.1Z" />
					</svg>
				</div>
				<p class="cardLoad-media skeletonText"></p>
			</div>
		</div>
		<h5 class="cardLoad-title skeletonText"></h5>
	</div>
</template>

<style scoped>
.cardLoad-container {
	display: flex;
	flex-direction: column;
	width: 11vw;
}
.cardLoad-cover {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
}
.cardLoad-cover:not(hover) > img {
	opacity: 100%;
	transition: 0.3s;
}
.cardLoad-cover:hover > img {
	opacity: 25%;
	transition: 0.3s;
}
.cardLoad-image {
	width: 100%;
	object-fit: cover;
	aspect-ratio: 225/350;
	background-color: var(--tertiary);
	border-radius: 0.5rem 0.5rem 0 0;
}
.cardLoad-bar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-secondary);
	padding: 0.2rem;
	padding-left: 0.6rem;
	padding-right: 0.75rem;
	border-radius: 0 0 0.5rem 0.5rem;
}
.cardLoad-title {
	width: 100%;
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-light);
	padding-top: 0.5rem;
	background-color: var(--light-text);
	margin-top: 1.5rem;
	height: 1rem;
	border-radius: 0.3rem;
	width: 60%;
	margin-bottom: 4rem;
}
.cardLoad-media {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
	background-color: var(--light-text);
	height: 1rem;
	width: 2.5rem;
	border-radius: 0.3rem;
}
#episode-box {
	display: flex;
	flex-direction: row;
	align-items: center;
}
#episode-text {
	line-height: 2rem;
	color: var(--secondary);
	font-size: var(--h7);
	font-weight: var(--fw-reg);
	background-color: var(--secondary);
	padding-left: 0.6rem;
	border-radius: 0.2rem 0 0 0.2rem;
}
#episode-svg {
	font-size: var(--h7);
	font-weight: var(--fw-med);
	fill: var(--white);
}
#episode-svg path {
	fill: var(--secondary);
}
.skeleton {
	background-size: 400%;
	background-image: linear-gradient(90deg, var(--bg-secondary), var(--bg-primary));
	animation: skeleton 2s infinite ease alternate;
}
.skeletonText {
	background-size: 400%;
	background-image: linear-gradient(90deg, var(--shaded-text), var(--dark-text));
	animation: skeletonText 3s infinite ease alternate;
}
@keyframes skeleton {
	0% {
		background-position: 0%;
	}
	50% {
		background-position: 100%;
	}
	100% {
		background-position: 0%;
	}
}

@keyframes skeletonText {
	0% {
		background-position: 0%;
	}
	50% {
		background-position: 100%;
	}
	100% {
		background-position: 0%;
	}
}
</style>
