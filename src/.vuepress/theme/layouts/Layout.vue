<template>
	<div
		class="layout layout--default"
		:class="pageClasses"
		@touchstart="onTouchStart"
		@touchend="onTouchEnd"
	>
		<!-- <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" /> -->
		<div class="layout__header">
			<ToggleMenu :active="isSidebarOpen" @click.native="toggleSidebar" />
			<h3 class="layout__header-title"><strong>Guyn</strong> Design System</h3>
			<Logo class="logo" />
			<ToggleSections :active="isSectionsOpen" @click.native="toggleSectionView" />
		</div>
		<div
			class="layout__sections"
			:class="{ 'layout__sections--active': isSectionsOpen }"
		>
			<ul>
				<li style="background-color: var(--color-orange)">
					<a>Color</a>
				</li>
				<li style="background-color: var(--color-red)"><a>Tools</a></li>
				<li style="background-color: var(--color-skyblue)"><a>DS</a></li>
				<li style="background-color: var(--color-turquoise)"><a>Convert</a></li>
				<li style="background-color: var(--color-pink)"><a>Code</a></li>
			</ul>
		</div>
		<div class="layout__left" :class="{ 'layout__left--active': isSidebarOpen }">
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
import ToggleMenu from "../../components/ToggleMenu.vue";
import ToggleSections from "../../components/ToggleSections.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";

export default {
	name: "Layout",

	components: {
		Home,
		Page,
		Sidebar,
		ToggleMenu
		// Navbar
	},

	data() {
		return {
			currentValue: "test",
			isSidebarOpen: false,
			isSectionsOpen: false
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
		toggleSidebar() {
			this.isSidebarOpen = !this.isSidebarOpen;
			this.$emit("toggle-sidebar", this.isSidebarOpen);
		},
		toggleSectionView() {
			this.isSectionsOpen = !this.isSectionsOpen;
			this.$emit("toggle-sections", this.isSectionsOpen);
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
	display: block;

	@media #{$medium-up} {
		display: grid;
		grid-template-columns: minmax(15rem, 25%) auto;
		grid-template-rows: auto;
		grid-template-areas:
			"header header"
			"sidebar page"
			"footer footer";
		min-height: 100vh;
	}

	.layout__header {
		position: fixed;
		width: 100vw;
		height: 3rem;
		display: flex;
		justify-content: space-between;
		background-color: var(--base-color-dark, #{$base-color-dark});
		color: white;
		z-index: 10;
		overflow: hidden;
		@media #{$medium-up} {
			display: none;
		}
		.logo {
			position: absolute;
			z-index: -1;
			width: 3rem;
			height: 3rem;
			--logo-color: var(--color-primary);
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(1.25);
		}
		&-title {
			position: relative;
			z-index: 20;
			font-size: 1rem;
			font-weight: normal;
			line-height: 3rem;
		}
	}
	.layout__sections {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: $base-border-radius * 2;
		width: 80vmin;
		height: 80vmin;
		box-shadow: 0 0 12vw 0 setLightness(--base-color-light, 50),
			0 -4px 0 0 setLightness(--base-color-light, 80) inset;
		z-index: 100;
		padding: 0.5em;
		background-color: var(--base-color-light);
		z-index: 10;
		transform: scale(0.5);
		opacity: 0;
		pointer-events: none;
		transition: transform $base-transition-bounce;
		&--open {
			transform: scale(1);
			opacity: 0;
		}
		ul {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 1fr);
			flex-wrap: wrap;
			grid-gap: 0.5em;
			height: 100%;

			li {
				border-radius: $base-border-radius;
				display: block;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				font-size: 3vw;
			}
		}
	}
	.layout__left {
		@media #{$small-only} {
			position: fixed;
			z-index: 2;
			height: 100vh;
			overflow: auto;
			clip-path: inset(0 100% 0 0);
			transition: clip-path $base-transition;
			&--active {
				clip-path: inset(0 0% 0 0);
			}
		}
		@media #{$medium-up} {
			min-height: 100vh;
			grid-area: sidebar;
			display: flex;
			justify-content: flex-end;
		}
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
