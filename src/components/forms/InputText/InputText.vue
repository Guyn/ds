<template>
	<Field
		type="text"
		:instructions="instructions"
		:focus="focus"
		:fieldID="ID"
		:inline="inline",
		:small="small"
	>
		<div class="input-field__input">
			<input
				:id="ID"
				class="input-field__element"
				type="text"
				:placeholder="placeholder"
				@focus="focus = true"
				@blur="focus = false"
				:aria-describedby="`${ID}-instructions`"
				v-model="currentValue"
				@input="updateValue"
				:pattern="pattern"
			/>
			<div class="input-field__unit" v-if="unit">{{ unit }}</div>
		</div>

		<label v-if="label" class="input-field__label" :for="ID">
			{{ label }}
		</label>
	</Field>
</template>
<script>
import Field from "../Field";
import InputBase from "../InputBase";
import { DefaultProps, TextProps } from "../props";
export default {
	components: {
		Field
	},
	extends: InputBase,
	props: {
		...DefaultProps,
		...TextProps
	},
	watch: {
		currentValue: {
			handler() {
				if (this.$props.type == "number") {
					this.currentValue = parseInt(this.currentValue);
				}
			}
		}
	}
};
</script>

<style lang="scss" src="./InputText.scss" />
