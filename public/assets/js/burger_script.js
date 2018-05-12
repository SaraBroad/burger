
$(document).ready(function () {

    $(".create-form").on("submit", function (event) {
        console.log("hello");
        event.preventDefault();
        var name = $("#burger-name").val().trim();
        console.log(name);

        var newBurger = {
            name: name,
            devoured: 0
        };
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                location.reload();
            }
        );
    });

    $(document).on("click", ".devour-btn", function (event) {
        var id = $(this).attr("data-burgerid");
        var newDevouer = 1;
        console.log(event);
        var newDevouerState = {
            devouered: newDevouer
        };

        // Send the PUT request.
        $.ajax({
            url: "burgers/" + id,
            type: "PUT",
            data: newDevouerState
        }).then(
            function (response) {
                console.log("changed devoured to", response);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
