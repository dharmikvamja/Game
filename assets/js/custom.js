  
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
// document.addEventListener('click', function(event) {
//     var modals = document.querySelectorAll('.overlay');
//     modals.forEach(function(modal) {
//         if (modal.style.display === "flex" && !modal.contains(event.target)) {
//             modal.style.display = "none";
//         }
//     });
// });

// Close the modal when pressing the ESC key
document.addEventListener('keydown', function(event) {
    var modals = document.querySelectorAll('.overlay');
    modals.forEach(function(modal) {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
});

// copy id 
