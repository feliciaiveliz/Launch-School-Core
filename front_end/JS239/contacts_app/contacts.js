class Model {
  constructor() {
    this.url = 'http://localhost:3000/api/contacts/';
    this.contentType = 'application/json; charset=utf-8';
  }

  async getAllContacts() {
    return await fetch(this.url).then(result => result.json());
  }

  async getSingleContact(id) {
    return await fetch(this.url + `${id}`).then(result => result.json());
  }

  async addContact(jsonContact) {
    let response = await fetch(this.url, {
      method: "POST",
      headers: { 'Content-Type': this.contentType },
      body: jsonContact,
    });

    if (!response.ok) alert(await response.text());
  }

  async updateContact(id, contact) {
    let response = await fetch(this.url + `${id}`, {
      method: "PUT",
      headers: { 'Content-Type': this.contentType },
      body: contact,
    });

    if (!response.ok) alert(await response.text());
  }

  async deleteContact(id) {
    let response = await fetch(this.url + `${id}`, { method: "DELETE" });
    if (!response.ok) alert(await response.status);
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

  async displayAllContacts(contactsObject) {
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
    this.mainDisplay();
    this.letters = '';
    this.currentContactId = '';
  }

  mainDisplay = async () => {
    let contacts = await this.model.getAllContacts();
    await this.view.displayAllContacts(contacts);
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

  filterContacts(contacts) {
    return contacts.filter(contact => {
      return contact.full_name.toLowerCase().startsWith(this.letters) || 
      contact.full_name.toLowerCase() === this.letters;
    });
  }

  handleSearchContact = async event => {
    event.preventDefault();

    let contacts = await this.model.getAllContacts();
    contacts = await contacts;

    if (event.key === 'Backspace') {
      this.letters = this.letters.slice(0, this.letters.length - 1);
      let filteredContacts = this.filterContacts(contacts);

      if (this.letters === '') {
        this.mainDisplay();
      } else {
        this.view.displayFilteredContacts(filteredContacts);
      }
    } else {
      this.letters += event.key; 
      let filteredContacts = this.filterContacts(contacts);

      if (this.letters === '') {
        this.mainDisplay();
      } else {
        this.view.displayFilteredContacts(filteredContacts);
      }
    }
  }

  handleAddContact = () => {
    this.view.displayAddContact();

    document.querySelector('#add-contact-form').addEventListener('submit', this.handleSubmitAddContact);
    document.querySelector('.cancel-button').addEventListener('click', this.mainDisplay);
  }

  handleSubmitAddContact = async event => {
    event.preventDefault();

    const form = document.querySelector('#add-contact-form');
    let formData = new FormData(form);
    const contacts = Object.fromEntries(formData);
    const json = JSON.stringify(contacts);

    await this.model.addContact(json);
    this.mainDisplay();
  }

  handleEditContact = async event => {
    this.currentContactId = event.target.getAttribute('data_id'); 
    this.view.displayEditContact();

    let contact = await this.model.getSingleContact(this.currentContactId);

    let form = document.querySelector('#edit-contact-form');
    form.querySelector("#full_name").value    = contact.full_name;
    form.querySelector("#email").value        = contact.email;
    form.querySelector("#phone_number").value = contact.phone_number;
    form.querySelector("#tags").value         = contact.tags;
    
    document.querySelector('#edit-contact-form').addEventListener('submit', this.handleSubmitEditContact);
    document.querySelector('.cancel-button').addEventListener('click', this.mainDisplay);
  }

  handleSubmitEditContact = async event => {
    event.preventDefault();

    let id = this.currentContactId;

    let form = document.querySelector('#edit-contact-form');
    let formData = new FormData(form);
    let contact = Object.fromEntries(formData);
    let json = JSON.stringify(contact);

    await this.model.updateContact(id, json);
    this.mainDisplay();
  }

  handleDeleteContact = async event => {
    let id = event.target.closest('div').parentElement.getAttribute('data_id');
    let value = confirm("Are you sure you want to delete this contact?");

    if (value) await this.model.deleteContact(id);
    this.mainDisplay();
  }
}

let app;

document.addEventListener('DOMContentLoaded', () => app = new Controller(new Model(), new View()));
