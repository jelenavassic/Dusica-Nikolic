<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email";
        exit;
    }

    // Set the recipient email address
    $to = "jelenavasic0110@gmail.com";

    // Set the email subject
    $subject = "New form submission from $name";

    // Build the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
} else {
    echo "Invalid request";
}
?>