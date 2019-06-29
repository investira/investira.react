require('./lib/polyfills');

exports.charts = require('./lib/utils/charts');
exports.renders = require('./lib/utils/renders');
exports.localStorages = require('./lib/utils/localStorages');
exports.browsers = require('./lib/utils/browsers');
exports.bindStateToLocalStorage = require('./lib/middleware/bindStateToLocalStorage');
