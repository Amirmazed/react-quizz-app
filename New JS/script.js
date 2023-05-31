const addProduct = () =>{
    const prod = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    console.log(prod, quantity)
    addToDb(prod, quantity);
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const addToDb = (prod, quantity) => {
    const cart = getStoredCart();
    cart[prod] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart))
}