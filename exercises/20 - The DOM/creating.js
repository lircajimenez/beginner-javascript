console.log("it works!");

const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a P";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// adding heading using insert adjacent element
const heading = document.createElement("h2");
heading.textContent = "Cool things";

myDiv.insertAdjacentElement("afterbegin", heading);

// creating list
const myList = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "three";
myList.appendChild(li);

document.body.insertAdjacentElement("afterbegin", myList);

const li5 = document.createElement("li");
li5.textContent = "five";
myList.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = "one";
myList.insertAdjacentElement("afterbegin", li1);

const li4 = document.createElement("li");
li4.textContent = "four";
li5.insertAdjacentElement("beforebegin", li4);

const li2 = document.createElement("li");
li2.textContent = "two";
li1.insertAdjacentElement("afterend", li2);
