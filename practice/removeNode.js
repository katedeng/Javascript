const parent = document.getElementById('test-list');
const nodes = Array.from(parent.children);

nodes.forEach(function(node) {
    const text = node.textContent.trim();
    if(text !== 'JavaScript' &&  text !== 'HTML' && text !=='CSS' ){
        parent.removeChild(node);
    }
});

