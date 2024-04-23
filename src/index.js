import _ from 'lodash';

function Component () {
  const el = document.createElement("div");
  el.innerHTML = _.join(['webpack', 'demo']);
  console.log('Component')
  return el;
}

document.body.appendChild(Component());
