"use strict";

let questionEl = document.querySelectorAll(".question");
let question = Array.from(questionEl);

question.forEach((q) => {
   q.addEventListener("click", function () {
      this.classList.toggle("active-q");

      this.children[1].classList.toggle("active-arrow");

      this.nextElementSibling.classList.toggle("active-answer");
   });
});
