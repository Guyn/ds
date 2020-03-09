<template>
	<section
		:class="[
			{
				collapsable,
				sidebar__subgroup: depth > 0,
				sidebar__group: depth < 1,
				'sidebar__subgroup--open': open && depth > 0,
				'sidebar__group--open': open && depth < 1
			},
			`sidebar__group--depth-${depth}`
		]"
	>
		<RouterLink
			v-if="item.path"
			class="sidebar__heading--clickable"
			:class="{
				sidebar__subheading: depth > 0,
				sidebar__heading: depth < 1,
				'sidebar__heading--open': depth < 1 && open,
				'sidebar__heading--active': depth < 1 && isActive($route, item.path),
				'sidebar__heading--collapsable': depth < 1 && collapsable,
				'sidebar__subheading--open': depth > 0 && open,
				'sidebar__subheading--active': depth > 0 && isActive($route, item.path),
				'sidebar__subheading--collapsable': depth > 0 && collapsable
			}"
			:to="item.path"
			@click.native="$emit('toggle')"
		>
			<span>{{ item.title }}</span>
			<span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
		</RouterLink>

		<span
			v-else
			:class="{
				sidebar__subheading: depth > 0,
				sidebar__heading: depth < 1,
				'sidebar__heading--open': open,
				'sidebar__heading--collapsable': collapsable
			}"
			@click="$emit('toggle')"
		>
			<span>{{ item.title }}</span>
			<span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
		</span>

		<DropdownTransition>
			<SidebarLinks
				v-if="open || !collapsable"
				class="sidebar__group-items"
				:items="item.children"
				:sidebar-depth="item.sidebarDepth"
				:depth="depth + 1"
			/>
		</DropdownTransition>
	</section>
</template>

<script>
import { isActive } from "../util";
import DropdownTransition from "@theme/components/DropdownTransition.vue";

export default {
	name: "SidebarGroup",

	components: {
		DropdownTransition
	},

	props: ["item", "open", "collapsable", "depth"],

	// ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
	beforeCreate() {
		this.$options.components.SidebarLinks = require("@theme/components/SidebarLinks.vue").default;
	},

	methods: { isActive }
};
</script>
