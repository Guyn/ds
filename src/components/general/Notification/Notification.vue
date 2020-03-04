<template>
	<div class="notification" :class="`notification--${ding}`">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		ding: {
			type: String,
			default: "notification"
		}
	}
};
</script>

<style lang="scss" src="./Notification.scss" />
