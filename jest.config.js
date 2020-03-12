const path = require("path");
module.exports = {
	moduleFileExtensions: ["vue", "tsx", "ts", "js", "json", "scss"],
	transform: {
		".*\\.(vue)$": "vue-jest",
		".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
	},
	testMatch: ["**/*.test.(vue|js)"],
	coveragePathIgnorePatterns: ["/node_modules/"],
	coverageReporters: ["json", "lcov", "text", "text-summary"],
	moduleNameMapper: {
		base: path.resolve("src/assets/scss/base.scss"),
		// "\\.(css|less|sass|scss)$": "test-config/__mocks__/styleMock.js",
		"\\.(css|less|sass|scss)$": "<rootDir>/config/jest/assetsTransformer.js",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/config/jest/assetsTransformer.js"
	}
};
