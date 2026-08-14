const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", async function(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);

  const response = await fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    formStatus.innerText = "Thank you! Your message has been sent.";
    contactForm.reset();
  } else {
    formStatus.innerText = "Oops! Something went wrong.";
  }
});
