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
	data: () => ({
		focus: false
	}),
	props: {
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
<style lang="scss">
.input-field {
	& + .input-field {
		margin-top: 1em;
	}
	&__group {
		display: inline-flex;
		.input-field + .input-field {
			margin-top: 0;
		}
		&--inline-space {
			flex-direction: row;
			flex-wrap: wrap;
			.input-field + .input-field {
				margin-left: 1em;
			}
		}
		&--stack-space {
			flex-direction: column;
			.input-field + .input-field {
				margin-top: 1em;
			}
		}
		&--inline {
			flex-direction: row;
			.input-field--radio + .input-field--radio,
			.input-field--check + .input-field--check {
				margin-left: 1em;
			}
		}
		&--stack {
			flex-direction: column;
			.input-field--radio + .input-field--radio,
			.input-field--check + .input-field--check {
				margin-top: 1em;
			}
		}
	}
	&__group-label {
		display: block;
		width: 100%;
		font-weight: bold;
		font-size: 12px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		opacity: 0.5;
		& + .input-field__group {
			margin-top: 1em;
		}
	}
}
</style>
