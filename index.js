
/**
 * Module dependencies.
 */

var main = require('main-loop');
var Delegator = require('dom-delegator');

module.exports = function startLoop(el, observ, render, opts) {
  Delegator(opts);
  var loop = main(observ(), render, opts);
  if (el) el.appendChild(loop.target);

  return observ(loop.update);
};