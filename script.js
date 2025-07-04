document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      cards.forEach((card, cidx) => {
        if (cidx === idx) {
          card.classList.toggle('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });
}); 