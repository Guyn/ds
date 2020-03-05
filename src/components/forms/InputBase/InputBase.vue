<template></template>
<script>
export default {
	data: () => ({
		focus: false,
		ID: null
	}),
	created() {
		this.ID = this.createID();
	},
	methods: {
		createID(prefix = null) {
			return (
				`${prefix && typeof prefix == "string" ? prefix : ""}_` +
				Math.random()
					.toString(36)
					.substr(2, 9)
			);
		}
	}
};
</script>

<style lang="scss" src="./InputBase.scss" />
