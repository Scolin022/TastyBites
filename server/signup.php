<?php
header('Content-Type: application/json');

// Database connection setup
// ...

$data = json_decode(file_get_contents('php://input'), true);

// Validate, sanitize, and hash password
// ...

// Insert data into MySQL database
// ...

// Send a response back to React app

$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);
$stmt->bind_param("sss", $data['username'], $data['email'], $hashedPassword);
$stmt->execute();