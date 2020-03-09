<template></template>
<script>
export default {
	data: () => ({
		focus: false,
		ID: null
	}),
	created() {
		this.ID = this.createID();
		if (this.$props && this.$props.value) this.currentValue = this.$props.value;
	},
	methods: {
		createID(prefix = null) {
			return (
				`${prefix && typeof prefix == "string" ? prefix : ""}_` +
				Math.random()
					.toString(36)
					.substr(2, 9)
			);
		},
		updateValue() {
			this.$emit("input", this.currentValue);
		}
	}
};
</script>

<style lang="scss" src="./InputBase.scss" />
