import _ from 'lodash';
import './style.css';

function Component () {
  const el = document.createElement("div");
  el.innerHTML = _.join(['webpack', 'demo']);
  el.className = 'hello';
  console.log('Component')
  return el;
}

document.body.appendChild(Component());
