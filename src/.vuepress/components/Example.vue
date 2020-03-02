<template>
	<div class="example">
		<div class="example__title" v-if="title">{{ title }}</div>
		<slot></slot>
		<div class="example__code">
			<pre><slot></slot></pre>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: null
		}
	},
	mounted() {
		console.log(this.$slots.default[0]);
	}
};
</script>
<style lang="scss">
@import "base";
.example {
	padding: 2rem;
	// border: 1px solid $base-border-color;
	box-shadow: 0 0 1rem 0 rgba($base-border-color, 0.25);
	border-radius: $base-border-radius;
	position: relative;
	&__title {
		position: absolute;
		left: 0;
		top: 0;
		padding: 0.35em 0.85em;
		left: 0.5em;
		transform: translateY(-50%);
		border-radius: $base-border-radius;
		font-size: 14px;
		color: white;
		background-color: $base-primary-color;
	}
	& + .example {
		margin-top: 2rem;
	}
	&__code {
		position: absolute;
		left: calc(100% + 100vw / 24 + 1px);
		top: 0;
		width: 100%;
		padding: 2rem;
		background-color: $guyn-PlumDark;
		color: white;
	}
}
</style>
