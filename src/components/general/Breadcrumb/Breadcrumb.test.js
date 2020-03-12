import { mount } from "@vue/test-utils";
import Component from "./";

describe("Breadcrumb", () => {
	test("is a Vue instance", () => {
		const wrapper = mount(Component);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});
