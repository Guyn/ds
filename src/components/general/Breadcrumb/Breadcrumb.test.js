import { mount } from "@vue/test-utils";
import Component from "./index";

describe("Breadcrumbs", () => {
	// Now mount the component and you have the wrapper
	const wrapper = mount(Component);

	it("renders the correct markup", () => {
		expect(wrapper.html()).toContain('<ul class="breadcrumb__list"></ul>');
	});

	// it's also easy to check for the existence of elements
	it("has a link", () => {
		expect(wrapper.contains("a")).toBe(true);
	});
});
