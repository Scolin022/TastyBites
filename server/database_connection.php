<?php
// This file is purely responsible for establishing and providing a PDO connection
// to the MySQL database. It's a reusable component that can be included in any
// PHP script that needs database interaction.

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

$host = 'localhost';
$db   = 'your_database_name';
$user = 'your_username';
$pass = 'your_password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Return the PDO instance
return $pdo;