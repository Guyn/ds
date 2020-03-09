import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		style: []
	},
	getters: {
		getStyle(state) {
			if (state.style.length < 1) return null;
			let props = state.style
				.map(style => (style = `\n --${style[0]}: ${style[1]}`))
				.join(";");
			return `:root{ ${props} }`;
		}
	},
	actions: {
		UPDATE_STYLE: ({ commit }, data) => {
			commit("SET_STYLE", data); // In nuxt we would have to return this for asyncFetch
		}
	},
	mutations: {
		SET_STYLE: (state, data) => {
			state.style = data;
		}
	}
});
