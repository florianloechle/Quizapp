import { isNormalObject } from '../shared/utils';

export const COMBI_ON = [{ cb_onclick: 'click' }, { cb_onchange: 'change' }];

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
