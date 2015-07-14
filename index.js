'use strict';
module.exports = function (opts) {
  var getHosts = require('get-hosts');

  if (opts.pretty) {
    var objToTable = require('obj-to-table');
    console.log(objToTable(getHosts()).toString());
  } else {
    console.log(getHosts());
  }
};
