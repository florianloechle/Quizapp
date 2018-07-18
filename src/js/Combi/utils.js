import { isNormalObject } from '../shared/utils';
import $ from 'jquery';

export const COMBI_DOMPROPS = [{ cb_name: 'name' }];

export function isValidRenderMethod(context) {
  return (
    isNormalObject(context) &&
    (context.html || context.htmlPath) &&
    typeof (context.html || context.htmlPath) === 'string'
  );
}

export async function loadHTML(path) {
  const html = await $.get(path);
  const element = html;

  return element;
}
