<template>
	<div
		class="input-field"
		:class="[
			type ? `input-field--${type}` : null,
			{ 'input-field--focus': focus }
		]"
	>
		<slot></slot>
		<div
			class="input-field__instructions"
			:aria-label="`${type}-instructions`"
			v-if="instructions"
		>
			{{ instructions }}
		</div>
	</div>
</template>
<script>
export default {
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
		}
	}
};
</script>
<style lang="scss" src="./Field.scss" />
