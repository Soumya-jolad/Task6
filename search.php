<?php
include 'db.php';
header('Content-Type: application/json');

if (!isset($_GET['id']) || empty($_GET['id'])) {
    echo json_encode(["error" => "Product ID is required"]);
    exit;
}

$productID = intval($_GET['id']);

$stmt = $conn->prepare("SELECT * FROM products WHERE id = ?");
$stmt->bind_param("i", $productID);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();
    echo json_encode($product);
} else {
    echo json_encode(["error" => "Product not found"]);
}

$stmt->close();
$conn->close();
?>
