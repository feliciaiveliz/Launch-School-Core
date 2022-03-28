function iterateAndLog(array) {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]);
  }
}

// let letters = ['h', 'e', 'l', 'l', 'o'];
// iterateAndLog(letters); 
// h
// e
// l
// l
// o

function recurseAndLog(array) {
  if (array.length > 0) {
    console.log(array[0]);
    recurseAndLog(array.slice(1));
  }
}

let letters = ['h', 'e', 'l', 'l', 'o'];
// iterateAndLog(letters); 
recurseAndLog(letters);

function walk(node) {
  console.log(node.nodeName);
  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i]);
  }
}

walk(document.body);

/// 

function walk(node, callback) {
  callback(node);
  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

walk(document.body, node => {
  console.log(node.nodeName);
});

