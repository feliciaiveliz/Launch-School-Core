let ItemManager = (function() {
  function generateSKU(itemName, category) {
    let sku = '';
    let name = itemName.split(' ');

    if (name.length === 2 && name[0].length === 2) {
      sku += name[0].slice(0);
      sku += name[1].slice(0, 1);
      sku += category.slice(0, 2);
    } else {
      sku += name[0].slice(0, 3);
      sku += category.slice(0, 2);
    }

    return sku.toUpperCase();
  }

  function validName(name) {
    let result = name.split(' ').join('');
    return result.length >= 5;
  } 

  function validCategory(category) {
    let result = category.split(' ');
    return result.length === 1 && result[0].length >= 5;
  }

  function validQuantity(quantity) {
    return quantity !== undefined;
  }

  return {
    items: [],

    create(name, category, quantity) {
      if (validName(name) && validCategory(category) && validQuantity(quantity)) {
        this.items.push({ SKU: generateSKU(name, category), name, category, quantity });
      } else {
        return { notValid: true };
      }
    },
  
    update(SKU, object) {
      let item = this.items.find(item => item['SKU'] === SKU);
      let key = Object.keys(object)[0];
      item[key] = object[key];
    },
  
    delete(SKU) {
      let item = this.items.find(item => item['SKU'] === SKU);
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    },

    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },

    itemsInCategory(category) {
      let list = this.items.filter(item => item.category === category);
      console.log(list);
    }
  }
})();

let ReportManager = (function() {
  return {
    init(object) {
      this.items = object;
      return this;
    },

    createReporter(sku) {
      let item = this.items.items.find(item => item['SKU'] === sku);

      return {
        itemInfo() {
          Object.keys(item).forEach(key => {
            console.log(`${key}: ${item[key]}`);
          });
        }
      }
    },

    reportInStock() {
      let list = this.items.inStock().map(item => item.name);
      return list.join(', ');
    }
  }
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// console.log(ItemManager.items);
ReportManager.init(ItemManager);
console.log(ReportManager.reportInStock());
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
console.log(ReportManager.reportInStock());
// // logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // // logs
// // // skuCode: KITCO
// // // itemName: kitchen pot
// // category: cooking
// // quantity: 10