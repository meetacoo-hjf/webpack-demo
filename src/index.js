import _ from 'lodash';
import './style.css';
import Logo from './logo.png';

function Component () {
  const el = document.createElement("div");
  el.innerHTML = _.join(['webpack', 'demo']);
  el.className = 'hello';
  const logo = new Image();
  logo.src = Logo;
  el.appendChild(logo);
  return el;
}

document.body.appendChild(Component());
