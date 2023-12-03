<?php
header('Content-Type: application/json');

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validate inputs
if (!$name || !$email || !$message) {
    echo json_encode(['success' => false, 'message' => 'Invalid input, please try again.']);
    exit;
}

// Prepare to email
$to = 'samantha.colin022@gmail.com'; // My email address
$subject = 'New Contact Us Form Submission';
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message: $message\n";

// Headers
$headers = "From: webmaster@example.com\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you for contacting us.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Email failed to send.'])
}