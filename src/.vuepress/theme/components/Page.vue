<template>
	<main class="page">
		<slot name="top" />

		<div class="page__split">
			<Content class="page__content theme-default-content" />
			<aside class="page__side"></aside>
		</div>
		<PageEdit />

		<PageNav v-bind="{ sidebarItems }" />

		<slot name="bottom" />
	</main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
	components: { PageEdit, PageNav },
	props: ["sidebarItems"]
};
</script>

<style lang="scss">
@import "base";
.page {
	&__split {
		display: grid;
		grid-template-columns: minmax(50%, 480px) auto;
		grid-template-areas: "content side";
	}
	&__content {
		grid-area: content;
	}
	&__side {
		grid-area: side;
		background-color: $base-dark-color;
	}
}
</style>
