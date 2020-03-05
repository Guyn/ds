<template></template>
<script>
export default {
	computed: {
		gridClasses() {
			return ["kudt"];
		}
	},
	props: {
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
		}
	}
};
</script>
