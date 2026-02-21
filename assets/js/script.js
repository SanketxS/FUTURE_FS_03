const menuItems = [
  { name: 'Flat White', desc: 'Double ristretto, silky milk, caramel finish.', price: '₹320', tag: 'Coffee' },
  { name: 'Drip of the Day', desc: 'Single-origin rotating daily. Clean, bright, honest.', price: '₹260', tag: 'Coffee' },
  { name: 'Chili Mocha', desc: 'Cacao, ancho chili syrup, cinnamon dust.', price: '₹380', tag: 'Specials' },
  { name: 'Matcha Tonic', desc: 'Ceremonial matcha, yuzu tonic, citrus oil.', price: '₹380', tag: 'Tea' },
  { name: 'Lavender London Fog', desc: 'Earl Grey, house lavender syrup, steamed oat.', price: '₹320', tag: 'Tea' },
  { name: 'Turmeric Honey Latte', desc: 'Anti-inflammatory blend, raw honey, cracked pepper.', price: '₹380', tag: 'Specials' },
  { name: 'Cardamom Bun', desc: 'Braided pastry, brown sugar cardamom filling.', price: '₹260', tag: 'Bites' },
  { name: 'Savory Feta Scone', desc: 'Herb scone, feta crumble, sesame glaze.', price: '₹260', tag: 'Bites' },
  { name: 'Seasonal Galette', desc: 'Rotating fruit, flaky crust, vanilla bean.', price: '₹320', tag: 'Bites' },
  { name: 'Sparkling Cascara', desc: 'Cascara reduction, bubbles, grapefruit peel.', price: '₹320', tag: 'Specials' },
];

const filtersContainer = document.getElementById('menu-filters');
const grid = document.getElementById('menu-grid');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

function renderFilters() {
  const tags = ['All', ...new Set(menuItems.map((item) => item.tag))];
  tags.forEach((tag, idx) => {
    const button = document.createElement('button');
    button.textContent = tag;
    if (idx === 0) button.classList.add('active');
    button.addEventListener('click', () => {
      document.querySelectorAll('.filters button').forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      renderMenu(tag === 'All' ? null : tag);
    });
    filtersContainer.appendChild(button);
  });
}

function renderMenu(filterTag = null) {
  grid.innerHTML = '';
  const items = filterTag ? menuItems.filter((item) => item.tag === filterTag) : menuItems;
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'menu-card reveal';
    card.innerHTML = `
      <div class="pill">${item.tag}</div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <span class="price">${item.price}</span>
    `;
    grid.appendChild(card);
  });
  observeReveals();
}

function handleSmoothScroll() {
  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          navLinks.classList.remove('open');
        }
      }
    });
  });
}

function handleNavToggle() {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function handleReserveForm() {
  const form = document.querySelector('.reserve-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    alert(`Thanks, ${name || 'friend'}! We received your request.`);
    form.reset();
  });
}

renderFilters();
renderMenu();
handleSmoothScroll();
handleNavToggle();
observeReveals();
handleReserveForm();
