CREATE DATABASE IF NOT EXISTS product_db;
USE product_db;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO products (name, price, description) VALUES
    ('Laptop', 50000, 'Gaming Laptop'),
    ('Phone', 20000, 'Android Phone'),
    ('Tablet', 15000, 'Touchscreen Tablet');
