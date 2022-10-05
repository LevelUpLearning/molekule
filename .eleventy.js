const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");



module.exports = function(eleventyConfig) {
    // Haciendo una copia de los directorios a el dicrectorio publico ""public"
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/code-style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    // To highlight code
    eleventyConfig.addPlugin(syntaxHighlight);
    // Adding to render math equations
    let markdownIt = require("markdown-it");
    let markdownItKatex = require("@iktakahiro/markdown-it-katex");
    let markdownItAttrs = require("markdown-it-attrs");
    let options = {
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    };
    let markdownLib = markdownIt(options)
    markdownLib.use(markdownItKatex);
    markdownLib.use(markdownItAttrs);
    
    eleventyConfig.setLibrary("md", markdownLib);
    //Date Clean up
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    //Latests Summary Limit
    eleventyConfig.addFilter("limit_latest", function (arr, limit) {
        return arr.slice(0, limit);
    });
    //Post Summary Limit
    eleventyConfig.addFilter("limit", function (arr, limit) {
        return arr.slice(1, limit);
    });
    return {
        dir: {
            input:"src",
            output:"public"
        }
    }
}