let animals = {
    names: ["arfus", "jake", "duke", "summer"],
    filtered: [],
    filterNames: function() {
        this.names.forEach((name) => {
            if (name.length === 4) {
                this.filtered.push(name);
            }
        })
    }
}


animals.filterNames();
console.log(animals.filtered)
