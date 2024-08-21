/* src/components/AuthForm/AuthForm.module.css */
.authFormContainer {
  max-width: 399px;
  margin: 0 auto;
  margin-left: 476px; /* Adjusted margin-left */
  padding: 20px;
}

.authForm {
  display: flex;
  flex-direction: column;
}

.formGroup {
  margin-bottom: 15px;
}

.fieldWrapper {
  position: relative; /* To position the toggle button inside the field wrapper */
}

.formField {
  width: 399px;
  height: 48px;
  padding: 10px;
  border: 1px solid rgb(250, 250, 250);
  border-radius: 12px;
  color: rgb(250, 250, 250); /* Corrected RGB values */
  background-color: #0C0D0D; /* Assuming a dark background for contrast */
  margin-top: 5px; /* Added margin-top */
}

.invalid {
  border-color: red;
}

.errorMessage {
  color: red;
  font-size: 0.875em;
}

.submitButton {
  width: 145px;
  height: 47px;
  padding: 10px;
  background-color: #0EF387; /* Light green button */
  color: #0C0D0D; /* Dark color for the button text */
  border: none;
  border-radius: 40px;
  cursor: pointer;
}

.navigation {
  margin-top: 15px;
  margin-left: 0; /* Align navigation text with the form */
}

.navLink {
  color: rgb(250, 250, 250); /* Updated link color */
  text-decoration: none;
}

.togglePassword {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #007bff; /* Color of the toggle button */
  cursor: pointer;
  font-size: 16px;
}
