<?php
// This script is specific to the user registration functionality. It includes the
// database connection and then proceeds with the specific logic for handling user
// registration.

header('Content-Type: application/json');



// Allow requests from a specific origin
header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace with your React app's URL

// Or, to allow requests from any origin (not recommended for production)
// header('Access-Control-Allow-Origin: *');

// Additional headers for CORS
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return only the headers and not the content
    // Only allow CORS if we're doing a GET, PUT, POST, or DELETE request
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) &&
            $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] === 'GET, POST, PUT, DELETE, OPTIONS') {
        header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace with your React app's URL
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }
    exit(0);
}




// Include the database connection file
$pdo = include 'database_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) && isset($data->password)) {
    // Data validation and sanitization
    // ...

    $hashedPassword = password_hash($data->password, PASSWORD_DEFAULT);

    try {
        // Database insertion with prepared statement
        $stmt = $pdo->prepare("INSERT INTO users (firstName, lastName, email, password, newsletterOptOut) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$data->firstName, $data->lastName, $data->email, $hashedPassword, $data->newsletterOptOut]);

        echo json_encode(["message" => "User successfully registered"]);
    } catch (PDOException $e) {
        // Handle errors, avoid exposing sensitive data
        http_response_code(500);
        echo json_encode(["message" => "Internal server error"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid data provided"]);
}
