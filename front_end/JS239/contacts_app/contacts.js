class Model {
  constructor() {}

  async getAllContacts() {
    let response = await fetch('http://localhost:3000/api/contacts');
    let contacts = await response.json();
    return contacts;
  }

  async getSingleContact(id) {
    let response = await fetch(`http://localhost:3000/api/contacts/${id}`);
    let js = await response.json();
    return js;
  }

  async addContact(jsonContact) {
    let response = await fetch('http://localhost:3000/api/contacts/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: jsonContact,
    });

    if (!response.ok) {
      console.log(await response.text());
    }
  }

  async updateContact(id, contact) {
    let response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: contact,
    });

    if (!response.ok) {
      console.log(await response.text());
    }
  }

  async deleteContact(id) {
    let response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return await response.status;
    }
  }
}

class View {
  constructor() {
    this.templates = {};
    this.compileTemplates();
    this.registerPartials();
  }

  compileTemplates() {
    document.querySelectorAll("script[type='text/x-handlebars']").forEach(template => {
      this.templates[template["id"]] = Handlebars.compile(template["innerHTML"]);
    });
  }
  
  registerPartials() {
    document.querySelectorAll("[data-type=partial").forEach(template => {
      Handlebars.registerPartial(template["id"], template["innerHTML"]);
    });  
  }

  displayAddContact() {
    let main = document.querySelector('#main-page');
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', this.templates['add-contact']({}));
  }

  displayEditContact() {
    let main = document.querySelector('#main-page');
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', this.templates['edit-contact']({}));
  }

  displayFilteredContacts(contacts) {
    let main = document.querySelector(".contacts");
    main.textContent = '';
    main.insertAdjacentHTML('beforeend', this.templates['contacts']({ contacts }));
  }

  async displayMainPage(contactsObject) {
    let contacts = await contactsObject;
    let main = document.querySelector('#main-page');
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', this.templates['main-page']({ contacts }));
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.initialDisplay();
    this.currentContact = '';
    this.letters = '';
  }

  initialDisplay = async () => {
    let contacts = await this.model.getAllContacts();
    await this.view.displayMainPage(contacts);
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll('.add-contact-button').forEach(button => {
      button.addEventListener('click', this.handleAddContact);
    });

    document.querySelectorAll('.edit-contact-button').forEach(button => {
      button.addEventListener('click', this.handleEditContact);
    });

    document.querySelectorAll('.delete-contact-button').forEach(button => {
      button.addEventListener('click', this.handleDeleteContact);
    });

    document.querySelectorAll('input[type="search"]').forEach(bar => {
      bar.addEventListener('keyup', this.handleSearchContact);
    });
  }

  handleSearchContact = async event => {
    event.preventDefault();

    let contacts = await this.model.getAllContacts();
    contacts = await contacts;

    if (event.key === 'Backspace') {
      this.letters = this.letters.slice(0, this.letters.length - 1);

      let filteredContacts = contacts.filter(contact => {
        return contact.full_name.toLowerCase().startsWith(this.letters) || 
        contact.full_name.toLowerCase() === this.letters;
      });

      if (this.letters === '') {
        this.initialDisplay();
      } else {
        this.view.displayFilteredContacts(filteredContacts);
      }
    } else {
      this.letters += event.key; 

      let filteredContacts = contacts.filter(contact => {
        return contact.full_name.toLowerCase().startsWith(this.letters) || 
        contact.full_name.toLowerCase() === this.letters;
      });

      if (this.letters === '') {
        this.initialDisplay();
      } else {
        this.view.displayFilteredContacts(filteredContacts);
      }
    }
  }

  handleAddContact = () => {
    this.view.displayAddContact();

    document.querySelector('#add-contact-form').addEventListener('submit', this.handleSubmitAddContact);
    document.querySelector('.cancel-button').addEventListener('click', this.initialDisplay);
  }

  handleSubmitAddContact = async event => {
    event.preventDefault();

    const form = document.querySelector('#add-contact-form');
    let formData = new FormData(form);
    const contacts = Object.fromEntries(formData);
    const json = JSON.stringify(contacts);

    await this.model.addContact(json);
    this.initialDisplay();
  }

  handleEditContact = async event => {
    this.currentContact = event.target; 
    this.view.displayEditContact();

    let id = this.currentContact.getAttribute('data_id');
    let singleContact = await this.model.getSingleContact(id);

    let form = document.querySelector('#edit-contact-form');
    form.querySelector("#full_name").value = singleContact.full_name;
    form.querySelector("#email").value = singleContact.email;
    form.querySelector("#phone_number").value = singleContact.phone_number;
    form.querySelector("#tags").value = singleContact.tags;
    
    document.querySelector('#edit-contact-form').addEventListener('submit', this.handleSubmitEditContact);
    document.querySelector('.cancel-button').addEventListener('click', this.initialDisplay);
  }

  handleSubmitEditContact = async event => {
    event.preventDefault();
    let id = this.currentContact.getAttribute('data_id');
    let singleContact = await this.model.getSingleContact(id);

    let form = document.querySelector('#edit-contact-form');
    let formData = new FormData(form);
    let contact = Object.fromEntries(formData);
    let json = JSON.stringify(contact);

    await this.model.updateContact(singleContact.id, json);
    this.initialDisplay();
  }

  handleDeleteContact = async event => {
    let id = event.target.closest('div').parentElement.getAttribute('data_id');
    let value = confirm("Are you sure you want to delete this contact?");

    if (value) {
      await this.model.deleteContact(id);
    }

    this.initialDisplay();
  }
}

let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new Controller(new Model(), new View());
});
