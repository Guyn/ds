<template>
	<div class="row" :class="gridClasses" :style="cssProps">
		<slot></slot>
	</div>
</template>

<script>
import Grid from "../grid.vue";
export default {
	extends: Grid,
	props: {
		gap: {
			type: [Number, String],
			default: 0
		}
	},
	computed: {
		cssProps() {
			return {
				"--gap": this.$props.gap + "em"
			};
		}
	}
};
</script>

<style lang="scss" src="./Row.scss" />
