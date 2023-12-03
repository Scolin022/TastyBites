<?php

// email and name form fields used so far
$userEmail = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$userName = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
// anything else

// message to send
$message = "Hello, we have received your submission:\n";
$message = "Name: $userName\n";
// any other form fields as needed

// Headers for email
$headers = "From: your-email@example.com\r\n";
$headers .= "Reply-To: @userEmail\r\n";
$headers .= "CC: your-email@example.com\r\n";
$headers .="X-Mailer: PHP/" . phpversion();

// sends email to yourself
mail('samantha.colin022@gmail.com', 'New Form Submission', $message, $headers);

// send a copy to the user
mail('$userEmail', 'Copy of Your Form Submission', $message, $headers);

// Return a success message
echo json_encode(['Your form was submitted successfully' => true]);