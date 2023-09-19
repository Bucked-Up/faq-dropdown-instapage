const createDropdown = (id) => {
  const dropdownsWrapper = document.querySelector(`${id} .dropdowns`);

  const getParent = (question, classe) => {
    let parentSection = question.parentElement;
    while (!parentSection.classList.contains(classe))
      parentSection = parentSection.parentElement;
    return parentSection;
  };

  const itemAbsolute = getParent(dropdownsWrapper, "item-absolute");
  itemAbsolute.style.position = "relative";
  itemAbsolute.style.height = "100%";

  getParent(dropdownsWrapper, "section-block").style.height = "100%";

  document.querySelector(id).style.height = "100%";
};

const faqDropdownQuestions = document.querySelectorAll(".question");
faqDropdownQuestions.forEach((question, i) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  const currentQuestion = document.querySelectorAll(".question.active");
  currentQuestion.forEach((question) => {
    if (!question.contains(e.target)) question.classList.remove("active");
  });
});
