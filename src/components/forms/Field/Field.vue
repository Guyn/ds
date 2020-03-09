<template>
	<div
		class="input-field"
		:class="[
			type ? `input-field--${type}` : null,
			inline ? `input-field--inline` : null,
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
export default {
	data: () => ({
		touched: false
	}),
	props: {
		focus: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: null,
			required: true
		},
		instructions: {
			type: String,
			default: null
		},
		fieldId: {
			type: String,
			default: null
		},
		inline: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		focus: function(val) {
			if (this.$props.focus) this.touched = true;
		}
	}
};
</script>
<style lang="scss" src="./Field.scss" />
