<template>
	<component :is="element" :href="link" :class="cardClasses">
		<span class="card__image" v-if="image">
			<img class="card__image-element" :src="image" />
		</span>
		<span class="card__content">
			<h4 class="card__title" v-if="title">{{ title }}</h4>
			<slot></slot>
		</span>
	</component>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: null
		},
		title: {
			type: String,
			default: null
		},
		link: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: null
		}
	},
	computed: {
		cardClasses() {
			let classes = ["card"];
			if (this.$props.color) classes.push(`card--${this.$props.color}`);
			if (this.$props.link) classes.push(`card--is-link`);
			return classes;
		},
		element() {
			if (this.$props.link) return "a";
			else return "article";
		}
	}
};
</script>

<style lang="scss" src="./Card.scss" />
