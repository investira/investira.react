require('./lib/polyfills');

exports.renders = require('./lib/utils/renders');
exports.localStorages = require('./lib/utils/localStorages');
exports.validators = require('./lib/utils/validators');
exports.browsers = require('./lib/utils/browsers');

exports.bindStateToLocalStorage = require('./lib/middleware/bindStateToLocalStorage');
