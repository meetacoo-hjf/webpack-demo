import _ from 'lodash';

function Component () {
  const el = document.createElement("div");
  el.innerHTML = _.join(['webpack', 'demo']);
  return el;
}

document.body.appendChild(Component());
