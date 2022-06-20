let inventory;

(() => {
  inventory = {
    lastId: 0,
    collection: [],
    setDate() {
      let date = new Date();
      document.querySelector('#order-date').textContent = date.toUTCString();
    },

    cacheTemplate() {
      let inventoryTemplate = document.querySelector('#inventory_item');
      this.template = Handlebars.compile(inventoryTemplate.innerHTML);
      inventoryTemplate.remove();
    },

    add() {
      this.lastId++;

      let item = {
        id: this.lastId,
        name: '',
        stock_number: '',
        quantity: 1
      };

      this.collection.push(item);
      return item;
    },

    remove(id) {
      this.collection = this.collection.filter(item => item.id !== id);
    },

    get(id) {
      return this.collection.filter(item => item.id === id)[0]; 
    },

    update(itemRow) {
      let id = this.findId(itemRow);
      let item = this.get(id);

      item.name = itemRow.querySelector("[name^=item_name]").value;
      item.stock_number = itemRow.querySelector("[name^=stock_number]").value;
      item.quantity = itemRow.querySelector("[name^=quantity]").value;
    },

    newItem(event) {
      event.preventDefault();
      let item = this.add();
      document.querySelector('#inventory').insertAdjacentHTML('beforeend', this.template({ id: item.id }));
    },

    findParent(event) {
      return event.target.closest('tr');
    },

    findId(item) {
      return +item.querySelector('input[type=hidden]').value;
    },

    deleteItem(event) {
      event.preventDefault();

      if (event.target.classList.contains('delete')) {
        let item = this.findParent(event);
        this.remove(this.findId(item));
        item.remove();
      }
    },

    updateItem(event) {
      if (event.target.tagName === 'INPUT') {
        let item = this.findParent(event);
        this.update(item);
      }
    },

    bindEvents() {
      document.querySelector('#add_item').addEventListener('click', this.newItem.bind(this));
      document.querySelector('#inventory').addEventListener('click', this.deleteItem.bind(this));
      document.querySelector('#inventory').addEventListener('focusout', this.updateItem.bind(this));
    },

    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', event => inventory.init.bind(inventory)());
