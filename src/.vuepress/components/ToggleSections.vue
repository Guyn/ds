<template>
	<button class="sections-menu" :class="{ 'toggle-menu--active': isActive }">
		<span></span>
	</button>
</template>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isActive() {
			return this.$props.active;
		}
	}
};
</script>

<style lang="scss">
@import "../theme/styles/index.scss";
.sections-menu {
	width: 3rem;
	height: 3rem;
	position: relative;
	-webkit-appearance: none;
	background: transparent;
	border: none;
	color: white;
	&:focus {
		outline: none;
		span::before,
		span::after {
			color: var(--base-color-primary);
		}
	}
	span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1.25rem;
		height: 3px;
		transform: translate(-50%, -50%);
		background-image: linear-gradient(to bottom, currentColor, currentColor),
			linear-gradient(to bottom, currentColor, currentColor),
			linear-gradient(to bottom, currentColor, currentColor),
			linear-gradient(to bottom, currentColor, currentColor),
			linear-gradient(to bottom, currentColor, currentColor);
		background-size: 3px 3px, 3px 3px, 3px 3px;
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		background-position: 0 0, 50% 0, 100% 0, calc(100%) 0;

		&::before,
		&::after {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			background: inherit;
			transition: transform $base-transition-bounce;
		}
		&::before {
			transform: translate(-50%, calc(-50% - 8px));
		}
		&::after {
			transform: translate(-50%, calc(-50% + 8px));
		}
	}
	&--active {
		span {
			&::before {
				transform: translate(-50%, calc(-50%)) rotate(-45deg);
			}
			&::after {
				transform: translate(-50%, calc(-50%)) rotate(45deg);
			}
		}
	}
}
</style>
