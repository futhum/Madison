document.addEventListener('DOMContentLoaded', function() {
  var cart = document.getElementById('cart');
  var cartBox = document.getElementById('cart-box');
  var carBox_close = document.getElementById('cart-box__close');

  cart.addEventListener('click', function(e) {
    e.preventDefault();
    console.warn('ooo');
    if ('hidden'.indexOf(cartBox.className) > -1) {
      cartBox.classList.remove('hidden');
    }
  });

  carBox_close.addEventListener('click', function(e) {
    console.warn('xxx');
    e.stopPropagation();
    cartBox.classList.add('hidden');
  });
});