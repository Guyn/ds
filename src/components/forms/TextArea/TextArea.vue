<template>
	<Field type="textarea" :instructions="instructions" :focus="focus">
		<textarea
			:id="ID"
			class="input-field__textarea"
			type="text"
			:placeholder="placeholder"
			@focus="focus = true"
			@blur="focus = false"
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

<style lang="scss" src="./TextArea.scss" />
