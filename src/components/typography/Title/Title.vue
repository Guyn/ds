<template>
	<component
		:is="as"
		:class="[`title--${asLike}`, `color--${color.toLowerCase()}`]"
	>
		<span class="title__icon" v-if="icon">
			<Icon :name="icon"></Icon>
		</span>
		<slot></slot>
	</component>
</template>

<script>
import Icon from "../../icons/Icon";
export default {
	props: {
		as: {
			type: String,
			default: "h1"
		},
		like: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: `current`
		},
		icon: {
			type: String,
			default: null
		}
	},
	computed: {
		asLike() {
			if (this.$props.like !== null) return this.$props.like;
			else return this.$props.as;
		}
	}
};
</script>

<style lang="scss">
@import "base";

.text {
	border: 1px solid red;
}
.title {
	@each $color-name, $color-value in $colors {
		&--#{to-lower-case($color-name)} {
			color: $color-value;
		}
	}
}
.color--current {
	color: currentColor;
}
</style>
