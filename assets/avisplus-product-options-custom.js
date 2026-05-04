
let interval = setInterval(function () {
  let apElements = document.querySelector('.avis-swatch-product-container');
  if (apElements){
    $('.btn-action.qty-cart').before($('.avis-swatch-product-container'));
    clearInterval(interval);
  }
}, 100);

function forceQuitInterval(){
  clearInterval(interval);
}

setTimeout(forceQuitInterval, 10000);