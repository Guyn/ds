<template></template>
<script>
export default {
	computed: {
		gridClasses() {
			let classes = [];
			if (this.$props.size) classes.push(`small--${this.$props.size}`);
			if (this.$props.small) classes.push(`small--${this.$props.small}`);
			if (this.$props.medium) classes.push(`medium--${this.$props.medium}`);
			if (this.$props.large) classes.push(`large--${this.$props.large}`);
			if (this.$props.xlarge) classes.push(`large--${this.$props.xlarge}`);
			return classes;
		}
	},
	props: {
		size: {
			type: String,
			default: null
		},
		small: {
			type: String,
			default: null
		},
		medium: {
			type: String,
			default: null
		},
		large: {
			type: String,
			default: null
		},
		xlarge: {
			type: String,
			default: null
		}
	}
};
</script>
