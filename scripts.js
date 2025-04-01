// These all are an array of all the best coding practices
const practices = [
   "Practice 1: Correct Application of Semantic HTML Tags: The use of semantic HTML tags makes it possible for browsers, search engines, and other aid technologies to more easily comprehend the framework of the page content and its meaning.",
   "Practice 2: Mobile Optimization: Responsiveness to ensure usability in all devices and across all screen sizes can be achieved through the use of media queries, flexible grids, and relative units.",
   "Practice 3: Follow the DRY (Do not Repeat Yourself) principle: Changes should not be done in many locations. Functions, components, CSS classes should be used in place of class names for better redundancy, easy maintenance, and simplification.",
   "Practice 4: Perform necessary form validation: Valid and invalid data submissions should be filtered by client-side and server-side validation to protect and optimize the user experience",
   "Practice 5: Prepare images for the web: Set props on images to enable faster image loading by compression and changing to modern image formats (WebP, AVIF) for better performance.",
    "Practice 6: Use stylesheets instead of inline styles . Maintain HTML clearer by using internal or external CSS which enables better reusability and increased performance.",
    "Practice 7: shifting JavaScript to different files is best for code organization, maintainability, and caching purposes.", 
    "Practice 8: utilizing roles and ARIA attributes is helpful in boosting accessibility for screen readers and other assistive technologies.",
    "Practice 9: adherence to W3C standards ensures one’s web is usable on various browsers while being easy to maintain and provides good practices for web development.",
    "Practice 10: using an appropriate text-to-background contrast is helpful in reading and accessibility, particularly for people with vision impairment.",
    "Practice 11: using CSS preprocessors such as SASS or LESS add advanced features like variables, nested rules, and modular styles.", 
    "Practice 12: enhancing load time can be achieved by reducing HTTP requests through file combining, using CSS sprites, and leveraging caching.",
    "Practice 13: class and ID names should be meaningful in order to boost code readability, maintainability, and collaboration.",
    "Practice 14: performance can be improved and caching enabled by separating concerns through linking external stylesheets and scripts.",
    "Practice 15: testing on a variety of browsers guarantees that functionality, layout, and user experience remains the same."


];
//This is a function which will toggle the visibility between the different sections.
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


// This is the code where we will have to wait until the document is fully loaded.
$(document).ready(function() {
    const practicesList = $('#practices-list');

     // Each and every practice is looped through and a button is created dynamically.
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

// This is a function where the summary is updated for the selected pratices.
function updateSummary() {
    let count = $(".practice-btn.selected").length;
    $("#count").text(count);

    // This is a if condition where the user selects 12 or more pratices, it will show a success message along with a reward.
    if (count >= 12) {
        $("#success-message").text("Congratulations! You've met the success criteria (Over 12/15 best practices). Here's your reward!");
        fetchRandomAnimal();  // This will randomly fetch a display a cute cat picture.
    } else {
        $("#success-message").text("Keep it up! Select more practices to meet the success criteria.");
        $("#reward-image").hide();
    }
}
// This function will randomly fetch a random animal image from an API
function fetchRandomAnimal() {
    $.ajax({
        url: "https://api.thecatapi.com/v1/images/search",  // This will fetching a random cute cat picture
        method: "GET",
        success: function(data) {
            let imageUrl = data[0].url;
            $("#reward-image").show().attr("src", imageUrl);
        }
    });
}
