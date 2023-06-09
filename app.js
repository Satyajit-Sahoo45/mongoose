const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/fruitDB');
}

const FruitsSchama = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name spacified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// FruitsSchama.methods.info = function info() {
//     const greeting = this.name
//         ? "Name : " + this.name + " Rating : " + this.rating + " Review : " + this.review
//         : "I don't have a name";
//     console.log(greeting);
// };

const Fruit = mongoose.model("Fruit", FruitsSchama);


const apple = new Fruit({
    name: 'Apple',
    rating: 5,
    review: "Great Food"
});
const orange = new Fruit({
    name: 'Orange',
    rating: 5,
    review: "Great One"
});
const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 7,
    review: "Awesome"
});

// Fruit.insertMany([apple, orange, kiwi], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Succesfully Added Fruits");
//     }
// });

// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         fruits.forEach((fruit) => {
//             console.log(fruit.name);
//         });
//     }
// });

const Fruits1 = new Fruit({
    name: "Apple",
    rating: 5,
    review: "Aweso"
});

Fruits1.save();

// console.log(Fruits1.name + " " + Fruits1.rating + " " + Fruits1.review);
// Fruits1.info();
// console.log(Fruits2.name + " " + Fruits2.rating + " " + Fruits2.review);
// Fruits2.info();


const peopleSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    favoriteFruit: FruitsSchama
});

const people = mongoose.model("people", peopleSchema);

const litchi = new Fruit({
    name: "Litchi",
    rating: 7,
    review: "Delicious"
});

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Delicious Food"
});

const people1 = new people({
    name: "Satyajit Sahoo",
    Age: 22
});
const people2 = new people({
    name: "Sabyasachi Sahoo",
    Age: 21
});
const people3 = new people({
    name: "Saroj Kanta Behera",
    Age: 20
});
const people4 = new people({
    name: "Sambit Sarup Sahoo",
    Age: 21,
    favoriteFruit: litchi
});

// people4.save();  //it save the value to people collection


// it save the value to the fruit collection
// litchi.save();
// mango.save();

// updating the favorite fruit of a user
// people.updateOne({name: "Satyajit Sahoo"}, {favoriteFruit: mango}, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully Updated favorite fruit");
//     }
// });

// people.insertMany([people1, people2, people3], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully Added Peoples");
//     }
// })


// used for traversing through the corresponding collection
// people.find({}, function (err, peoples) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         peoples.forEach((p) => {
//             console.log(p.name);
//         });
//     }
// });

// used for updating in collection
// people.updateOne({_id: "625c0c7fbd1975e0b9520c15"}, {name: "Biswajit Sahoo", Age: 17}, (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully Updated");
//     }
// });

// used for deleting only one item from the collection
// people.deleteOne({_id: "625c0f1198817c397e053f51"}, (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully deleted");
//     }
// });


// used for deleting many items from collection
// people.deleteMany({name: "Satyajit Sahoo"}, (err) => {
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log("Successfully Deleted Many Items");
//   }
// });