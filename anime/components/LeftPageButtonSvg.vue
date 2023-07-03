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
					d="m10.213 24.557
			17.778 17.778a3 3 0 0 1 0 4.242l-1.414 1.415a3 3 0 0 1-4.243 0L1.121 26.778a2.992 2.992
			0 0 1-.877-2.224c-.026-.8.267-1.609.877-2.22L22.334 1.122a3 3 0 0 1 4.243 0l1.414
			1.415a3 3 0 0 1 0 4.242L10.213 24.557Z"
				/>
			</svg>
		</div>
		<div v-if="pageExist">
			<svg
				id="leftPageButton"
				viewBox="0 0 29 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="m10.213 24.557 17.778 17.778a3 3 0 0 1 0 4.242l-1.414 1.415a3 3 0 0 1-4.243 0L1.121 26.778a2.992 2.992 0 0 1-.877-2.224c-.026-.8.267-1.609.877-2.22L22.334 1.122a3 3 0 0 1 4.243 0l1.414 1.415a3 3 0 0 1 0 4.242L10.213 24.557Z"
				/>
			</svg>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "LeftPageButton",
	props: {
		pageExist: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style scoped>
#leftPageButton {
	width: 2.5rem;
	height: 2rem;
}
#leftPageButton path {
	fill: var(--light-text);
}
#leftPageButton:hover > path {
	fill: var(--white);
	transition: 0.2s;
}
#leftPageButton:not(hover) > path {
	fill: var(--light-text);
	transition: 0.2s;
}

@media screen and (max-width: 1024px) {
	#leftPageButton, svg {
		height: 1.5rem;
	}
}
</style>
