// Step 2: Model the Inventory

let inventory = [
    {
        sku: "SKU-001",
        name: "Chocolate Brownie",
        price: 2.99,
        stock: 75
    },
    {
        sku: "SKU-002",
        name: "Double Chocolate Chunk Brownie",
        price: 3.99,
        stock: 50
    },
    {
        sku: "SKU-003",
        name: "Mint Chocolate Brownie",
        price: 2.99,
        stock: 65
    },
    {
        sku: "SKU-004",
        name: "Gluten Free Brownie",
        price: 3.50,
        stock: 95
    }
];

inventory.forEach(function(product){
    console.log(`${product.sku} | ${product.name} | $${product.price} | ${product.stock}`)
})

// Step 3: Manage Inventory Changes

inventory.push(
    {
        sku: "SKU-005",
        name: "Dubai Chocolate Brownie",
        price: 4.99,
        stock: 100
    }
);

let removed = inventory.pop();
console.log(`Removed Item: ${removed.name}`);

inventory[0].price = 1.99
inventory[2].stock = 85

inventory.forEach(function(product){
    console.log(`${product.sku} | ${product.name} | $${product.price} | ${product.stock}`)
})

// Step 4: Create and Process Orders

let orders = [
    {
        orderId: "001",
        items: [
            {
                sku: "SKU-001",
                qty: 20
            }
        ]
    },
    {
        orderId: "002",
        items: [
            {
                sku: "SKU-005",
                qty: 10
            }
        ]
    }
]