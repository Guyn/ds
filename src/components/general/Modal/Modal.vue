<template>
	<div class="modal" :class="{ 'modal--open': isOpen }">
		<div class="modal__background" @click="isOpen = false" />
		<div class="modal__container">
			<div class="modal__content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		isOpen: false
	}),
	props: {
		open: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		open: function() {
			this.isOpen = this.$props.open;
		}
	}
};
</script>

<style lang="scss" src="./Modal.scss" />
