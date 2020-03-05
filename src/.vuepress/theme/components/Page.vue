<template>
	<main class="page">
		<slot name="top" />

		<div class="page__split">
			<main class="page__main">
				<Content class="page__content theme-default-content" />
			</main>
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
		// grid-template-columns: minmax(50%, 480px) auto;
		grid-template-columns: minmax(100%, 320px) auto;
		grid-template-areas: "main side";
	}
	&__main {
		grid-area: main;
	}
	&__side {
		display: none;
		grid-area: side;
		background-color: $base-dark-color;
	}
	&__content {
		max-width: 720px;
		margin: auto;
	}
}
</style>
