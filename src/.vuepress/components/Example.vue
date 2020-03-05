<template>
	<div class="example">
		<div class="example__title" v-if="title">{{ title }}</div>
		<slot />
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
		console.log(this.$slots.default);
	}
};
</script>
<style lang="scss">
@import "base";
.example {
	padding: 2rem;
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
	table{
		width: 100%;
		td,th{
			padding: 1em;
			text-align: left;
		}
	}
}
</style>
