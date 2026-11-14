document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile menu after selecting a navigation link.
  const nav = document.getElementById("mainNav");
  if (nav && window.bootstrap) {
    nav.querySelectorAll("a.nav-link, a.nav-cta").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          const collapse = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });
          collapse.hide();
        }
      });
    });
  }

  // Front-end demonstration only. Connect this form to a secure server-side
  // endpoint (for example, PHP with server-side validation and email delivery)
  // before publishing. Do not send personal data to a static page.
  const form = document.getElementById("enquiryForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.classList.add("was-validated");
      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        if (status) status.textContent = "Please check the required fields and try again.";
        return;
      }
      if (status) {
        status.textContent = "The form layout is ready. Connect a secure server-side form handler before accepting enquiries.";
      }
    });
  }
});
