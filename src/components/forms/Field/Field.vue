<template>
	<div
		class="input-field"
		:class="[
			type ? `input-field--${type}` : null,
			{ 'input-field--inline': inline },
			{ 'input-field--small': small },
			{ 'input-field--focus': focus },
			{ 'input-field--touched': touched }
		]"
	>
		<div
			class="input-field__instructions"
			:aria-label="`${fieldId}-instructions`"
			v-if="instructions"
		>
			{{ instructions }}
		</div>
		<slot></slot>
	</div>
</template>
<script>
import { FieldProps } from "../props";
export default {
	data: () => ({
		touched: false
	}),
	props: {
		...FieldProps
	},

	watch: {
		focus: function(val) {
			if (this.$props.focus) this.touched = true;
		}
	}
};
</script>
<style lang="scss" src="./Field.scss" />
