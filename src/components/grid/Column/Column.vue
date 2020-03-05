<template>
	<div class="column" :class="gridClasses">
		<slot></slot>
	</div>
</template>

<script>
import Grid from "../grid.vue";
export default {
	extends: Grid
};
</script>

<style lang="scss" src="./Column.scss" />
