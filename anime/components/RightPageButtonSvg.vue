<template>
	<div>
		<div v-if="!pageExist">
			<svg
				width="2.5rem"
				height="2rem"
				viewBox="0 0 29 49"
				fill="var(--shaded-text)"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18.657 24.314.879 6.536a3 3 0 0 1 0-4.243L2.293.879a3 3 0 0 1 4.243 0l21.213 21.213c.612.612.904 1.423.877 2.225.026.8-.267 1.608-.877 2.219L6.535 47.749a3 3 0 0 1-4.242 0L.879 46.335a3 3 0 0 1 0-4.243l17.778-17.778Z"
				/>
			</svg>
		</div>
		<div v-if="pageExist">
			<svg
				id="rightPageButton"
				viewBox="0 0 29 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18.657 24.314.879 6.536a3 3 0 0 1 0-4.243L2.293.879a3 3 0 0 1 4.243 0l21.213 21.213c.612.612.904 1.423.877 2.225.026.8-.267 1.608-.877 2.219L6.535 47.749a3 3 0 0 1-4.242 0L.879 46.335a3 3 0 0 1 0-4.243l17.778-17.778Z"
				/>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "RightPageButton",
	props: {
		pageExist: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style scoped>
#rightPageButton {
	width: 2.5rem;
	height: 2rem;
}
#rightPageButton path {
	fill: var(--light-text);
}
#rightPageButton:hover > path {
	fill: var(--white);
	transition: 0.2s;
}
#rightPageButton:not(hover) > path {
	fill: var(--light-text);
	transition: 0.2s;
}

@media screen and (max-width: 1024px) {
	#rightPageButton, svg {
		height: 1.5rem;
	}
}
</style>
