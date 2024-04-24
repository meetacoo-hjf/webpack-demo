function getComponent () {
  return import('lodash').then(({default: _}) => {
    const el = document.createElement('div');
    el.innerHTML = _.join(['webpack', 'demo'], ' ');
    return el;
  }).catch(err => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
