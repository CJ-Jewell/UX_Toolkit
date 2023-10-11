
// Download Modal

    document.getElementById("DownloadModal").addEventListener("show.bs.modal", function () {
        // Simulate a download delay (you can replace this with your actual download logic)
        setTimeout(function () {
            // Show the "Download Successful" message and hide the loading animation
            document.getElementById("downloadSuccessMessage").style.display = "block";
            document.querySelector(".modal-body h4").style.display = "none";
        }, 3000); // Simulate a 3-second download
    });


// Download Modal status animation
// Get a reference to the scaling-dots container
const scalingDotsContainer = document.querySelector('.animate-dots');

// Function to stop the animation after a specified duration (in milliseconds)
function stopAnimation(duration) {
    // Set a timeout to remove the animation class after the specified duration
    setTimeout(() => {
        scalingDotsContainer.classList.remove('animate-dots');
    }, duration);
}

// Event listener for when the modal is shown
$('#DownloadModal').on('shown.bs.modal', function () {
    // Start the animation by adding the animation class
    scalingDotsContainer.classList.add('animate-dots');
    
    // Stop the animation after 3 seconds (3000 milliseconds)
    stopAnimation(3000);
});
