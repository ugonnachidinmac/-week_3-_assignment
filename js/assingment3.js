// Quation__1

/* -------------------------------
 Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.
 -------------------------------*/

let name = "Ugonna Chidinma C.";         
let age = 30;          
let nationality = "Nigerian"; 

// Combine the values into a sentence
// let introduction = "Hi, my name is " + name + ". I am " + age + " years old and I am " + nationality + ".";

let introduction = `Hi, my name is  ${name}. I am ${age} years old and I am ${nationality}.`;
console.log(introduction);

// Display the introduction in the <p> with id="intro"
document.getElementById("intro").textContent = introduction;




// Quation__2

/* -------------------------------
 Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.
 -------------------------------*/

// Store a favorite quote or lyric
let favoriteQuote = `"Believe you can and you're halfway there."`;

// Convert the quote to uppercase
let upperQuote = favoriteQuote.toUpperCase(); // Changes all letters to uppercase

// Convert the quote to lowercase
let lowerQuote = favoriteQuote.toLowerCase(); // Changes all letters to lowercase

console.log(upperQuote);
console.log(lowerQuote);

// Show both versions in the page
document.getElementById("upper").textContent = upperQuote;
document.getElementById("lower").textContent = lowerQuote;





// Quation__3

/* -------------------------------------
 Take a word and rearrange it in reverse order, then log the reversed word.
 -------------------------------------*/

// Step 1: Store a word in a variable
let word = "stressed";

// Step 2: Reverse the word using split, reverse, and join
let reversed = word.split("").reverse().join("");

// Step 3: Log the reversed word to the console
console.log("Original word:", word);
console.log("Reversed word:", reversed);

// Step 4  Display it on the page
document.getElementById("reverse").textContent = "Reversed word: " + reversed;




// Quation__4

/* -------------------------------------
 Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
 -------------------------------------*/

// Store prices of 3 items
let item1 = 500;
let item2 = 750;
let item3 = 1050;

// Calculate the total price
let totalPrice = item1 + item2 + item3;

// Create a message to display
let priceMessage = "The total price of all 3 items is $" + totalPrice;

console.log(priceMessage)

// Display the message on the page
document.getElementById("total").textContent = priceMessage;
   



// Quation__5

/* -------------------------------------
 Find the average of 5 test scores stored in variables. Display the average with a message.
 -------------------------------------*/

// Store the test scores in variables
let score1 = 75;
let score2 = 80;
let score3 = 78;
let score4 = 62;
let score5 = 50;

// Add all scores and divide by 5 to get the average
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;

// Create a message
let averageMessage = "The average of the 5 test scores is: " + averageScore;

console.log(averageMessage)
// Display the message on the page
document.getElementById("average").textContent = averageMessage;




// Question__6

/* -------------------------------------
 Create an array of your 5 favorite foods. Display the first and last items in the array.
 -------------------------------------*/

// Step 1: Create an array of favorite foods
const favoriteFoods = ["Pizza", "Jollof Rice", "Fried Rice", "Beans", "Indomie"];

// Step 2: Use slice to get first and last items
const first = favoriteFoods.slice(0, 1);    
const last = favoriteFoods.slice(4, 5);     

// Step 3: Combine first and last into a new array
const mostFavorite = first.concat(last);        

// Step 4: Log it to the console
console.log(mostFavorite); 

// Step 5: Display it on the webpage
document.getElementById("foods").textContent = "Most Favorite foods: " + JSON.stringify(mostFavorite);




// Question__7
/* -------------------------------------
  Add two more food items to the list: one at the beginning and one at the end. Display the new list.
 -------------------------------------*/

// Step 1: Add a new food at the beginning and at the end
favoriteFoods.unshift("Burger");    // Add "Burger" at the beginning
favoriteFoods.push("Yam");       // Add "Yam" at the end

// Step 2: Log the updated array to the console
console.log(favoriteFoods);

// Step 3: Display the updated array on the webpage
document.getElementById("adds").textContent = "Updated list of favorite foods: " + JSON.stringify(favoriteFoods);




/* Questions 8–10:
 -------------------------------------
 Create three arrays:
 8.jssOne
 9.jssTwo
 10.jssThree
 Each array must contain 10 student names as string values.
 -------------------------------------*/

// Question 8: jssOne students
const jssOne = [
    "Amaka", "Chidi", "Blessing", "Tunde", "Mariam",
    "Samuel", "Ifunanya", "Bola", "Kemi", "Ibrahim"
  ];
  
  // Question 9: jssTwo students
  const jssTwo = [
    "Aisha", "Michael", "Esther", "David", "Ngozi",
    "Peter", "Joy", "Femi", "Ruth", "Emeka"
  ];
  
  // Question 10: jssThree students
  const jssThree = [
    "Helen", "John", "Ada", "Paul", "Grace",
    "Daniel", "Sarah", "Chris", "Zainab", "Tope"
  ];
  
  // Display jssOne in the console
  console.log("JSS One Students:", jssOne);
  console.log("JSS Two Students:", jssTwo);
  console.log("JSS Three Students:", jssThree);
  
  // Display on the webpage
  document.getElementById("jss1").textContent = "JSS One: " + jssOne.join(", ");
  document.getElementById("jss2").textContent = "JSS Two: " + jssTwo.join(", ");
  document.getElementById("jss3").textContent = "JSS Three: " + jssThree.join(", ");
  

