<template>
	<Field ref="optionParent" type="options">
		<label v-if="label" class="input-field__group-label">{{ label }}</label>
		<div
			ref="optionGroup"
			class="input-field__group"
			:class="[
				groupType
					? `input-field__group--${groupType}`
					: 'input-field__group--inline'
			]"
		>
			<Option
				v-for="(option, idx) in options"
				:key="idx"
				:checked="option.value"
				:disabled="disabled"
				:read-only="readOnly"
				:name="ID"
				:type="optionType"
				:label="option.label"
			/>
		</div>
	</Field>
</template>

<script>
import InputBase from "../InputBase";
import { DefaultProps, GroupProps } from "../props";
import Option from "../Option";
export default {
	extends: InputBase,
	components: {
		Option
	},
	props: {
		...DefaultProps,
		...GroupProps
	},
	data: () => ({
		overruleGroupType: false
	}),
	computed: {
		groupType() {
			return this.overruleGroupType || this.$props.group;
		},
		optionType() {
			return this.$props.multi ? "checkbox" : "radio";
		}
	},
	mounted() {
		const elements = {
			parent: this.$refs.optionParent.$parent.$el.offsetWidth,
			group: this.$refs.optionGroup.offsetWidth
		};
		this.overruleGroupType = this.checkWidth(elements.parent, elements.group);
		if (this.$props.group == "inline" || this.$props.group == "inline-space") {
			window.addEventListener("resize", () => {
				this.overruleGroupType = false;
				setTimeout(() => {
					this.overruleGroupType = this.checkWidth(elements.parent, elements.group);
				}, 10);
			});
		}
	},
	methods: {
		checkWidth(parent, element) {
			if (parent < element) return "stack";
			else return false;
		}
	}
};
</script>

<style lang="scss" src="./OptionGroup.scss" />
