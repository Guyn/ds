const path = require("path");
console.log(path.resolve(__dirname, "../assets/scss/base.scss"));
module.exports = {
	dest: "dist",
	themeConfig: {
		sidebar: [
			{
				title: "General",
				collapsable: false,
				children: ["page/usage/", "page/about/"]
			},
			// {
			// 	title: "Assets",
			// 	path: "/assets/",
			// 	collapsable: false,
			// 	children: ["assets/color/", "assets/scss/", "assets/fonts/"]
			// },
			{
				title: "Components",
				path: "/components/",
				collapsable: false,
				sidebarDepth: 3,
				children: [
					{
						title: "General",
						path: "/components/general/",
						collapsable: false,
						children: [
							"components/general/Button/",
							"components/general/Notification/"
						]
					},
					{
						title: "Typography",
						collapsable: false,
						path: "/components/typography/",
						children: ["components/typography/Title/"]
					},
					{
						title: "Forms",
						collapsable: false,
						path: "/components/forms/",
						children: [
							"components/forms/Checkbox/",
							"components/forms/Radio/",
							"components/forms/Select/",
							"components/forms/InputText/",
							"components/forms/TextArea/",
							"components/forms/OptionGroup/"
						]
					},
					{
						title: "Layout Blocks",
						collapsable: false,
						path: "/components/layout/",
						children: [
							"components/layout/Block/",
							"components/layout/Card/",
							"components/layout/Main/",
							"components/layout/Panel/"
						]
					},
					{
						title: "Grid",
						collapsable: false,
						path: "/components/grid/",
						children: ["components/grid/Row/", "components/grid/Column/"]
					}
				]
			}
		],
		displayAllHeaders: true // Default: false
	},
	alias: {
		base: path.resolve(__dirname, "../assets/scss/base.scss"),
		components: path.resolve(__dirname, "../components")
	}
};
