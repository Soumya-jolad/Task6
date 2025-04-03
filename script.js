// Function to search for product details
function searchProduct() {
    let productID = document.getElementById('productID').value;

    if (!productID) {
        alert("Please enter a Product ID!");
        return;
    }

    fetch(`search.php?id=${productID}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                document.getElementById('productName').value = data.name;
                document.getElementById('productPrice').value = data.price;
                document.getElementById('productDescription').value = data.description;
            }
        })
        .catch(error => console.error("Fetch Error:", error));
}

// Function to update product details
function updateProduct() {
    let productID = document.getElementById('productID').value;
    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productDescription = document.getElementById('productDescription').value;

    if (!productID || !productName || !productPrice || !productDescription) {
        alert("Please fill all fields!");
        return;
    }

    fetch('update.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${productID}&name=${productName}&price=${productPrice}&description=${productDescription}`
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || data.error);
    })
    .catch(error => console.error("Update Error:", error));
}

// Function to reset form
function resetForm() {
    document.getElementById('productID').value = "";
    document.getElementById('productName').value = "";
    document.getElementById('productPrice').value = "";
    document.getElementById('productDescription').value = "";
}
