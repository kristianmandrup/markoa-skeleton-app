var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log(input);
  template.render(input, out);
};
