'use strict';
const isFunction = require('lodash.isfunction');
module.exports = value => isFunction(value) ? value : () => value;
