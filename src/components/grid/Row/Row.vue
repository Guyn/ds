<template>
	<div class="row" :class="gridClasses">
		<slots></slots>
	</div>
</template>

<script>
import Grid from "../grid.vue";
export default {
	extends: Grid
};
</script>

<style lang="scss" src="./Row.scss" />
