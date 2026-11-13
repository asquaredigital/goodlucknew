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
    const phoneInput = document.getElementById("telephone");
    const emailInput = document.getElementById("email");
    const preferenceHint = document.getElementById("contactPreferenceHint");
    const phoneChoice = document.getElementById("contactPhone");
    const emailChoice = document.getElementById("contactEmail");
    const phoneRequiredMark = document.querySelector(".required-mark");
    const emailRequiredMark = document.querySelector(".email-required-mark");
    const emailOptionalLabel = document.querySelector(".email-optional-label");

    function updateContactRequirements() {
      const preferEmail = emailChoice && emailChoice.checked;
      if (phoneInput) phoneInput.required = !preferEmail;
      if (emailInput) emailInput.required = !!preferEmail;
      if (phoneRequiredMark) phoneRequiredMark.classList.toggle("d-none", !!preferEmail);
      if (emailRequiredMark) emailRequiredMark.classList.toggle("d-none", !preferEmail);
      if (emailOptionalLabel) emailOptionalLabel.classList.toggle("d-none", !!preferEmail);
      if (preferenceHint) preferenceHint.textContent = preferEmail
        ? "An email address is required for an email response."
        : "A telephone number is required for a phone response.";
    }
    if (phoneChoice) phoneChoice.addEventListener("change", updateContactRequirements);
    if (emailChoice) emailChoice.addEventListener("change", updateContactRequirements);
    updateContactRequirements();
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
