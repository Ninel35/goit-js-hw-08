
const form = document.querySelector(".feedback-form");


form.addEventListener("input", handlerFeedback);


function handlerFeedback(evt) {
    const feedback = {
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value,
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));

}
if (localStorage.getItem("feedback-form-state") != null) {
   form.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email ?? "";
form.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message ?? ""; 
}


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem("feedback-form-state");
  form.reset();
});
