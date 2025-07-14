// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Create an object to map menu text to section class names
  const sectionMap = {
    "About": ".about-education",
    "Skills": ".skills-section",
    "Project": ".projects-section",
    "Contact Me": ".contact-section", // Corrected to include the dot for class selector
    "Service": ".projects-section",  // You can update to a different section if needed
    "CV": ".about-education" // Since CV download is there
  };


  const navItems = document.querySelectorAll("nav .right ul li");
  const hamburger = document.querySelector('.hamburger');
  const navRight = document.querySelector('nav .right'); // Select the .right div

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetSection = sectionMap[item.textContent.trim()];
      if (targetSection) {
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
          // Close the hamburger menu after clicking a link on mobile
          if (window.innerWidth <= 768) { // Check if it's a mobile device
            hamburger.classList.remove('active');
            navRight.classList.remove('active');
          }
        }
      }
    });
  });

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navRight.classList.toggle('active');
  });


  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message"); // Ensure you have an element with id="form-message" in your HTML to display messages

  if (form) { // Check if the form exists before adding event listener
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        if (msg) { // Check if msg element exists
          msg.textContent = "Thank you! Your message has been sent.";
        }
        form.reset();
      } else {
        if (msg) { // Check if msg element exists
          msg.textContent = "Oops! There was a problem.";
        }
      }
    });
  }

  window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (nav) { // Check if nav element exists
      if (window.scrollY > 50) {
          nav.classList.add('sticky');
      } else {
          nav.classList.remove('sticky');
      }
    }
  };
});
