<?php

include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $vendor_name = isset($_POST['vendor_name']) ? trim($_POST['vendor_name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $category = isset($_POST['category']) ? trim($_POST['category']) : '';

    if (
        empty($vendor_name) ||
        empty($email) ||
        empty($phone) ||
        empty($category)
    ) {
        die("Error: One or more fields are empty.");
    }

    $stmt = mysqli_prepare(
        $conn,
        "INSERT INTO vendors (vendor_name, email, phone, category)
         VALUES (?, ?, ?, ?)"
    );

    mysqli_stmt_bind_param(
        $stmt,
        "ssss",
        $vendor_name,
        $email,
        $phone,
        $category
    );

    if (mysqli_stmt_execute($stmt)) {
        echo "Vendor Added Successfully";
    } else {
        echo "Database Error: " . mysqli_error($conn);
    }

    mysqli_stmt_close($stmt);
}
?>