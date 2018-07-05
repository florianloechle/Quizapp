/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

/**
 * Display a snackbarMessage.
 * @param {string} message - MessageText
 * @param {int} timeout - Timeout in ms.
 * @param {string} actionTxt - Text on actionbutton
 * @param {function} handler - actionHandler
 */
export const showSnackbarMessage = (message, timeout, actionText, handler) => {
  let notification = document.querySelector('.mdl-js-snackbar');
  notification.MaterialSnackbar.showSnackbar({
    message: message,
    timeout: timeout,
    actionText: actionText,
    actionHandler: handler
  });
};