<template>
	<div
		class="layout layout--default"
		:class="pageClasses"
		@touchstart="onTouchStart"
		@touchend="onTouchEnd"
	>
		<!-- <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" /> -->
		<div class="layout__header">
			<button
				class="toggle"
				:class="{ 'toggle--active': isSidebarOpen }"
				@click="toggleSidebar"
			>
				<span></span>
			</button>
			<Logo class="logo" />
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
			this.isSidebarOpen = !this.isSidebarOpen;
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
		flex-direction: column-reverse;
		background-color: var(--base-color-dark, #{$base-color-dark});
		color: white;
		z-index: 10;
		overflow: hidden;
		.logo {
			position: absolute;
			z-index: 2;
			width: 3rem;
			height: 3rem;
			--logo-color: var(--color-primary);
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(1.25);
		}
		.toggle {
			width: 3rem;
			height: 3rem;
			position: relative;
			-webkit-appearance: none;
			background: transparent;
			border: none;
			color: white;
			&:focus {
				outline: none;
				span::before,
				span::after {
					background-color: var(--base-color-primary);
				}
			}
			span {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 1.5rem;
				height: 2px;
				transform: translate(-50%, -50%);
				&::before,
				&::after {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					content: "";
					display: block;
					width: 100%;
					height: 100%;
					background-color: currentColor;
					transition: transform $base-transition-bounce;
				}
				&::before {
					transform: translate(-50%, calc(-50% - 3px));
				}
				&::after {
					transform: translate(-50%, calc(-50% + 3px));
				}
			}
			&--active {
				span {
					&::before {
						transform: translate(-50%, calc(-50%)) rotate(-45deg);
					}
					&::after {
						transform: translate(-50%, calc(-50%)) rotate(45deg);
					}
				}
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
