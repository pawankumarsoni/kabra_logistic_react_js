export const getCartTotal = cartItems => {
    var total = 0;
    for(var i=0; i<cartItems.length; i++){
        total += parseInt(cartItems[i].qty, 10)*(cartItems[i].price);
    }
    return Math.round(total * 100) / 100;
}