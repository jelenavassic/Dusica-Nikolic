<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email";
        exit;
    }


    $to = "jelenavasic0110@gmail.com";

    $subject = "New form submission from $name";

    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $email_message, $headers)) {
        echo "Email sent successfully";
        header('Location: /');
    } else {
        echo "Failed to send email";
    }
} else {
    echo "Invalid request";
}
?>