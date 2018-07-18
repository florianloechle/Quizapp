/**
 * Copyright (c) 2018-present, Florian Löchle.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory.
 *
 */

import $ from 'jquery';

/**
 * Performs a network request with the desired method.
 * @param {String} method -  HTTP Method. Valid methods are POST,GET,PUT,DELETE.
 * @param {String} path - The url path.
 * @param {Object} options -  Options object.
 * @returns {Promise} - Returns a promise.
 */
function request(method, path, options = {}) {
  if (typeof method !== 'String' || typeof path !== 'String') {
    throw 'Unexpected parameter type given.';
  }

  return new Promise((resolve, reject) => {
    $.ajax({
      method: method,
      data: options.data || undefined,
      url: path,
      dataType: options.dataType || 'json',
      success: data => resolve(data),
      error: xhr => reject(xhr)
    });
  });
}

function get(path, options) {
  return request('GET', path, options);
}

function post(path, options) {
  return request('POST', path, options);
}

function put(path, options) {
  return request('PUT', path, options);
}

function del(path, options) {
  return request('DELETE', path, options);
}

export const API = {
  get: get,
  post: post,
  put: put,
  delete: del
};