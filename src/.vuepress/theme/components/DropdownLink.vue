<template>
	<div class="dropdown-wrapper" :class="{ open }">
		<button
			class="dropdown-title"
			type="button"
			:aria-label="dropdownAriaLabel"
			@click="setOpen(!open)"
		>
			<span class="title">{{ item.text }}</span>
			<span class="arrow" :class="open ? 'down' : 'right'" />
		</button>

		<DropdownTransition>
			<ul v-show="open" class="nav-dropdown">
				<li
					v-for="(subItem, index) in item.items"
					:key="subItem.link || index"
					class="dropdown-item"
				>
					<h4 v-if="subItem.type === 'links'">
						{{ subItem.text }}
					</h4>

					<ul v-if="subItem.type === 'links'" class="dropdown-subitem-wrapper">
						<li
							v-for="childSubItem in subItem.items"
							:key="childSubItem.link"
							class="dropdown-subitem"
						>
							<NavLink
								:item="childSubItem"
								@focusout="
									isLastItemOfArray(childSubItem, subItem.items) &&
										isLastItemOfArray(subItem, item.items) &&
										setOpen(false)
								"
							/>
						</li>
					</ul>

					<NavLink
						v-else
						:item="subItem"
						@focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
					/>
				</li>
			</ul>
		</DropdownTransition>
	</div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import DropdownTransition from "@theme/components/DropdownTransition.vue";
import last from "lodash/last";

export default {
	name: "DropdownLink",

	components: {
		NavLink,
		DropdownTransition
	},

	props: {
		item: {
			required: true
		}
	},

	data() {
		return {
			open: false
		};
	},

	computed: {
		dropdownAriaLabel() {
			return this.item.ariaLabel || this.item.text;
		}
	},

	watch: {
		$route() {
			this.open = false;
		}
	},

	methods: {
		setOpen(value) {
			this.open = value;
		},

		isLastItemOfArray(item, array) {
			return last(array) === item;
		}
	}
};
</script>
