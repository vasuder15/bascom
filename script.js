$(document).ready(function(){
    $(".toggle-btn").click(function() {
        const content = $(this).next(".toggle-content");  // Select the next sibling element with the class toggle-content

        content.slideToggle(300);  // Slide toggle effect for showing/hiding content

        // Toggle the + and - icon
        if ($(this).text().startsWith("+")) {
            $(this).text($(this).text().replace("+", "-"));
        } else {
            $(this).text($(this).text().replace("-", "-"));
        }
    });
});

$(document).ready(function(){
    $("#viewMore").click(function(){
        $(".extra-content").toggle(); // Toggle the visibility of the extra content
        // Change the text from "View More" to "View Less" and vice versa
        if ($(this).text() === "View More...") {
            $(this).text("View Less...");
        } else {
            $(this).text("View More...");
        }
    });
});
