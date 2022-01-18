// In this exercise, you'll build a simple inventory management system. The system is composed of an item creator, an items manager, and a reports manager. The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

// Here's all the required information for an item:

// SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.
// Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.

// The following are the methods that the items manager can perform:

// create: This method creates a new item. Returns false if creation is not successful.
// update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
// delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
// items: This property contains a list of all the items.
// inStock: This method lists all the items that have a quantity greater than 0.
// itemsInCategory: This method lists all the items for a given category

// The following are the methods on the reports managers:

// init: This method accepts the ItemManager object as an argument and assigns it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns an object.
// The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.

Notes:

// There's no need to add the ability to validate the uniqueness of the SKU code. Given the current description, it's possible that a duplicate will exist.
// Each required piece of information for an item corresponds to one property.
// If any of the information provided is not valid, the item creator returns an object with a notValid property with a value of true.
// The created item objects should not have any methods/properties on them other than the required information above and those inherited from Object.prototype.
// You may add methods to the item manager as you deem necessary.

- item creator
  - ensures all information of item is present and valid
- items manager 
  - creates items
  - updates info of items
  - deletes items
  - query info about items
- reports manager 
  - generates reports of an item or items
  - specific items are report objects 

ITEM
----

SKU:
- unique id of product
- first 3 letters of item and 2 letters of category
- if item name is 2 words and 1st word is 2 letters, take next word first letter

ITEM NAME:
- minimum 5 characters
- spaces are not characters
- ex: tea cup (valid) / pen (invalid)

CATEGORY:
- minimum 5 character
- only 1 word

QUANTITY:
- cannot be empty
- valid number will be provided

ITEM MANAGER
------------

CREATE:
- creates new item
- return false if creation unsuccessful

UPDATE:
- SKU and object as arguments 
- updates any info on item 
- valid values will be provided 

DELETE:
- accepts SKU
- deletes item from list

ITEMS:
- list of all items

INSTOCK:
- list items with quantity > 0

ITEMSINCATEGORY:
- list items for given category

REPORTS MANAGER
---------------

INIT:
- accepts item manager object
- assigns object to 'items' property

CREATEREPORTER:
- accepts SKU and returns object
  - return object has 1 method 
    - itemInfo
      - logs properties of object as 'k/v' pairs

REPORTINSTOCK:
- log in stock items as comma seperated values 

ItemManager.create('basket ball', 'sports', 0);
ItemManager.create('asd', 'sports', 0);         // invalid item 
ItemManager.create('soccer ball', 'sports', 5); 
ItemManager.create('football', 'sports');       // invalid item
ItemManager.create('football', 'sports', 3);
ItemManager.create('kitchen pot', 'cooking items', 0); 
ItemManager.create('kitchen pot', 'cooking', 3); 

ItemManager.items; // returns list of items

ReportManager.init(ItemManager);
ReportManager.reportInStock(); // soccer ball, football, kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock(); // returns item objects for football and kitchen pot

ReportManager.reportInStock(); // football, kitchen pot

ItemManager.itemsInCategory('sports'); // returns list with item objects for basket ball, soccer ball and football

ItemManager.delete('SOCSP');
ItemManager.items;

let ItemManager = function(name, category, quantity) {
  if (name.length < 5) {
    
  }
}