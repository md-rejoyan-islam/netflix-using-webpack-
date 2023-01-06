const faqQuestion = document.querySelectorAll(".faq-question");
// accordion on off
faqQuestion.forEach((question) => {
  question.onclick = (e) => {
    if (e.target.nextElementSibling.classList.contains("hidden")) {
      e.target.nextElementSibling.classList.remove("hidden");
      e.target.children[0].classList.remove("rotate-45");
    } else {
      e.target.nextElementSibling.classList.add("hidden");
      e.target.children[0].classList.add("rotate-45");
    }
  };
});
