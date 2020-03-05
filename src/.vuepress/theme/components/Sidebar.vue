<template>
	<aside class="sidebar">
		<Logo />
		<NavLinks />
		<slot name="top" />

		<SidebarLinks :depth="0" :items="items" />
		<slot name="bottom" />
	</aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import Logo from "../../components/Logo.vue";

export default {
	name: "Sidebar",

	components: { Logo, SidebarLinks, NavLinks },

	props: ["items"]
};
</script>
