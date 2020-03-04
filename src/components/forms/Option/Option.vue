<template>
	<Field type="option" :instructions="instructions" :focus="focus">
		<input
			:id="ID"
			:type="type"
			:checked="checked"
			:disabled="disabled"
			:read-only="readOnly"
			:name="name"
		/>
		<label :for="ID">
			<span class="input-field__text" v-html="label" />
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

<style lang="scss" src="./Option.scss" />
