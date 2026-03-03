document.addEventListener("DOMContentLoaded", function () {

  const toastEl = document.getElementById('liveToast');

  // Prevent autohide
  const toast = new bootstrap.Toast(toastEl, {
    autohide: false
  });

  document.getElementById('discount-row').addEventListener('click', function (e) {

    if (e.target.closest('.discount')) {
      e.preventDefault();

      const link = e.target.closest('.discount');

      // Populate toast from data attributes
      document.getElementById('product').textContent =
        link.dataset.product;

      document.getElementById('discountTitle').textContent =
        link.dataset.title;

      document.getElementById('discountCode').textContent =
        "Discount Code: " + link.dataset.code;

      toast.show();
    }
  });

  // Close toast on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      toast.hide();
    }
  });

});
