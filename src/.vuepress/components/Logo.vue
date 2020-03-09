<template>
	<svg
		ref="logo"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		viewBox="0 0 45.6 99.87"
		style="enable-background:new 0 0 45.6 99.87;"
		xml:space="preserve"
	>
		<path
			d="M37.05,23.82c-3.49-2.6-8.17-3.91-14.03-3.93v0h-0.45v0c-5.86,0.02-10.53,1.33-14.03,3.93c-3.89,3-5.83,7.34-5.83,13.04
	c0,5.83,2.39,9.62,6.73,12.76c3.59,2.62,8.04,3.93,13.35,3.93s9.76-1.31,13.35-3.93c4.34-3.14,6.73-6.93,6.73-12.76
	C42.88,31.17,40.94,26.82,37.05,23.82z M22.8,51.75c-4.41,0-6.58-4.88-6.51-14.64c0-10.51,2.09-15.73,6.28-15.65h0.45
	c4.19-0.07,6.28,5.14,6.28,15.65C29.38,46.87,27.21,51.75,22.8,51.75z"
		/>
		<path
			d="M43.75,1.57C42.51,0.52,41.11,0,39.54,0c-1.42,0-2.66,0.58-3.7,1.73c-1.05,1.15-1.57,2.51-1.57,4.07
		c0,0.82,0.34,1.8,1.01,2.95s0.98,1.98,0.99,2.75c0.02,3.79-5.04,4.91-7.38,5.22c-0.2,0.03-0.19,0.31,0,0.34
		c5.55,0.95,8.79-0.39,11.66-2.36c3.37-2.32,5.05-5.12,5.05-8.42C45.6,4.19,44.98,2.62,43.75,1.57z"
		/>

		<path
			d="M5.48,79.68c1.23-1.05,2.64-1.57,4.21-1.57c1.42,0,2.66,0.58,3.7,1.73c1.05,1.15,1.57,2.51,1.57,4.07
		c0,0.82-0.34,1.8-1.01,2.95s-0.98,1.98-0.99,2.75c-0.02,3.79,5.04,4.91,7.38,5.22c0.2,0.03,0.19,0.31,0,0.34
		c-5.55,0.95-8.79-0.39-11.66-2.36c-3.37-2.32-5.05-5.12-5.05-8.42C3.63,82.3,4.24,80.73,5.48,79.68z"
		/>
		<path
			d="M37.95,71.88c-1.95-1.42-5.89-3.07-11.84-4.94c-5.95-1.87-9.97-3.29-12.06-4.26c-3.74-1.72-5.61-3.48-5.61-5.27
	c0-1.35,0.55-2.47,1.65-3.35c0.23-0.19,0.04-0.56-0.25-0.49c-6.47,1.63-8.92,6.63-8.92,10.53c0,4.42,1.91,7.72,5.72,9.89
	c1.12,0.67,4.71,1.98,10.77,3.93c4.64,1.5,7.89,2.88,9.76,4.16c2.84,1.87,4.26,4.31,4.26,7.3c0,3.15-1.53,5.58-4.6,7.3
	c-2.41,1.31-5.38,2.01-8.92,2.12c-0.16,0-0.19,0.23-0.04,0.27c6.87,1.82,12.23,0.3,16.81-2.28c5.46-3.22,8.19-7.82,8.19-13.8
	C42.88,78.05,41.24,74.35,37.95,71.88z"
		/>
	</svg>
</template>

<script>
export default {
	data() {
		return {
			offTop: 0
		};
	},
	mounted() {
		const _this = this;
		_this.setTop();
		window.addEventListener("scroll", () => {
			_this.setTop();
		});
	},
	methods: {
		setTop() {
			const _this = this;
			_this.offTop = window.scrollY;
			_this.$refs.logo.style.setProperty("--scroll-top", this.offTop);
		}
	}
};
</script>

<style lang="scss">
@import "base";
svg {
	overflow: visible;
	width: 5rem;
	height: 5rem;
	path {
		transform-origin: center;
		transform-box: fill-box;
		mix-blend-mode: multiply;

		&:nth-child(1) {
			fill: var(--base-color-primary);
			transform: translateY(calc(var(--scroll-top) * -0.1px))
				scale(calc(var(--scroll-top) * 0.01 + 1));
		}
		&:nth-child(2) {
			fill: var(--base-color-secondary);
			transform: translateY(calc(var(--scroll-top) * -0.2px))
				scale(calc(var(--scroll-top) * 0.015 + 1));
		}
		&:nth-child(3) {
			fill: var(--base-color-tertiary);
			transform: translateY(calc(var(--scroll-top) * -0.3px))
				scale(calc(var(--scroll-top) * 0.02 + 1));
		}
		&:nth-child(4) {
			fill: #{setLightness(--base-color-primary, 80)};
			transform: translateY(calc(var(--scroll-top) * -0.6px))
				scale(calc(var(--scroll-top) * 0.025 + 1));
		}
	}
}
</style>
