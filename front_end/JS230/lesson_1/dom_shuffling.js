function test() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
}

async function greet() {
  console.log(2);
  let result = await test();
  console.log(result);
  console.log(3);
}

greet();
console.log(4);

// grab second header
let header = document.querySelector('body>header');
document.body.insertBefore(header, document.body.firstElementChild);

// h1 of main - first child of header
let h1 = document.querySelector('main>h1');
header.insertBefore(h1, header.firstElementChild);

// move figures in section to end of article - chin lady first, baby mop second
// append chin lady first, then mop
let figures = document.querySelectorAll('figure');
let baby = figures[0];
let chin = figures[1];
console.log(baby);
document.querySelector('article').appendChild(chin);
document.querySelector('article').appendChild(baby);

let chinCaption = baby.querySelector('figcaption').cloneNode(true);
let babyCaption = chin.querySelector('figcaption').cloneNode(true);
baby.querySelector('figcaption').replaceWith(babyCaption);
chin.querySelector('figcaption').replaceWith(chinCaption);
