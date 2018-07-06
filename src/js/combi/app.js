function App(combis) {

  if(!combis) {
    throw 'Must be given combi components to render.'
  }

  if(combis && typeof combis !== 'object') {
    throw 'Please provide an app object'
  }


}