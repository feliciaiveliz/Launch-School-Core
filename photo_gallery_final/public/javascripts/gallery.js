document.addEventListener('DOMContentLoaded', () => {
  let photos;
  let templates = {};
  
  document.querySelectorAll("script[type='text/x-handlebars']").forEach(template => {
    templates[template["id"]] = Handlebars.compile(template["innerHTML"]);
  });

  document.querySelectorAll("[data-type=partial").forEach(template => {
    Handlebars.registerPartial(template["id"], template["innerHTML"]);
  });

  const slideshow = {
    previousSlide(event) {
      event.preventDefault();

      let previousSlide = this.currentSlide.previousElementSibling;
      if (!previousSlide) { previousSlide = this.lastSlide; };

      this.fadeOut(this.currentSlide);
      this.fadeIn(previousSlide);
      this.renderPhotoContent(previousSlide.getAttribute("data-id"));
      this.currentSlide = previousSlide;
    },

    nextSlide(event) {
      event.preventDefault();
      let next = this.currentSlide.nextElementSibling;
      if (!next) next = this.firstSlide;

      this.fadeOut(this.currentSlide);
      this.fadeIn(next);
      this.renderPhotoContent(next.getAttribute('data-id'));
      this.currentSlide = next;
    },

    fadeOut(slide) {
      slide.classList.add('hide');
      slide.classList.remove('show');
    },

    fadeIn(slide) {
      slide.classList.add('show');
      slide.classList.remove('hide');
    },

    renderPhotoContent(id) {
      renderPhotoInformation(Number(id));
      renderComments(id);
    },

    bind() {
      let previousButton = this.slideshow.querySelector('a.prev');
      let nextButton = this.slideshow.querySelector('a.next');
      previousButton.addEventListener('click', event => this.previousSlide(event));
      nextButton.addEventListener('click', event => this.nextSlide(event));
    },

    init() {
      this.slideshow = document.querySelector('#slideshow');
      let slides = this.slideshow.querySelectorAll('figure');
      this.firstSlide = slides[0];
      this.lastSlide = slides[slides.length - 1];
      this.currentSlide = this.firstSlide;
      this.bind();
    }
  };

  (async () => {
    photos = await fetch("http://localhost:3000/photos");
    photos = await photos.json();

    renderPhotos();
    renderPhotoInformation(photos[0].id)
    renderComments(photos[0].id);
    slideshow.init();
  })();
 
  function renderPhotos() {
    let slides = document.querySelector('#slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos }));
  }

  function renderPhotoInformation(id) {  // adds photo info under previous photo info
    let photo = photos.filter(photo => photo.id === id)[0];
    let header = document.querySelector('section > header');
    
    header.innerHTML = '';
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }
  
  function renderComments(id) { 
    let div = document.getElementById('comments');
    let ul = div.querySelector('ul');
    ul.innerHTML = '';

    fetch(`http://localhost:3000/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(comment => {
        ul.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: comment }));
      });
  }

  document.querySelector('section > header').addEventListener('click', event => {
    event.preventDefault();
    let button = event.target;
    let buttonType = button.getAttribute('data-property');

    if (buttonType) {
      let href = button.getAttribute('href');
      let dataId = button.getAttribute('data-id');
      let text = button.textContent;

      fetch(href, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: 'photo_id=' + dataId
      })
      .then(response => response.json())
      .then(json => {
        button.textContent = text.replace(/\d+/, json.total);
      });
    }
  });

  let form = document.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();
    let div = document.getElementById('comments');
    let ul = div.querySelector('ul');
    let data = new FormData(form);
    let dataObject = new URLSearchParams(data);
    let currentSlideId = slideshow.currentSlide.getAttribute('data-id');
    dataObject.set('photo_id', currentSlideId);

    fetch(form.action, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: dataObject,
    })
    .then(response => response.json())
    .then(result => {
      ul.insertAdjacentHTML('beforeend', templates.photo_comment(result));
      form.reset();
    });
  });
});