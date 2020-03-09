<template>
	<div class="settings" :class="{ 'settings--open': open }">
		<button class="settings__trigger" @click="open = !open">
			{{ open ? "close" : "open" }}
		</button>
		<button class="settings__code-trigger" v-if="styles" @click="code = !code">
			{{ code ? "</>" : "<>" }}
		</button>
		<div class="settings__custom" v-if="styles" :class="{ 'settings__custom--open': code}">
			<pre><code>{{ styles }}</code></pre>
		</div>
		<div class="settings__container">
			<div class="settings__content">
				<h2>Settings</h2>
				<h4>Base</h4>

				<InputText
					inline
					type="number"
					label="Border Radius"
					v-model="settings.base_border_radius"
					placeholder="0.5em"
				/>
				<InputText
					inline
					label="Border"
					placeholder="1px solid currentColor"
					v-model="settings.base_border"
				/>
				<InputText
					inline
					label="Padding"
					placeholder="2em"
					v-model="settings.base_padding"
				/>
				<InputText
					inline
					label="Margin"
					placeholder="1em"
					v-model="settings.base_margin"
				/>

				<h4>Colors</h4>
				<Select
					inline
					:options="allColors"
					label="Primary"
					v-model="settings.base_color_primary"
				/>
				{{ settings.base_color_primary }}
				<Select
					inline
					:options="allColors"
					label="Secondary"
					v-model="settings.base_color_secondary"
				/>
				<Select
					inline
					:options="allColors"
					label="Tertiary"
					v-model="settings.base_color_tertiary"
				/>
				<Select
					inline
					:options="allColors"
					label="Notification"
					v-model="settings.base_color_notification"
				/>
				<Select
					inline
					:options="allColors"
					label="Warning"
					v-model="settings.base_color_warning"
				/>
				<Select
					inline
					:options="allColors"
					label="Success"
					v-model="settings.base_color_success"
				/>
				<Select
					inline
					:options="allColors"
					label="Error"
					v-model="settings.base_color_error"
				/>
				<Select
					inline
					:options="allColors"
					label="Light"
					v-model="settings.base_color_light"
				/>
				<Select
					inline
					:options="allColors"
					label="Dark"
					v-model="settings.base_color_dark"
				/>
				<Select
					inline
					:options="allColors"
					label="Background"
					v-model="settings.base_color_background"
				/>
				<Select
					inline
					:options="allColors"
					label="Text"
					v-model="settings.base_color_text"
				/>

				<h4>Forms</h4>
				<InputText
					inline
					label="Border Radius"
					v-model="settings.base_form_border_radius"
				/>
				<button @click="reset">Reset</button>
			</div>
		</div>
		<!-- <style v-if="styles.length > 0">
			:root {
				<template v-for="(style, idx) in styles" :key="idx">
					&nbsp;&nbsp;{{ style[0] }}:
					{{ style[1] }};
				</template>
			}
		</style> -->
	</div>
</template>

<script>
import { hexToHsl } from "../../../helpers/color";
import Colors from "../../assets/color/base.json";
export default {
	components: {
		InputText: () => import("../../components/forms/InputText"),
		Select: () => import("../../components/forms/Select")
	},
	data: () => ({
		settings: {
			base_border_radius: null
		},
		colors: [
			{ label: " ", value: null },
			{ label: "Red", value: "#ff0000" },
			{ label: "Green", value: "#00ff00" },
			{ label: "Blue", value: "#0000ff" }
		],

		// styles: [],
		open: false,
		code: true
	}),
	computed: {
		allColors() {
			const colors = Object.keys(Colors).map(color => {
				return { label: color, value: Colors[color] };
			});

			return colors;
		},
		styles: {
			get() {
				return this.$store.getters["getStyle"];
			},
			set(value) {
				this.$store.dispatch("UPDATE_STYLE", value);
			}
		}
	},
	methods: {
		reset(){
			this.styles = []
		}
	},
	watch: {
		settings: {
			handler() {
				const styles = [];
				Object.keys(this.settings).forEach(item => {
					if (this.settings[item] == null) return;

					if (item.indexOf("_color_") > -1) {
						let customProperty = item.replace(new RegExp("_", "g"), "-");
						let hsl = hexToHsl(this.settings[item]);
						console.log(hsl);
						styles.push([`${customProperty}`, this.settings[item]]);
						styles.push([`${customProperty}-h`, 360 * hsl.h]);
						styles.push([
							`${customProperty}-s`,
							`${Math.round(hsl.s * 10000) / 100}%`
						]);
						styles.push([
							`${customProperty}-l`,
							`${Math.round(hsl.l * 10000) / 100}%`
						]);
					} else {
						styles.push([
							`${item.replace(new RegExp("_", "g"), "-")}`,
							this.settings[item]
						]);
					}
				});
				this.styles = styles;
			},
			deep: true
		}
	}
};
</script>

<style lang="scss">
@import "base";

.settings {
	&--open {
		opacity: 1;
		transform: translateX(-100%);
		// .settings__trigger {
		// 	transform: translateX(calc(0% + 1em));
		// }
		.settings__container {
			pointer-events: all;
		}
	}
	position: fixed;
	z-index: 10;
	top: 4vw;
	width: calc(100% - 8vw);
	max-width: 480px;
	left: 100%;
	transform: translateX(0%);
	border-radius: var(--base-border-radius, #{$base-border-radius});
	background-color: var(--base-color-dark, #{$base-color-dark});
	color: var(--base-color-light, #{$base-color-light});
	display: block;
	box-shadow: 0 0 8vw 0 rgba(0, 0, 0, 0.25);
	height: calc(100vh - 8vw);
	transition: $base-transition-bounce;
	&::before,
	&::after {
		content: "";
		width: 100%;
		height: var(--base-border-radius, $base-border-radius);
		position: absolute;
		left: 0;
		border-radius: var(--base-border-radius, $base-border-radius)
			var(--base-border-radius, $base-border-radius) 0 0;
		z-index: 1;
		background-image: linear-gradient(
			to bottom,
			var(--base-color-dark, #{$base-color-dark}),
			transparent
		);
	}
	&::before {
		top: 0;
	}
	&::after {
		bottom: 0;
		transform: rotate(180deg);
	}

	&__code-trigger,
	&__trigger {
		position: absolute;
		transform: translateX(calc(-100% - 1em));
		width: 3rem;
		top: 1em;
		height: 3rem;
		border-radius: var(--base-border-radius, $base-border-radius);
		z-index: 2;
		border: none;
		transition: $base-transition-bounce;
		background-color: var(--base-color-light);
		color: var(--base-color-dark);
		&:focus {
			outline: none;
		}
	}
	&__code-trigger {
		top: 6em;

		background-color: var(--base-color-dark);
		color: var(--base-color-light);
	}
	&__container {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: block;
		overflow: scroll;
		pointer-events: none;
	}
	&__content {
		position: relative;
		display: block;
		padding: var(--base-padding, #{$base-padding});
	}
	&__custom {
		background-color: setOpacity(--base-color-light, 50);
		color: var(--base-color-dark);
		padding: var(--base-padding, #{$base-padding});
		position: absolute;
		right: 100%;
		top: var(--base-border-radius, $base-border-radius);
		border-radius: var(--base-border-radius, $base-border-radius) 0 0
			var(--base-border-radius, $base-border-radius);
		font-family: "Courier New", Courier, monospace;
		clip-path: inset(0 0 0 100%);
		transition: clip-path var(--base-transition, #{$base-transition});
		&--open{
			clip-path: inset(0 0 0 0%);
		}
	}
}
</style>
