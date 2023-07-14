const js = document.getElementById('js');
const list = document.getElementById('list');
const ref = document.getElementById('python')
const haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);
list.appendChild(js);


const d = document.creatElement('style');
d.setAttribute('type','text/css');
d.innerHTML = 'p {color:red}';
document.getElementsByTagName('head')[0].appendChild(d);