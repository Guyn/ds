<template>
	<Field type="select" :instructions="instructions">
		<div class="input-field__select" :class="{ 'input-field--focus': focus }">
			<select
				:id="ID"
				:disabled="disabled"
				:read-only="readOnly"
				:name="name"
				@focus="focus = true"
				@blur="focus = false"
			>
				<option
					v-for="(option, idx) in options"
					:key="idx"
					:value="option.value ? option.value : option"
				>
					{{ option.label ? option.label : option }}
				</option>
				<option>Test</option>
			</select>
		</div>
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
		...DefaultProps,
		options: {
			type: [Array, Object],
			default: () => []
		}
	}
};
</script>

<style lang="scss">
@import "base";
.input-field--select {
}
.input-field {
	&__select {
		border-radius: $base-form-border-radius;
		border: $base-form-border;
		padding: 0.5em;
		select {
			border: none;
			width: 100%;
			height: 100%;

			padding: 0.5em;
			line-height: 1;
			font-size: 1em;
			-webkit-appearance: none;
			border-radius: $base-form-border-radius;
			&:focus {
				outline: none;
				box-shadow: 0 0 0 3px $base-form-highlight;
			}
		}
	}
}
</style>
