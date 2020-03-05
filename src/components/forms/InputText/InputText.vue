<template>
	<Field type="text" :instructions="instructions" :focus="focus" :fieldID="Id">
		<input
			:id="ID"
			class="input-field__input"
			type="text"
			:placeholder="placeholder"
			@focus="focus = true"
			@blur="focus = false"
			:aria-describedby="`${ID}-instructions`"
		/>
		<label v-if="label" class="input-field__label" :for="ID">{{ label }}</label>
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
	}
};
</script>

<style lang="scss" src="./InputText.scss" />
