// CONTACT FORM: check the fields when the user clicks Send
const form = document.querySelector("#contact-form");
const thanks = document.querySelector("#form-thanks");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            thanks.classList.remove("d-none");
            form.reset();
            form.classList.remove("was-validated");
        } else {
            thanks.classList.add("d-none");
            form.classList.add("was-validated");
        }
    });
}

// TOOLTIPS: Bootstrap only turns them on when you ask
const tips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tips.forEach(function (tip) {
new bootstrap.Tooltip(tip);
});