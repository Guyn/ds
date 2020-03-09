<template>
	<div
		class="layout layout--default"
		:class="pageClasses"
		@touchstart="onTouchStart"
		@touchend="onTouchEnd"
	>
		<!-- <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" /> -->
		<div class="sidebar__toggle" @click="toggleSidebar(false)" />

		<div class="layout__left">
			<Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
				<template #top>
					<slot name="sidebar-top" />
				</template>

				<template #bottom>
					<slot name="sidebar-bottom" />
				</template>
			</Sidebar>
		</div>

		<Home class="page" v-if="$page.frontmatter.home" />

		<Page class="page" v-else :sidebar-items="sidebarItems">
			<template #top>
				<slot name="page-top" />
			</template>
			<template #bottom>
				<slot name="page-bottom" />
			</template>
		</Page>
		<Settings></Settings>
		<style>
			{{ customStyle }}
		</style>
	</div>
</template>

<script>
import Home from "@theme/components/Home.vue";
// import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";

export default {
	name: "Layout",

	components: {
		Home,
		Page,
		Sidebar
		// Navbar
	},

	data() {
		return {
			currentValue: "test",
			isSidebarOpen: false
		};
	},

	computed: {
		customStyle() {
			return this.$store.getters["getStyle"];
		},
		shouldShowNavbar() {
			const { themeConfig } = this.$site;
			const { frontmatter } = this.$page;
			if (frontmatter.navbar === false || themeConfig.navbar === false) {
				return false;
			}
			return (
				this.$title ||
				themeConfig.logo ||
				themeConfig.repo ||
				themeConfig.nav ||
				this.$themeLocaleConfig.nav
			);
		},

		shouldShowSidebar() {
			const { frontmatter } = this.$page;
			return (
				!frontmatter.home &&
				frontmatter.sidebar !== false &&
				this.sidebarItems.length
			);
		},

		sidebarItems() {
			return resolveSidebarItems(
				this.$page,
				this.$page.regularPath,
				this.$site,
				this.$localePath
			);
		},

		pageClasses() {
			const userPageClass = this.$page.frontmatter.pageClass;
			return [
				{
					"no-navbar": !this.shouldShowNavbar,
					"sidebar-open": this.isSidebarOpen,
					"no-sidebar": !this.shouldShowSidebar
				},
				userPageClass
			];
		}
	},

	mounted() {
		this.$router.afterEach(() => {
			this.isSidebarOpen = false;
		});
	},

	methods: {
		toggleSidebar(to) {
			this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
			this.$emit("toggle-sidebar", this.isSidebarOpen);
		},

		// side swipe
		onTouchStart(e) {
			this.touchStart = {
				x: e.changedTouches[0].clientX,
				y: e.changedTouches[0].clientY
			};
		},

		onTouchEnd(e) {
			const dx = e.changedTouches[0].clientX - this.touchStart.x;
			const dy = e.changedTouches[0].clientY - this.touchStart.y;
			if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
				if (dx > 0 && this.touchStart.x <= 80) {
					this.toggleSidebar(true);
				} else {
					this.toggleSidebar(false);
				}
			}
		}
	}
};
</script>
<style lang="scss">
@import "../styles/index.scss";

.layout--default {
	display: grid;
	grid-template-columns: minmax(15rem, 25%) auto;
	grid-template-rows: auto;
	grid-template-areas:
		"header header"
		"sidebar page"
		"footer footer";
	min-height: 100vh;

	.layout__left {
		min-height: 100vh;
		grid-area: sidebar;
		display: flex;
		justify-content: flex-end;
		aside {
			width: 15rem;
		}
	}
	.page {
		min-height: 100vh;
		grid-area: page;
	}
}
</style>
