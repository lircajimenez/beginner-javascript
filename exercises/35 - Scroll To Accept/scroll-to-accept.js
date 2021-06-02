const scrollToAccept = () => {
  const terms = document.querySelector(".terms-and-conditions");
  const button = document.querySelector(".accept");

  if (!terms) {
    return; //quit
  }
  //   terms.addEventListener("scroll", (ev) => {
  //     console.log(ev);
  //   });

  const obCallback = (payload) => {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;

      //stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
    //animation for button to slide in/out
    // }else {
    //   button.disabled = true;
    // }
  };

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  //will obeserve for last element on the bottom
  ob.observe(terms.lastElementChild);
};

scrollToAccept();
