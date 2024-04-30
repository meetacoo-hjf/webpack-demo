import _ from 'lodash';
// import Print from './print';

function Component () {
  const el = document.createElement("div");
  el.innerHTML = _.join(['webpack', 'demo']);
  // el.onclick = Print.bind(null, 'Hello webpack!');
  return el;
}

document.body.appendChild(Component());
