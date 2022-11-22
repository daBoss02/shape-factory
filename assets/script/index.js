'use-strict';

/*
  Seth Vandenbos

  Alarm Clock
*/

// Utility Functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

