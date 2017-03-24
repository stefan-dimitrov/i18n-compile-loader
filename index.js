'use strict';

const i18nCompile = require('i18n-compile');

module.exports = function (source) {
  var translations = i18nCompile.fromString(source);
  return JSON.stringify(translations);
};