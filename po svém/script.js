document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const cartLink = document.getElementById('cart-link');
    const ordersLink = document.getElementById('orders-link');
    const mainContent = document.getElementById('main-content');
  
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.innerHTML = '<h2>leták</h2><p>     </p>';
      
    });
  
    cartLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.innerHTML = '<h2>nakupní košík </h2><p>košík je prázdný.</p>';
    });
  
    ordersLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.innerHTML = '<h2>historie objednávek</h2><p>zatím žádná objednávka.</p>';
    });
  });
  