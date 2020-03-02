<script>
import Vue from "vue";
export default {
	props: {
		link: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: null
		},
		icon: {
			type: String,
			default: null
		}
	},
	data: () => ({
		buttonType: "button",
		buttonColor: "default"
	}),
	beforeCreate() {
		const isLink = new RegExp("^(http://|https://|tel:|mailto:)");
		// Determine type of link
		if (this.$props && this.$props.link && this.$props.link.match(isLink))
			this.buttonType = "a";
		else if (this.$props && this.$props.link) this.buttonType = "router-link";
		else this.buttonType = "button";

		console.log(this.buttonType);
		// Set the color
		if (this.$props && this.$props.color) this.buttonColor = this.$props.color;
	},
	methods: {
		buttonClasses() {
			return [
				"button",
				this.$props.color ? `button--${this.$props.color}` : null,
				this.$props.icon ? `button--icon` : null
			];
		}
	},

	render: function(h) {
		// If the link is a nuxt link, render will build it up with the NuxtLink component.
		if (this.buttonType == "router-link") {
			return h(
				Vue.component("RouterLink"),
				{
					props: {
						to: this.$props.link
					},
					class: this.buttonClasses()
				},
				[
					h("span", { class: ["button__text"] }, this.$slots.default),
					this.$props.icon
						? h("span", {
								class: ["button__icon", `icon--${this.$props.icon}`]
						  })
						: null
				]
			);
		} else {
			// Otherwise it will be an 'a' or a button. these can just be passed regularly to the render.
			return h(
				this.buttonType,
				{
					attrs: {
						href: this.buttonType == "a" ? this.$props.link : null
					},
					class: this.buttonClasses()
				},
				[
					h("span", { class: ["button__text"] }, this.$slots.default),
					this.$props.icon
						? h("span", { class: ["button__icon"] }, [
								h("span", { class: [`silicon-${this.$props.icon}`] })
						  ])
						: null
				]
			);
		}
	}
};
</script>

<style lang="scss">
@import "base";
$base-transition: 0.5s;
.button {
	color: darken($guyn-SkyblueDark, 10%);
	position: relative;
	z-index: 1;
	display: inline-block;
	border: none;
	border-radius: 1.5em;
	// color: var(--bg);
	font-weight: 600;
	font-size: 1rem;
	line-height: 1em;
	text-decoration: none;
	transition: $base-transition ease-in-out;
	padding: 1em 1.25em;
	position: relative;
	&::before {
		content: "";
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		border-radius: inherit;
		z-index: 1;
		background-color: lighten($guyn-SkyblueLight, 20%);
		transition: transform $base-transition-bounce;
	}
	&:focus,
	&:hover {
		outline: none;
	}
	&__text {
		position: relative;
		z-index: 2;
	}
	&:hover::before {
		transform: scale(1.05, 1.1);
	}
}
</style>
