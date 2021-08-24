import { randomInteger } from './helpers.js'

randomInteger(1, 8);

let mapPins = [];
let houses = ["Гостинница", "Хостел", "Квартира", "Дом", "Общага", "Баня"];
let adresses = ["top:300px left:130px", "top:350px left:1700px", "top:400px left:2300px", "top:450px left:330px", "top:500px left:370px", "top:550px left:430px", "top:600px left:530px", "top:650px left:630px"];
let prices = [1200, 900, 1000, 1100, 800, 600, 500, 450];
let types = ["palace", "flat", "house", "bungalo"];
let roomses = [1, 2, 3, 4, 5, 6, 7, 8];
let guestses = [1, 2, 3, 4, 5, 6, 7, 8];
let checkins = ["12:00", "13:00", "14:00"];
let checkouts = ["12:00", "13:00", "14:00"];
let featureses = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
// let x = [300, 350, 400, 450, 500, 550, 600, 650,];
// let y = [130, 170, 230, 330, 370, 430, 530, 630,];

for (let index = 0; index < 8; index++) {
    let pin = {
        "author": {
            "avatar": "img/avatars/user01.png"
        },
        "offer": {
            "title": "Гостинница",
            "address": "top:400px, left:800px",
            "price": 1200,
            "type": "palace",
            "rooms": 3,
            "guests": 2,
            "checkin": "12:00",
            "checkout": "12:00",
            "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            "description": "some dscr",
        },
        "location": {
            "x": randomInteger(0, 400),
            "y": randomInteger(0, 800),
        }
    };
    pin.author.avatar = "img/avatars/user0" + randomInteger(1, 8) + ".png";
    pin.offer.title = houses[randomInteger(0, 5)];
    pin.offer.address = adresses[randomInteger(0, adresses.length - 1)];
    pin.offer.price = prices[randomInteger(0, prices.length - 1)];
    pin.offer.type = types[randomInteger(0, 5)];
    pin.offer.rooms = roomses[randomInteger(0, roomses.length - 1)];
    pin.offer.guests = guestses[randomInteger(0, 8)];
    pin.offer.checkin = checkins[randomInteger(0, 3)];
    pin.offer.checkout = checkouts[randomInteger(0, 3)];
    pin.offer.features = featureses[randomInteger(0, 6)];
    // pin.location.x = x[randomInteger(0, x.length - 1)];
    // pin.location.y = y[randomInteger(0, x.length - 1)];

    mapPins.push(pin);
};

// mapPins.forEach((item, index) => {
//     item.author.avatar = "img/avatars/user0" + (index + 1) + ".png"
// });

// console.log(mapPins)

export const data = mapPins;