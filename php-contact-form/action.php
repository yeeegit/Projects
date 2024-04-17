<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "Your Email";
        $subject = "From $name <$email>";
        $msg = "Name: $name \n\nEmail: $email \n\nPhone: $phone \n\nWebsite: $website \n\nMessage:\n\n$message";
        $sender = "From: $email";
        if (mail($receiver, $subject, $msg, $sender)) {
            echo "Message sent successfully.";
        } else {
            echo "Failed to send message.";
        }
    } else {
        echo "Please enter a valid email address.";
    }
} else {
    echo "Email and message fields are required.";
}