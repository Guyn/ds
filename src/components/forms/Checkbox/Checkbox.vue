<template>
	<Field type="check" :instructions="instructions" :focus="focus">
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
<style lang="scss" src="./Checkbox.scss" />
