const submit = document.querySelector("#submit");
const form = document.querySelector(".form-box")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    if (form.checkValidity()) {
        form.reset()
        console.log("S")
    }
    else {
        form.reportValidity();
    }
})
