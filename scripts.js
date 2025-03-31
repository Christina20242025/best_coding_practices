const practices = [
    "Practice 1: Use semantic HTML tags",
    "Practice 2: Ensure mobile responsiveness",
    "Practice 3: Follow DRY (Don't Repeat Yourself) principle",
    "Practice 4: Implement proper form validation",
    "Practice 5: Optimize images for web",
    "Practice 6: Use CSS for styling instead of inline styles",
    "Practice 7: Keep JavaScript code separate from HTML",
    "Practice 8: Use ARIA roles for accessibility",
    "Practice 9: Follow W3C standards",
    "Practice 10: Ensure proper contrast for text readability",
    "Practice 11: Use a CSS preprocessor (SASS, LESS)",
    "Practice 12: Minimize HTTP requests",
    "Practice 13: Use semantic class and ID names",
    "Practice 14: Use external style sheets and scripts",
    "Practice 15: Test website compatibility across different browsers"
];

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
        if (s.id === section) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
}

$(document).ready(function() {
    const practicesList = $('#practices-list');
    practices.forEach((practice, index) => {
        const li = $('<li></li>');
        const button = $('<button class="practice-btn"></button>')
            .text(practice)
            .click(function() {
                $(this).toggleClass('selected');
                updateSummary();
            });
        li.append(button);
        practicesList.append(li);
    });
});

function updateSummary() {
    let count = $(".practice-btn.selected").length;
    $("#count").text(count);

    // Dynamic message when success criteria is met
    if (count >= 12) {
        $("#success-message").text("Congratulations! You've met the success criteria (Over 12/15 best practices). Here's your reward!");
        fetchRandomAnimal();  // Fetch and display the random cute cat picture
    } else {
        $("#success-message").text("Keep it up! Select more practices to meet the success criteria.");
        $("#reward-image").hide();
    }
}

function fetchRandomAnimal() {
    $.ajax({
        url: "https://api.thecatapi.com/v1/images/search",  // Fetching a random cute cat image
        method: "GET",
        success: function(data) {
            let imageUrl = data[0].url;
            $("#reward-image").show().attr("src", imageUrl);
        }
    });
}
