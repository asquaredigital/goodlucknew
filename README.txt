# Good Luck Care — Bootstrap homepage

This is a responsive Bootstrap 5.3 implementation based on the Figma desktop homepage and the 430px mobile frame.

## Run locally with XAMPP
1. Extract `good-luck-care-bootstrap.zip`.
2. Copy the `good-luck-care-bootstrap` folder into `C:\xampp\htdocs\`.
3. Start Apache in XAMPP.
4. Open `http://localhost/good-luck-care-bootstrap/`.

No Node.js or build step is required. Bootstrap and Google Fonts are loaded from CDNs, so an internet connection is needed for those resources.

## Files
- `index.html` — page markup and Bootstrap components
- `style.css` — brand styling and responsive adjustments
- `script.js` — mobile navigation behaviour, year and demo form validation
- `logo.png` — supplied Good Luck Care logo
- `assets/` — reserved for locally hosted approved photography and other brand assets

## Before publishing
- The supplied Good Luck Care logo is now used in the header and footer. Confirm it is the final approved brand asset.
- The photography currently uses Pexels CDN image URLs based on the photo IDs named in the Figma design. Confirm the licensing/usage rights and download approved images into `assets/` for production; then update the image `src` paths.
- The enquiry form is front-end only. Connect it to a secure PHP handler, add server-side validation, spam protection, secure email delivery and appropriate data handling.
- Replace all clearly marked placeholders with client-verified company, CQC, testimonial, team, address, email and registration details.
- Create and review the linked privacy, cookie, accessibility and complaints pages before launch.
- Add the official CQC widget and current rating only after verifying the correct provider/location details.

This implementation does not claim legal or regulatory compliance by itself. Validate the finished site and content before launch.


## Review notes
- The contact preference control now makes the matching phone or email field required in the browser. The form still does not submit enquiries until a server-side handler is connected.
- The privacy, cookie, accessibility and complaints links point to placeholder pages that must be written and approved before launch.
