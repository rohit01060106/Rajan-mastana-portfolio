// IMPORTANT:
// Put your WhatsApp number below in international format WITHOUT +, spaces or dashes.
// Example for an Indian number: 919876543210
const whatsappNumber = "91XXXXXXXXXX";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (whatsappNumber.includes("X")) {
        alert("Please add your WhatsApp number in script.js first.");
        return;
    }

    const text =
        `Hello Rajan Mastana!\n\n` +
        `Name: ${name}\n` +
        `Subject: ${subject}\n` +
        `Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    form.reset();
});
