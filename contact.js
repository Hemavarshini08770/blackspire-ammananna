"use strict";

/* Contact form: posts to server.js, which saves each enquiry as a row in
   data/blackspire-data.xlsx (sheet "Enquiries"). */
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

// contact.html?venture=reviveev pre-selects the venture being asked about
const venture = new URLSearchParams(location.search).get("venture");
if (venture) {
  form.elements.venture_id.value = venture;
  document.getElementById("ventureHint").textContent = "Enquiry about: " + venture;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  // Spam trap: real visitors never fill the hidden field
  if (form.elements.website.value) return;

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  message.textContent = "Sending…";
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        venture_id: form.elements.venture_id.value,
        name: form.elements.name.value,
        email: form.elements.email.value,
        topic: form.elements.topic.value,
        message: form.elements.message.value,
      }),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    message.textContent = "Thank you. Your enquiry has been received and saved.";
    form.reset();
  } catch (err) {
    message.textContent =
      "Sorry, your enquiry could not be saved. Make sure the site is running with “python server.py”, then try again.";
  } finally {
    button.disabled = false;
  }
});
