// overwrite karma.start with a version that persists `config`
var existingStart = window.__karma__.start;
window.__karma__.start = function(config) {
  window.__karma__.config = config;
  existingStart.apply(this, arguments);
}
