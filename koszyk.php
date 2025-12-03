<?php
session_start(); // zaczynamy sesję, żeby przechowywać koszyk

// Ustaw nagłówek JSON
header('Content-Type: application/json');

// Pobierz dane POST z JS
$input = json_decode(file_get_contents('php://input'), true);

// Inicjalizacja koszyka w sesji
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$action = $input['action'] ?? '';
$response = ['status' => 'error', 'cart' => $_SESSION['cart']];

switch ($action) {
    case 'get':
        $response['status'] = 'success';
        $response['cart'] = $_SESSION['cart'];
        break;

    case 'add':
        if (isset($input['id'], $input['name'], $input['price'])) {
            // Sprawdź czy produkt już jest w koszyku
            $found = false;
            foreach ($_SESSION['cart'] as &$item) {
                if ($item['id'] == $input['id']) {
                    $item['quantity'] += 1;
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                $_SESSION['cart'][] = [
                    'id' => $input['id'],
                    'name' => $input['name'],
                    'price' => $input['price'],
                    'quantity' => 1,
                    'emoji' => $input['emoji'] ?? '💻'
                ];
            }
            $response['status'] = 'success';
            $response['cart'] = $_SESSION['cart'];
        }
        break;

    case 'update':
        if (isset($input['id'], $input['quantity'])) {
            foreach ($_SESSION['cart'] as &$item) {
                if ($item['id'] == $input['id']) {
                    $item['quantity'] = max(1, (int)$input['quantity']);
                    break;
                }
            }
            $response['status'] = 'success';
            $response['cart'] = $_SESSION['cart'];
        }
        break;

    case 'remove':
        if (isset($input['id'])) {
            $_SESSION['cart'] = array_filter($_SESSION['cart'], function($item) use ($input) {
                return $item['id'] != $input['id'];
            });
            // reset indexów
            $_SESSION['cart'] = array_values($_SESSION['cart']);
            $response['status'] = 'success';
            $response['cart'] = $_SESSION['cart'];
        }
        break;

    default:
        $response['message'] = 'Nieznana akcja';
        break;
}

echo json_encode($response);