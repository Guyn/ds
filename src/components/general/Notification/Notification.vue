<template>
	<div class="notification" role="alert" :class="`notification--${type}`">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: "notification"
		}
	}
};
</script>

<style lang="scss" src="./Notification.scss" />
