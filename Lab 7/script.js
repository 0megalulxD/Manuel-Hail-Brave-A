var inventoryManager = {
    products: [
        { 
            id: 1, 
            name: 'Human Adult', 
            price: 5.00, 
            stock: 5 
        },
        { 
            id: 2, 
            name: 'Brown Sugar', 
            price: 30.00,    
            stock: 0 
        },
        { 
            id: 3, 
            name: 'Black Organs', 
            price: 50000.00, 
            stock: 20 
        },
        { 
            id: 4, 
            name: 'Pink Dog', 
            price: 1000.00,     
            stock: 1        
        },
        { 
            id: 5, 
            name: 'Purple Drugs', 
            price: 200.00, 
            stock: 50 
        }
    ],

    renderTable: function() {
        var tableBody = document.getElementById('inventoryTableBody');
        tableBody.innerHTML = '';

        for (var i = 0; i < this.products.length; i++) {
            var item = this.products[i];
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
    },

    addProduct: function(newProduct) {
        newProduct.id = this.products.length + 1;
        this.products.push(newProduct);
        this.renderTable();
    }
};

document.getElementById('inventoryForm').onsubmit = function(e) {
    e.preventDefault();

    var newProduct = {
        name: document.getElementById('nameInput').value,
        price: parseFloat(document.getElementById('priceInput').value),
        stock: parseInt(document.getElementById('stockInput').value, 10)
    };

    inventoryManager.addProduct(newProduct);
    this.reset();
};

inventoryManager.renderTable();