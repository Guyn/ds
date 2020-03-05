<template>
	<div class="example">
		<div class="example__title" v-if="title">{{ title }}</div>
		<div class="example__content">
			<slot />
		</div>
		<div class="example__code" v-if="hasCode">
			<slot name="code"></slot>
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
	computed: {
		hasCode() {
			return this.$slots.code ? true : false;
		}
	},
	mounted() {
		// console.log(this.$slots.default[0]);
		console.log(this.$slots);
	}
};
</script>
<style lang="scss">
@import "base";
.example {
	box-shadow: 0 0 1rem 0 rgba($base-border-color, 0.25);
	border-radius: $base-border-radius;
	position: relative;
	display: block;
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
	&__content {
		padding: 2rem;
		position: relative;
		display: block;
	}
	&__code {
		// position: absolute;
		z-index: 1;
		overflow: hidden;
		width: 100%;
		background-color: $guyn-CloudLight;
		color: white;
		border-radius: 0 0 $base-border-radius $base-border-radius;
		opacity: 0.25;
		transition: all $base-transition;
		filter: grayscale(100%);
	}
	&:hover {
		.example__code {
			opacity: 1;
			filter: grayscale(0%);
		}
	}
	table {
		width: 100%;
		td,
		th {
			padding: 1em;
			text-align: left;
		}
	}
}
</style>
