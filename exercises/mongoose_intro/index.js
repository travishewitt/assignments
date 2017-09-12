const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongeese', ()=> {
    console.log("connected to mongoose!");
});

const Schema = mongoose.Schema;

let mongeeseSchema = new Schema({
    interests: [String], 
    hopes: [String], 
    favoriteHoliday: String,
    isMarried: Boolean,
    jerseyNumber: Number,
    warcry: String
})

const MongeeseModel = mongoose.model("mongeese", mongeeseSchema);

function addMongoose(mongoose) {
    let newMongoose = new MongeeseModel(mongoose)
    newMongoose.save((err, mongoose) => {
        if(err) console.error(err);
        console.log(mongoose)
    })
}

// addMongoose({
//     interests: ["Fishing", "Motorcycling", "Crocheting", "Horse Polo"],
//     hopes: ["World Peace", "World Domination", "A Raise"], 
//     favoriteHoliday: "Halloween",
//     isMarried: false,
//     jerseyNumber: 7, 
//     warcry: "SIX!!!"
// })
// addMongoose({
//     interests: ["Crocheting"],
//     hopes: ["A Raise"], 
//     favoriteHoliday: "Christmas",
//     isMarried: true,
//     jerseyNumber: 00, 
//     warcry: "meh"
// })
// addMongoose({
//     interests: ["Whistling"],
//     hopes: ["World Peace"], 
//     favoriteHoliday: "Brunch",
//     isMarried: true,
//     jerseyNumber: 06, 
//     warcry: "Wahwah"
// })

function getMongeese(query) {
    MongeeseModel.find(query, (err, mongeese) => {
        if(err) console.error(err);
        console.log(mongeese);
    })
}

function deleteMongoose(id) {
    MongeeseModel.findByIdAndRemove(id, (err, mongoose) => {
        if(err) console.error(err);
        if(mongoose === null) console.log("404: NOT FOUND")
        console.log(mongoose)
    })
}

function editMongoose(id, editedMongoose) {
    MongeeseModel.findByIdAndUpdate(id, editedMongoose, {new: true}, (err, mongoose) => {
        if(err) console.error(err);
        if(mongoose === null) console.log("404: NOT FOUND")
        console.log(mongoose)
    })
}
getMongeese();
// editMongoose("59b716be909dd3b77a54fccd", {isMarried: true})

// deleteMongoose("59b718e9841d19b8f6e0b7dd")