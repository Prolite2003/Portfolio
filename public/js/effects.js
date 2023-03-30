function HideShow(x) {
  let Subjects = document.querySelectorAll("div.HiddenItem");

  Subjects.forEach((Subject) => {
    Subject.classList.remove("show");
  });

  document.getElementById(x).classList.add("show");
}

function ChangeProjectText(x) {
  let Texts = document.querySelectorAll("span.HiddenItem");

  Texts.forEach((Text) => {
    Text.classList.add("hide");
  });

  document.getElementById(x).classList.remove("hide");
}
