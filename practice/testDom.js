// sort list
const list = document.getElementById('test-list');
const nodes = Array.from(list.children);

nodes.sort(function(a,b){
    const textA = a.textContent.toLowerCase();
    const textB = b.textContent.toLowerCase();
    return textA.localeCompare(textB);
});
nodes.forEach(function(node){
    list.appendChild(node);
});


