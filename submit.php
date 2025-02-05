<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = ["status" => "error", "message" => "Invalid data."];

    // Sanitize input data
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, "phone", FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $aadhaar = filter_input(INPUT_POST, "aadhaar", FILTER_SANITIZE_STRING);
    $license = filter_input(INPUT_POST, "license", FILTER_SANITIZE_STRING);
    $history = filter_input(INPUT_POST, "history", FILTER_SANITIZE_NUMBER_INT);
    $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);
    $hometown = filter_input(INPUT_POST, "hometown", FILTER_SANITIZE_STRING);
    $state = filter_input(INPUT_POST, "state", FILTER_SANITIZE_STRING);

    // Validation
    if (empty($name) || strlen($name) > 30) {
        $response["message"] = "Invalid name.";
    } elseif (empty($phone) || !preg_match("/^\d{10}$/", $phone)) {
        $response["message"] = "Invalid phone number.";
    } elseif (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response["message"] = "Invalid email.";
    } elseif (empty($aadhaar) || !preg_match("/^\d{12}$/", $aadhaar)) {
        $response["message"] = "Invalid Aadhaar number.";
    } elseif (empty($license) || strlen($license) != 10) {
        $response["message"] = "Invalid driving license number.";
    } elseif (empty($history) || $history < 3) {
        $response["message"] = "Invalid driving history.";
    } elseif (empty($age) || $age < 21) {
        $response["message"] = "Invalid age.";
    } elseif (empty($hometown) || strlen($hometown) > 20) {
        $response["message"] = "Invalid hometown.";
    } elseif (empty($state) || strlen($state) > 15) {
        $response["message"] = "Invalid state.";
    } else {
        $response = ["status" => "success", "message" => "Form submitted successfully!"];
    }

    // Return JSON response
    header("Content-Type: application/json");
    echo json_encode($response);
    exit();
}
?>
