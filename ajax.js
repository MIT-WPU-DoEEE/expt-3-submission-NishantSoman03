console.log("ajax.js is loaded");
function submitForm() {
    console.log("Submitting form..."); // Debugging Log
    $.ajax({
        url: "/test/FORM_VALIDATION/submit.php",
        type: "POST",
        data: $("#myForm").serialize(),
        dataType: "json",
        success: function (response) {
            if (response.status === "success") {
                alert(response.message);
                $("#myForm")[0].reset();
            } else {
                alert("Error: " + response.message);
            }
        },
        error: function () {
            alert("An error occurred while submitting the form.");
        }
    });
}