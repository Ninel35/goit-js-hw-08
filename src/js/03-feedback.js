import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");


form.addEventListener("input", throttle(handlerFeedback, 500));

const feedback = {};

function handlerFeedback(evt) {
    
      feedback.email = evt.target.form.email.value,
     feedback.message = evt.target.form.message.value,
    

    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
    

}
if (localStorage.getItem("feedback-form-state") != null) {
    const storageFeedback = JSON.parse(localStorage.getItem("feedback-form-state"));

   form.elements.email.value = storageFeedback.email ?? "";
form.elements.message.value = storageFeedback.message ?? ""; 
}


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(evt.target.email);
  localStorage.removeItem("feedback-form-state");
  form.reset();
});
