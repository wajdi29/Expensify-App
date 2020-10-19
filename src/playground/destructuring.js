//

// Object destructuring

//

// const person = {
//   name: "Wajdi",
//   age: 31,
//   location: {
//     city: "mourouj",
//     temp: 22,
//   },
// };
// const { name: firstName = "anonymous", age } = person;
// console.log(`${firstName} is ${age}`);
// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//   console.log(`its ${temperature} degree in ${city}`);
// }

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(`Publisher: ${publisherName}`);

//

// Array destructuring

//

// const adress = [
//   "1299 S Juniper street ",
//   "Philadelphia",
//   " Pennsylvania",
//   "19147",
// ];

// const [street, city, state, zip] = adress;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (iced)", "$3.00", "$2.50", "$5.75"];
const [Coffee, small, medium, big] = item;
console.log(`A big ${Coffee} costs ${big}`);
