<?php
header('Content-Type: application/json');

// Database connection setup
// ...

$data = json_decode(file_get_contents('php://input'), true);

// Validate and sanitize data
// ...

// Insert data into MySQL database
// ...

// Send a response back to React app
// ...

// Assuming $conn is your database connection
$sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $data['name'], $data['email'], $data['message']);
$stmt->execute();
