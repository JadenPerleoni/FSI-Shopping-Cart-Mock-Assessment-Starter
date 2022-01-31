let quantity = 1
let quantityTotal = document.querySelector('.total-quantity')


plusBtn = document.getElementById("quantity-up")
plusBtn.addEventListener("click",function() {
    quantity += 1
    quantityTotal.textContent = ("Quantity: " + quantity)
})

minusBtn = document.getElementById("quantity-down")
minusBtn.addEventListener("click",function() {
    if (quantity > 0) { 
        quantity -= 1
        quantityTotal.textContent = ("Quantity: " + quantity)
    }
})

