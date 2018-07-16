const Router = {
  
  routes:  [],
  root:  '/',
  routerListener:  null,

  getFragment: function() {
      let fragment = '';
      fragment = clearURLSlashes(decodeURI(location.pathname + location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
      
      return clearURLSlashes(fragment);
  },

  clearURLSlashes: function(path) {
      return path.toString().replace(/\/$/, '').replace(/^\//, '');
  },

  newRoute: function(route, handler) {
      if(typeof route == 'function') {
          handler = route;
          route = '';
      }
      this.routes.push({ path: route, handler: handler});
  },

  
  compare: function(urlFragment = this.getFragment()) {
      for(let route of this.routes) {
        let match = urlFragment.match(route.path);

        if(match) {
          return subcriber(route.handler);
        }
      }
  },

  listen: function() {
      let current = getFragment();

      const listener = function() {
          if(current !== getFragment()) {
              current = getFragment();
              compare(current);
          }
      }
      clearInterval(this.routerListener);

      routerListener = setInterval(listener, 50);
  },

  navigate: function(path = '')  {
      history.pushState(null, null, root + clearURLSlashes(path));
  }

}

export default Router;