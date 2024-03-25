// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Add student ID and name dynamically
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = "Student ID: 200556037, Arvinder Singh Mehra";

    // Function to handle order button click
    document.getElementById('orderButton').addEventListener('click', function () {
        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);

        const pizza = new Pizza(size, crust, toppings);
        displayPizzaDescription(pizza);
    });
});

// Pizza class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
}

// Function to display pizza description
function displayPizzaDescription(pizza) {
    const pizzaDescription = document.getElementById('pizzaDescription');
    pizzaDescription.innerHTML = `
        <h2>Your Pizza Order:</h2>
        <p><strong>Size:</strong> ${pizza.size}</p>
        <p><strong>Crust:</strong> ${pizza.crust}</p>
        <p><strong>Toppings:</strong> ${pizza.toppings.join(', ')}</p>
    `;
}
