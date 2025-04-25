nodedocument.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Basic client-side validation (you should have more robust server-side validation)
        const title = document.getElementById('title').value.trim();
        const documentFile = document.getElementById('document').files[0];

        if (!title || !documentFile) {
            displayStatus('Please enter a title and select a document.', 'error');
            return;
        }

        // Simulate file upload (replace with actual server-side upload logic)
        simulateUpload();
    });

    function simulateUpload() {
        displayStatus('Uploading...', 'uploading');

        // Simulate a delay for the upload process
        setTimeout(function() {
            const isSuccess = Math.random() < 0.8; // Simulate success or failure

            if (isSuccess) {
                displayStatus('Upload successful!', 'success');
                uploadForm.reset(); // Clear the form
            } else {
                displayStatus('Upload failed. Please try again.', 'error');
            }
        }, 3000); // Simulate a 3-second upload
    }

    function displayStatus(message, className) {
        uploadStatus.textContent = message;
        uploadStatus.className = 'status-message ' + className; // Add the status class
    }
});