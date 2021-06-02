const butts = document.querySelector(".butts");
const cool = document.querySelector(".cool");

const handleClick = () => {
  console.log("it got clicked");
};

butts.addEventListener("click", handleClick);
cool.addEventListener("click", handleClick);

butts.removeEventListener("click", handleClick);

// listening to multiple items

const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  console.log("You are buying it");
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

// console.log(buyButtons);
