document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    autohide: true,
    format: 'MM-dd'
  });

  const attentionSeekers = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
  const randomSeeker = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
  document.querySelector('h1').classList.add('animate__animated', `animate__${randomSeeker}`);

  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  document.getElementById('check-all').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const anyUnchecked = Array.from(checkboxes).some(c => !c.checked);
    checkboxes.forEach(c => {
      c.checked = anyUnchecked;
      c.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  document.querySelectorAll('.form-check-label').forEach(label => {
    label.addEventListener('mouseover', function() {
      const color = this.getAttribute('for');
      document.querySelector('h1').style.color = color;
    });
    label.addEventListener('mouseout', function() {
      document.querySelector('h1').style.color = '';
    });
  });

  document.getElementById('submit').addEventListener('click', function() {
    const checkedCount = document.querySelectorAll('.form-check-input:checked').length;
    if (checkedCount === 0) {
      const toastEl = document.getElementById('no-balloon-toast');
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  });
});