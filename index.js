// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Create an object to map menu text to section class names
  const sectionMap = {
    "About": ".about-education",
    "Skills": ".skills-section",
    "Project": ".projects-section",
    "Contact Me": "contact-section",
    "Service": ".projects-section",  // You can update to a different section if needed
    "CV": ".about-education" // Since CV download is there
  };


  const navItems = document.querySelectorAll("nav .right ul li");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetSection = sectionMap[item.textContent.trim()];
      if (targetSection) {
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });
});
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");

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
      msg.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      msg.textContent = "Oops! There was a problem.";
    }
  });
  window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

