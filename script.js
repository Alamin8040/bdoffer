const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show'));
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.offer-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');

    const type = filter.dataset.filter;
    cards.forEach(card => {
      card.style.display = type === 'all' || card.dataset.type === type ? 'block' : 'none';
    });
  });
});

document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const offer = button.dataset.offer;
    const phone = '8801000000000'; // এখানে নিজের WhatsApp নম্বর দিন
    const message = encodeURIComponent('আমি এই অফারটি নিতে চাই: ' + offer);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});
