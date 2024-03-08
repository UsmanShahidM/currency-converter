/*Q2*/
let a = "usman";
console.log("hello"+a);*/
/*Q3
let b="usman";
console.log(b.toUpperCase());

/*Q4 /*Q5 */

let Quote=" once said, Every action has a reaction";

var famous_person = "Albert Einstien";
var message = famous_person;
console.log(message+Quote);

/*Q6*/

var person = "\t talha \n";
console.log(person);
var person1 = "talha";
console.log(person1);

/*Q7,Q8*/

console.log(4+6);
console.log(4/6);
console.log(4*6);
console.log(4-6);
console.log(4%6);

/*Q9*/

const cr =" 7";
console.log("your fav number is"+cr);

/*Q10*/

console.log("comments are //,*//");


/*Q11/*Q12*/

let arr1=["mana","Saria","zuhaib"];
let messages1 = " i am not a racist";
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[0]+messages);
console.log(arr1[1]+messages);
console.log(arr1[2]+messages);

/*Q13*/


let arr2=["bike","car","plane"];
let messages = "i would like to own a ";
console.log(messages+arr2[0]);
console.log(messages+arr2[1]);
console.log(messages+arr2[2]);

/*Q14*/

let arr=["mana, ","saria, ","zuhaib"];
let messages = "i would like to invite you to a dinner at my place ";
console.log(messages+arr[0], messages+arr[1],messages+arr[2]);


/*Q15, Q16, Q17*/

let arr=[" mana, ","saria, ","zuhaib"," ahmed","ali","mubashir"];
let messages = "i would like to invite you to a dinner at my place \n";
console.log(arr[2]+" cant make to dinner unfortunately so")
arr.splice(2,1," labeeb,");
arr.unshift(" lydia,");
arr.splice(4,0, " alinda,");
arr.push(" qwerty");
console.log(messages+arr);

/*Q18*/

let placesToVisit: string[] = [
    "Tokyo",
    "Paris",
    "Machu Picchu",
    "Santorini",
    "New York City"
];


console.log("Original array:", placesToVisit);


console.log("Alphabetical order:", [...placesToVisit].sort());


console.log("Original array:", placesToVisit);


console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());


console.log("Original array:", placesToVisit);


placesToVisit.reverse();
console.log("Reversed array:", placesToVisit);


placesToVisit.reverse();
console.log("Original array:", placesToVisit);


placesToVisit.sort();
console.log("Sorted array:", placesToVisit);


placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse sorted array:", placesToVisit);

/*Q19*/
let dinnerGuests: string[] = [" mana, ", "saria, ", "zuhaib", " ahmed"];

console.log(`Number of dinner guests: ${dinnerGuests.length}`);

/*Q20*/

let Mountains: string[] = ["Mount Everest", "K2", "Makalu"];


console.log("List of mountains:");
for (let i = 0; i < Mountains.length; i++) {
    console.log((i + 1) + ". " + Mountains[i]);
}

/*Q21*/

let country1: { name: string } = { name: "United States" };
let country2: { name: string } = { name: "France" };
let country3: { name: string } = { name: "China" };


console.log("Country 1:", country1.name);
console.log("Country 2:", country2.name);
console.log("Country 3:", country3.name);

/*Q22*/

let mountains: string[] = ["Mount Everest", "K2", "Makalu"];


let indexOfMountain = mountains[10];


console.log("List of mountains:");
for (let i = 0; i < mountains.length; i++) {
    console.log((i + 1) + ". " + mountains[i]);
}

/*Q23*/
let a = 5;
let b = 10;
let c = 5;
let str1 = "hello";
let str2 = "world";


console.log("Is x == 5? prediction isTrue.");
console.log(a == 5);


console.log("Is y == 10? prediction isTrue.");
console.log(b == 10);


console.log("Is z == 3? prediction isFalse.");
console.log(c == 3);


console.log("Is x != y? prediction isTrue.");
console.log(a != b);


console.log("Is x < y? prediction isTrue.");
console.log(a < b);


console.log("Is x >= z? prediction isTrue.");
console.log(a >= c);


console.log("Is str1 == 'hello'? prediction isTrue.");
console.log(str1 == "hello");


console.log("Is str1 != str2? prediction isTrue.");
console.log(str1 != str2);


console.log("Is typeof x === typeof z? prediction isTrue.");
console.log(typeof a === typeof c);


console.log("Is typeof x === typeof str1? prediction isFalse.");
console.log(typeof a === typeof str1);

/*Q24*/
let str4 = "hello";
let str5 = "world";
let num1 = 10;
let num2 = 20;
let array = [1, 2, 3, 4, 5];


console.log("Test for equality with strings: 'hello' == 'hello'");
console.log(str1 == 'hello'); 
console.log("Test for inequality with strings: 'hello' != 'world'");
console.log(str1 != str2); 

console.log("Test using the lower case function: 'HELLO' converted to lowercase is 'hello'");
console.log(str1.toLowerCase() === 'hello'); 


console.log("Numerical test: 10 < 20");
console.log(num1 < num2); 
console.log("Numerical test: 20 >= 20");
console.log(num2 >= num2); 


console.log("Test using 'and' operator: 10 < 20 and 'hello' == 'hello'");
console.log(num1 < num2 && str1 == 'hello'); 
console.log("Test using 'or' operator: 10 > 20 or 'hello' != 'world'");
console.log(num1 > num2 || str1 != str2); 


console.log("Test whether '3' is in the array: [1, 2, 3, 4, 5]");
console.log(array.includes(3)); 


console.log("Test whether '6' is not in the array: [1, 2, 3, 4, 5]");
console.log(!array.includes(6)); 

/*Q25*/
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}

let alien_color1: string = 'yellow';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}

/*Q26*/
let alien_color2: string = 'green';

if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

let alien_colorElse: string = 'red';

if (alien_colorElse === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

/*Q27*/
let alien_color3: string = 'green';

if (alien_color3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("The player earned 15 points.");
}

let alien_color4: string = 'yellow';

if (alien_color4 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color4 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color4 === 'red') {
    console.log("The player earned 15 points.");
}
let alien_color5: string = 'red';

if (alien_color5 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color5 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color5 === 'red') {
    console.log("The player earned 15 points.");
}


/*Q28*/
let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

/*Q29*/

let favorite_fruits: string[] = ["apple", "banana", "mango"];

if (favorite_fruits.includes("saib/aaple")) {
    console.log("You really like apples");
}

if (favorite_fruits.includes("banana/kela")) {
    console.log("You really like bananas");
}

if (favorite_fruits.includes("aam/mango")) {
    console.log("You really like mangoes");
}

if (favorite_fruits.includes("musami/orange")) {
    console.log("You really like oranges");
} else {
    console.log("Oranges are not in your favorite fruits.");
}

if (favorite_fruits.includes("watermelon")) {
    console.log("You really like watermelon");
} else {
    console.log("Watermelon are not in your favorite fruits.");
}

/*Q30*/
let usernames: string[] = ["admin", "usman", "saria", "mana", "Bobby"];

if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Wsg admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in :).`);
        }
    }
} else {
    console.log("We need to find some users!");
}

/*Q31*/

let Username: string[] = [];


if (Username.length > 0) {
    
    for (let username of Username) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}


/*Q32*/

let current_users: string[] = ["admin", "usman", "saria", "mana", "Bobby"];
let new_users: string[] = ["Alice", "talha ", "Banda", "Joeey", "Ericster"];

for (let new_user of new_users) {
    let lower_new_user = new_user.toLowerCase();
    if (
        current_users.map(
            user => user.toLowerCase()).includes(lower_new_user
            )
        ) 
        {
        console.log(` ${new_user} is already taken Enter a new one.`);
    } else 
    {
        console.log(`Congratulations, ${new_user} is available.`);
    }
}


/*Q33*/
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
/*Q34*/

let favorite_pizzas: string[] = ["Pepperoni", "Fajjita" , "BBQ Chicken"];


console.log("Printing pizza names:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}


console.log("\nPrinting sentences about each pizza:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
/*Q35*/
let animals: string[] = ["dog", "cat", "magarmach"];


console.log("Animal names:");
for (let animal of animals) {
    console.log(animal);
}


console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");


/*Q36*/

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}


make_shirt(); 
make_shirt("medium"); 
make_shirt("small", "Hello, World!"); 

/*Q37*/

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}


describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

/*Q38*/

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}


console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));

/*Q40*/

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}


let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 19);
let album3 = make_album("Artist 3", "Album 3", 80);


console.log(album1);
console.log(album2);
console.log(album3);

/*Q41*/

function Magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}


let magicians: string[] = ["jahanzaib", "talha", "ujala"];


Magicians(magicians);

/*Q42*/

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}


make_great(magicians);


Magicians(magicians);

/*Q43*/

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}


let great_magicians = make_great([...magicians]);


Magicians(magicians);


Magicians(great_magicians);

/*Q44==============*/


function make_sandwich(...items: string[]) {
    console.log("You ordered a sandwich with:");
    for (let item of items) {
        console.log("- " + item);
    }
}


make_sandwich("chicken", "Cheese", "Lettuce");
make_sandwich("Turkey", "talbeena");
make_sandwich("fish");

/*Q45*/

function car_info(manufacturer: string, model: string, ...details: 
    { 
    [key: string]: any 
}[])
 {
    let car: 
    { 
        manufacturer: string, model: string, [key: string]: any

     } =
     {
        manufacturer: manufacturer,
        model: model
    };
    for (let detail of details) {
        for (let key in detail) {
            car[key] = detail[key];
        }
    }
    return car;
}


let car = car_info("Toyota", "Camry", color: "blue", year: 2022);
console.log(car);


