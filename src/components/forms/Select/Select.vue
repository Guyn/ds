<template>
	<Field type="select" :instructions="instructions" :focus="focus">
		<div class="input-field__select" :class="{ 'input-field--focus': focus }">
			<select
				:id="ID"
				:disabled="disabled"
				:read-only="readOnly"
				:name="name"
				@focus="focus = true"
				@blur="focus = false"
			>
				<option
					v-for="(option, idx) in options"
					:key="idx"
					:value="option.value ? option.value : option"
				>
					{{ option.label ? option.label : option }}
				</option>
				<option>Test</option>
			</select>
		</div>
		<label class="input-field__label" :for="ID">
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
		...DefaultProps,
		options: {
			type: [Array, Object],
			default: () => []
		}
	}
};
</script>

<style lang="scss" src="./Select.scss" />
