const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

   function toggle(id) {
    let input_toggle = document.getElementById(id);
    let password_input = document.getElementById(id.replace('_toggle', ''));
console.log(password_input);
if (password_input.type === 'password') {
    password_input.type = 'text'
    toggle_button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>`
} else {
    password_input.type = 'password'
    toggle_button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>`
}
} 








// Function to open the modal based on color
function openModal(color) {
    var modalId = `modal${color.charAt(0).toUpperCase() + color.slice(1)}`; // Construct modal ID
    var modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Display the modal
}

// Function to close all modals
function closeModal() {
    var modals = document.querySelectorAll('.overlay');
    modals.forEach(function(modal) {
        modal.style.display = "none"; // Hide each modal
    });
}

// Close the modal when clicking on the overlay
document.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.overlay');
    modals.forEach(function(modal) {
        if (modal.style.display === "flex" && !modal.contains(event.target)) {
            modal.style.display = "none";
        }
    });
});

// Close the modal when pressing the ESC key
document.addEventListener('keydown', function(event) {
    var modals = document.querySelectorAll('.overlay');
    modals.forEach(function(modal) {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
});

