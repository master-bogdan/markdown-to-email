const { readFile } = require("./utils");
const Heading = `<h1>Hello WORLD</h1>`

//@TODO I dont like this method. it's hard to read it
function replaceMarkdown(regexp, callback) {
  const callB = typeof callback !== 'string' ? callback.bind(this) : callback;
  
  this.content = this.content.replace(
    regexp,
    callB
  );
}

function replaceHTMLWrapper(wrapperName, config, folder = "typography") {
  let wrapper = Heading;

  Object.keys(config).forEach((name) => {
    wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
  });

  return wrapper;
}

// function replaceHTMLWrapper(wrapperName, config, folder = "typography") {
//   let wrapper = readFile(`${folder}/${wrapperName}`);

//   Object.keys(config).forEach((name) => {
//     wrapper = wrapper.replace(new RegExp(`{${name}}`, "g"), config[name]);
//   });

//   return wrapper;
// }

function replaceMarkdownPreviewText(regexp) {
this.content = this.content.replace(
    regexp,
    (text, content) => {
      const config = {
        content: content.trim(),
      };

      this.previewText = replaceHTMLWrapper(
        "previewText",
        config,
        "body"
      );

      this.errors.previewText = true;
      return "";
    }
  );
}


module.exports = {
  replaceMarkdown,
  replaceMarkdownPreviewText,
  replaceHTMLWrapper
};
