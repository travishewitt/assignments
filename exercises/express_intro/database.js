const dolphin = require('uuid4');

const Database  = function () {
    this.items = []
}

Database.prototype.find = function() {
    return this.items
}

Database.prototype.findOne = function(id) {
    let retrievedItem;
    this.items.forEach((item) => {
        if(id === item._id) {
            retrievedItem = item;
        }
    })
    return retrievedItem
}

Database.prototype.save = function(item) {
    item._id = dolphin()
    this.items.push(item)
    return item
}

Database.prototype.findOneAndRemove = function(id) {
    let removedItem;
    this.items.forEach((item, index) => {
        if(id === item._id) {
            removedItem = this.items.splice(index, 1);
        }
    })
    return removedItem
}

Database.prototype.findOneAndUpdate = function(id, editedItem) {
    let newItem;
    this.items.forEach((item, index) => {
        if(id === item._id) {
            oldItem = this.items[index]
            newItem = Object.assign({}, oldItem, editedItem)
        }
    })
    return newItem
}


module.exports = Database