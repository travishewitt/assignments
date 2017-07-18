var shopper = {
    name: "Travis",
    budget: 100,
    hungry: true,
    groceryCart: ["apples", "oranges", "peanut butter", "turkey burgers"],
    isShopperBroke: function (cost) {
       if (cost>this.budget){
           return "Travis is cannot afford";
       } else {
           return "Travis is in the clear";
       }
    }
}

console.log(shopper.isShopperBroke(85))

