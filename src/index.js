import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import Data from './data.xml';
import Notes from './data.csv';

function Component () {
  const el = document.createElement("div");
  el.innerHTML = _.join(['webpack', 'demo']);
  el.className = 'hello';
  const logo = new Image();
  logo.src = Logo;
  el.appendChild(logo);
  console.log(Data);
  console.log(Notes);
  return el;
}

document.body.appendChild(Component());
