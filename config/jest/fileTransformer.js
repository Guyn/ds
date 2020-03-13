// fileTransformer.js
const path = require("path");

module.exports = {
	process(src, filename, config, options) {
		console.log(config, options, src);
		return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
	}
};
