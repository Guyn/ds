module.exports = {
	moduleFileExtensions: ["vue", "js", "json", "scss"],
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
		".*\\.(vue)$": "vue-jest",
		".+\\.(css|s?ss)$": "jest-transform-css"
	},
	testMatch: ["**/*.test.(vue|js)"],
	coveragePathIgnorePatterns: ["/node_modules/"],
	coverageReporters: ["json", "lcov", "text", "text-summary"],

	moduleNameMapper: {
		base: "<rootDir>src/assets/scss/base",
		"^.+\\.(css|scss)$": "<rootDir>/config/jest/__mocks__/styleMock.js",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/config/jest/__mocks__/fileMock.js"
	},
	transformIgnorePatterns: ["/node_modules/", "/dist/", "/public/"],
	testPathIgnorePatterns: ["/node_modules/", "/dist/", "/public/"]
};
