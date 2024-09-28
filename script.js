// Interactive feature for the call-to-action button
const callToActionButton = document.querySelector(".call-to-action");
callToActionButton.addEventListener("click", () => {
  // Show an alert or open a modal with more information about the product
  alert("Learn more about our product!");
  // Alternatively, you can open a modal using a library like Bootstrap or create a custom modal
});

// Validate the contact form fields
const contactForm = document.querySelector("#contact form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  // Validate name field
  if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    return;
  }

  // Validate email field
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address");
    return;
  }

  // Validate message field
  if (messageInput.value.trim() === "") {
    alert("Please enter a message");
    return;
  }

  // If all fields are valid, submit the form
  contactForm.submit();
});

// Implement a back-to-top button
const backToTopButton = document.createElement("button");
backToTopButton.innerHTML = "↑";
backToTopButton.className = "back-to-top";
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show the back-to-top button when the user scrolls down the page
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
