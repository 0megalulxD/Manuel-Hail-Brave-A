var inventory = [
    { id: 1, name: 'Human Adult', price: 5.00, stock: 5 },
    { id: 2, name: 'Sugar', price: 30.00, stock: 0 },
    { id: 3, name: 'Organs', price: 50000.00, stock: 20 },
    { id: 4, name: 'Dog', price: 1000.00, stock: 1 },
    { id: 5, name: 'Drugs', price: 200.00, stock: 50 }
];

function renderTable() {
    var tableBody = document.getElementById('inventoryTableBody');
    tableBody.innerHTML = '';

    for (var i = 0; i < inventory.length; i++) {
        var item = inventory[i];
        var stockText = item.stock > 0 ? item.stock : 'Out of Stock';
        var stockClass = item.stock > 0 ? '' : 'out-of-stock';
        tableBody.innerHTML +=
            '<tr>' +
            '<td>' + item.id + '</td>' +
            '<td>' + item.name + '</td>' +
            '<td>$' + item.price.toFixed(2) + '</td>' +
            '<td class="' + stockClass + '">' + stockText + '</td>' +
            '</tr>';
    }
}

document.getElementById('inventoryForm').onsubmit = function(e) {
    e.preventDefault();

    var name = document.getElementById('nameInput').value;
    var price = parseFloat(document.getElementById('priceInput').value);
    var stock = parseInt(document.getElementById('stockInput').value, 10);

    inventory.push({
        id: inventory.length + 1,
        name: name,
        price: price,
        stock: stock
    });

    renderTable();
    this.reset();
};

renderTable();