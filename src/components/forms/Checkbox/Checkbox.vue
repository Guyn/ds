<template>
	<Field type="check">
		<input
			:id="ID"
			type="checkbox"
			:checked="checked"
			:disabled="disabled"
			:read-only="readOnly"
			@focus="focus = true"
			@blur="focus = false"
		/>
		<label :for="ID">
			<span class="input-field__text" v-html="label"></span>
			<slot></slot>
		</label>
	</Field>
</template>

<script>
import Field from "../Field";
import InputBase from "../InputBase";
import { DefaultProps } from "../props";
export default {
	components: {
		Field
	},
	extends: InputBase,
	props: {
		...DefaultProps
	}
};
</script>
<style lang="scss">
@import "base";
.input-field {
	&--check {
		label {
			position: relative;
			display: block;
			padding-left: 1.5em;
		}
		input {
			position: absolute;
			clip-path: inset(100% 100% 100% 100%);
			opacity: 0;
		}
		input + label {
			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 0;
				display: block;
				width: 1em;
				height: 1em;
				box-shadow: 0 0 0 1px currentColor inset;
				border-radius: 3px;
				transform: translateY(-50%);
			}
			&::after {
				content: "";
				position: absolute;
				top: 50%;
				left: 0.25em;
				display: block;
				width: 0.5em;
				height: 0.5em;
				border-radius: 2px;
				background-color: var(
					--checkbox-check-color,
					var(--checkbox-check-default, #{$base-primary-color})
				);
				transform: translateY(-50%) scale(0);
				transition: transform $base-transition-bounce;
			}
		}
		input:checked + label {
			&::after {
				transform: translateY(-50%) scale(1);
			}
		}
		input:focus + label {
			&::before {
				box-shadow: 0 0 0 1px currentColor inset, 0 0 0 2px $base-form-highlight;
			}
		}
	}
}
</style>
