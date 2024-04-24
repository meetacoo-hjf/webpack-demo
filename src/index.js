import _ from 'lodash';
import './style.css';
import Logo from './logo.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // TOML Example
console.log(toml.owner.name); // Tom Preston-Werner
console.log(yaml.title); // TOML Example
console.log(yaml.owner.name); // Tom Preston-Werner
console.log(json.title); // TOML Example
console.log(json.owner.name); // Tom Preston-Werner

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
