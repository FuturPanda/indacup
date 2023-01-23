const embedEverything = require("eleventy-plugin-embed-everything")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(embedEverything)
    return {
        dir: {input: "src"}
    }
}