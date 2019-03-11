let reviewDateName = document.querySelectorAll(".review-block h2");
let reviewText = document.querySelectorAll(".review-block p");
let buttonNext = document.querySelector("#review-next");
let buttonPrev = document.querySelector("#review-prev");

console.log(reviewDateName);
console.log(reviewText);

buttonNext.addEventListener("click", function () {
  for (let i = 0; i < reviewDateName.length; i++) {
    if (!reviewDateName[i].classList.contains("hidden")) {
      reviewDateName[i].classList.add("hidden");
      if (i < reviewDateName.length - 1) {
        reviewDateName[i + 1].classList.remove("hidden");
      } else {
        reviewDateName[0].classList.remove("hidden");
      }
      break;
    }

  }
  
  for (let i = 0; i < reviewText.length; i++) {
    if (!reviewText[i].classList.contains("hidden")) {
      reviewText[i].classList.add("hidden");
      if (i < reviewDateName.length - 1) {
        reviewText[i + 1].classList.remove("hidden");
      } else {
        reviewText[0].classList.remove("hidden");
      }
      break;
    }

  }
  
});


buttonPrev.addEventListener("click", function () {
  for (let i = 0; i < reviewDateName.length; i++) {
    if (!reviewDateName[i].classList.contains("hidden")) {
      reviewDateName[i].classList.add("hidden");
      if (i > 0) {
        reviewDateName[i - 1].classList.remove("hidden");
      } else {
        reviewDateName[reviewDateName.length - 1].classList.remove("hidden");
      }
      break;
    }

  }
  
  for (let i = 0; i < reviewText.length; i++) {
    if (!reviewText[i].classList.contains("hidden")) {
      reviewText[i].classList.add("hidden");
      if (i > 0) {
        reviewText[i - 1].classList.remove("hidden");
      } else {
        reviewText[reviewText.length - 1].classList.remove("hidden");
      }
      break;
    }

  }
  
});

