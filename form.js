const submit = document.querySelector("#submit");
const form = document.querySelector(".form-box")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    form.reset();
})
