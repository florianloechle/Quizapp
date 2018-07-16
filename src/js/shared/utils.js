/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

export function isNormalObject(obj) {
  return typeof obj === 'object' && obj.toString() === '[object Object]';
}

export function isUndef(value) {
  return typeof value === 'undefined' || value === null;
}

export function areEqual(a,b) {

  const propsA = Object.getOwnPropertyNames(a);
  const propsB = Object.getOwnPropertyNames(b);

  for(let prop of propsA) {

  }
}

/**
 * Display a snackbarMessage.
 * @param {string} message - MessageText
 * @param {int} timeout - Timeout in ms.
 * @param {string} actionTxt - Text on actionbutton
 * @param {function} handler - actionHandler
 */
export function showSnackbarMessage(message, timeout, actionText, handler) {
  let notification = document.querySelector('.mdl-js-snackbar');
  notification.MaterialSnackbar.showSnackbar({
    message: message || '',
    timeout: timeout || 0,
    actionText: actionText || '',
    actionHandler: handler
  });
};
