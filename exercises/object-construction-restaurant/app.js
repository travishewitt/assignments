var menu = [
    {
        dish: "Penne all'Arrabbiata",
        price: "$16",
        description: "House-made pasta, purple garlic, crushed tomatoes, dried local chilis"
    },
    {
        dish: "Veal Piccata",
        price: "$15",
        description: "Reduction of shallots, purple garlic, white wine, capers, local grass-fed veal, green beans"
    },
    {
        dish: "Lasagna",
        price: "$14",
        description: "Blistered cherry tomatoes, purple garlic, ground grass-fed veal and pork, house-made ricotta, sage from the garden"
    }
];

function Item(dish, price, description) {
    this.dish = dish;
    this.price = price;
    this.description = description;
}

var carbonara = new Item("Pasta Carbonara", "$15", "Local egg, black-pepper crusted pancetta, lemon, parsley from the garden, parmeggiano reggiano");
var eggplant = new Item("Eggplant Parmesan", "$16", "Panko breaded, deep-friend local eggplant, roma tomatoes, purple garlic, shallots, sage from the garden, house-made ricotta, ramps");

menu.push(carbonara, eggplant);

//for loop
//inner html appending
document.getElementById("itemNameTest").textContent = menu[0].dish;
document.getElementById("itemPriceTest").textContent = menu[0].price;
document.getElementById("itemDescriptTest").textContent = menu[0].description;
document.getElementById("itemName2").textContent = menu[1].dish;
document.getElementById("itemPrice2").textContent = menu[1].price;
document.getElementById("itemDescript2").textContent = menu[1].description;
document.getElementById("itemName3").textContent = menu[2].dish;
document.getElementById("itemPrice3").textContent = menu[2].price;
document.getElementById("itemDescript3").textContent = menu[2].description;
document.getElementById("itemName4").textContent = menu[3].dish;
document.getElementById("itemPrice4").textContent = menu[3].price;
document.getElementById("itemDescript4").textContent = menu[3].description;
document.getElementById("itemName5").textContent = menu[4].dish;
document.getElementById("itemPrice5").textContent = menu[4].price;
document.getElementById("itemDescript5").textContent = menu[4].description;
