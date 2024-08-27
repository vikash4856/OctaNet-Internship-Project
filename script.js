// Function to toggle the read more text in the About section
function toggleReadMore() {
    const moreText = document.getElementById('more-text');
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
    } else {
        moreText.classList.add('hidden');
    }
}

// Function to toggle the service details
function toggleServiceDetails(serviceId) {
    const serviceDetails = document.getElementById(serviceId);
    if (serviceDetails.classList.contains('hidden')) {
        serviceDetails.classList.remove('hidden');
    } else {
        serviceDetails.classList.add('hidden');
    }
}

// Function to scroll to a section
function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


// Contact Form Submission (simulated)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
