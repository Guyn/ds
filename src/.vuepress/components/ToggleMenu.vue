<template>
	<button class="toggle-menu" :class="{ 'toggle-menu--active': isActive }">
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
.toggle-menu {
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
			background-color: var(--base-color-primary);
		}
	}
	span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1.5rem;
		height: 2px;
		transform: translate(-50%, -50%);
		transition: transform $base-transition-bounce;
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
			background-color: currentColor;
			transition: transform $base-transition-bounce;
		}
		&::before {
			transform: translate(-50%, calc(-50% - 3px));
		}
		&::after {
			transform: translate(-50%, calc(-50% + 3px));
		}
	}
	&--active {
		span {
			transform: translate(-50%, -50%) rotate(90deg);
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
