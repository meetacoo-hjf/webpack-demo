/*function getComponent() {
  return import('lodash').then(({default: _}) => {
    const el = document.createElement('div');
    el.innerHTML = _.join(['webpack', 'demo'], ' ');
    return el;
  }).catch(err => 'An error occurred while loading the component');
}*/

// 由于 import() 会返回 promise，与 async 函数一起使用
async function getComponent() {
  const {default: _} = await import('lodash');
  const el = document.createElement('div');
  el.innerHTML = _.join(['webpack', 'demo'], ' ');
  return el;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
