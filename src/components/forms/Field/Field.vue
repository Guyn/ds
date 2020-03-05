<template>
	<div
		class="input-field"
		:class="[
			type ? `input-field--${type}` : null,
			{ 'input-field--focus': focus }
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
	data: ()=>({
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
		}, fieldId:{
			type: String,
			default: null
		}
	}
};
</script>
<style lang="scss" src="./Field.scss" />
