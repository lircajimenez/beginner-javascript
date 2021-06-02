// Make a div
// add a class of wrapper to it
// put it into the body
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const div = document.createElement("div");
div.classList.add("wrapper");
document.body.appendChild(div);

const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;
div.innerHTML = ul;

//console.log(div);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement("img");
img.src = "https://picsum.photos/500";
img.width = 250;
img.height = 250;
img.alt = "Cute pupy.";
img.classList.add("cute");
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const divString = `
    <div class="myDiv">
        <p>P one</p>
        <p>P two</p>
    </div>
`;

//console.log(ul);
const ulElement = div.querySelector("ul");
console.log(ulElement);

// put this div before the unordered list from above

ulElement.insertAdjacentHTML("beforebegin", divString);

// add a class to the second paragraph called warning
// remove the first paragraph

const myDiv = div.querySelector(".myDiv");
console.log(myDiv.children);
myDiv.children[1].classList.add("warning");
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    </div>
    `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const divCards = document.createElement("div");
divCards.classList.add("cards");

console.log(divCards);

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
