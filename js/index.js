
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
// Function to show the modal and start the animation
function showModal() {
    const modal = document.getElementById("downloadModal");
    const animation = document.getElementById("downloadAnimation");

    modal.style.display = "block";
    
    // Add the animation class to start the animation
    animation.classList.add("animate-dots");

    setTimeout(() => {
        hideModal(); // Hide the modal after 3 seconds
    }, 3000);
}

// Function to hide the modal and stop the animation
function hideModal() {
    const modal = document.getElementById("downloadModal");
    const animation = document.getElementById("downloadAnimation");

    modal.style.display = "none";
    
    // Remove the animation class to stop the animation
    animation.classList.remove("animate-dots");

    // Show the "Download Successful!" message
    document.getElementById("downloadSuccessMessage").style.display = "block";
}

// Attach event listeners to the trigger button and close button
document.getElementById("downloadButton").addEventListener("click", showModal);
document.getElementById("closeModal").addEventListener("click", hideModal);

