// fetch('http://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(js => console.log(js));

let url = {
  url: 'https://jsonplaceholder.typicode.com',
};

// (async () => {
//   let response = await fetch(url.url + '/comments?postId=1');
//   let js = await response.json();

//   console.log(js);
//  }
// )();

// posting
class Practice {
  constructor() {
    this.url = 'https://jsonplaceholder.typicode.com';
    this.response = 'boo';
  }

  async makeRequest() {
    this.response = await fetch(this.url + '/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'Pumpkin Fest',
        body: 'boo',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    });
    
    let js = await response.json();
    return js;
  }
}

let practice = new Practice();
console.log(practice.url);
console.log(practice.response);
practice.makeRequest();
console.log(practice.response);