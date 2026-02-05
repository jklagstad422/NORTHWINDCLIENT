document.addEventListener("DOMContentLoaded", function() {

  const toastEl = document.getElementById('liveToast');
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { autohide: false });

  document.getElementById('discount-row').addEventListener('click', function(e){
    if (e.target.classList.contains('discount')) {
      e.preventDefault();

      document.getElementById('product').innerHTML = e.target.dataset['product'];
      document.getElementById('discountTitle').innerHTML = e.target.dataset['title'];
      document.getElementById('discountCode').innerHTML =
        "Discount Code: " + e.target.dataset['code'];

      toast.show();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      toast.hide();
    }
  });

});
