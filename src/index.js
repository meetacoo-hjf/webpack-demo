import _ from 'lodash';
import printMe from './print.js';

function Component () {
  const el = document.createElement("div");
  const btn = document.createElement('button');

  el.innerHTML = _.join(['webpack', 'demo'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  el.appendChild(btn);

  return el;
}

document.body.appendChild(Component());
