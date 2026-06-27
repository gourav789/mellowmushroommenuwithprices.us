/* ════════════════════════════════════════
   MENU DATA — All 83 items for search
════════════════════════════════════════ */
const MENU_DATA = [
  // PIZZA — Signature
  { name:"House Special", cat:"Pizza", price:"~$24+", img:"./Images/House Special.avif", section:"#pizza" },
  { name:"Super Pepp", cat:"Pizza", price:"~$22+", img:"./Images/Super Pepp.avif", section:"#pizza" },
  { name:"Mighty Meaty", cat:"Pizza", price:"~$25+", img:"./Images/Mighty Meaty.avif", section:"#pizza" },
  { name:"Veg Out", cat:"Pizza", price:"~$22+", img:"./Images/Veg Out.avif", section:"#pizza" },
  { name:"Funky Q Chicken", cat:"Pizza", price:"~$24+", img:"./Images/Funky Q Chicken.avif", section:"#pizza" },
  { name:"Great White", cat:"Pizza", price:"~$23+", img:"./Images/Great White.avif", section:"#pizza" },
  { name:"Holy Shiitake", cat:"Pizza", price:"~$23+", img:"./Images/Holy Shiitake.avif", section:"#pizza" },
  { name:"Maui Wowie", cat:"Pizza", price:"~$24+", img:"./Images/Maui Wowie.avif", section:"#pizza" },
  { name:"Pacific Rim", cat:"Pizza", price:"~$24+", img:"./Images/Pacific Rim.avif", section:"#pizza" },
  { name:"Pepperoni", cat:"Pizza", price:"~$18+", img:"./Images/Pepperoni.avif", section:"#pizza" },
  { name:"Cheese Pizza", cat:"Pizza", price:"~$15+", img:"./Images/Cheese Pizza.avif", section:"#pizza" },
  { name:"Keep It Greek", cat:"Pizza", price:"~$23+", img:"./Images/Keep It Greek.avif", section:"#pizza" },
  { name:"Buffalo Chicken", cat:"Pizza", price:"~$24+", img:"./Images/Buffalo Chicken.avif", section:"#pizza" },
  { name:"House Pizza", cat:"Pizza", price:"~$20+", img:"./Images/House.avif", section:"#pizza" },
  { name:"Half & Half Pie", cat:"Pizza", price:"~$22+", img:"./Images/Half & Half Pie.avif", section:"#pizza" },
  { name:"Build Your Own Pizza", cat:"Pizza", price:"~$12+", img:"./Images/Build Your Own Pizza.avif", section:"#pizza" },
  { name:"French Bread Pizza", cat:"Pizza", price:"~$9+", img:"./Images/French Bread Pizza - Cheese or Pepperoni.avif", section:"#pizza" },
  // GF Pizza
  { name:"BYO Gluten-Free Pizza", cat:"Gluten-Free Pizza", price:"~$15+", img:"./Images/BYO Gluten-Free Pizza.avif", section:"#pizza" },
  { name:"Gluten-Free House Special", cat:"Gluten-Free Pizza", price:"~$26+", img:"./Images/Gluten-Free House Special.avif", section:"#pizza" },
  { name:"Gluten-Free Kosmic Karma", cat:"Gluten-Free Pizza", price:"~$25+", img:"./Images/Gluten-Free Kosmic Karma.avif", section:"#pizza" },
  { name:"Gluten-Free Mighty Meaty", cat:"Gluten-Free Pizza", price:"~$27+", img:"./Images/Gluten-Free Mighty Meaty.avif", section:"#pizza" },
  { name:"Gluten-Free Veg Out", cat:"Gluten-Free Pizza", price:"~$24+", img:"./Images/Gluten-Free Veg Out.avif", section:"#pizza" },
  // Vegan Pizza
  { name:"Vegan Cheese Pizza", cat:"Vegan Pizza", price:"~$17+", img:"./Images/Vegan Cheese Pizza.avif", section:"#pizza" },
  { name:"Vegan Veg-Out", cat:"Vegan Pizza", price:"~$24+", img:"./Images/Vegan Veg-Out.avif", section:"#pizza" },
  { name:"Vegan Build Your Own Pizza", cat:"Vegan Pizza", price:"~$14+", img:"./Images/Vegan Build Your Own Pizza.avif", section:"#pizza" },
  // CALZONES
  { name:"Build Your Own Calzone", cat:"Calzones", price:"~$12+", img:"./Images/Build Your Own Calzone.avif", section:"#calzones" },
  { name:"Steak Calzone", cat:"Calzones", price:"~$15+", img:"./Images/Steak Calzone.avif", section:"#calzones" },
  // APPETIZERS
  { name:"Pretzel Bites", cat:"Appetizers", price:"~$9+", img:"./Images/Pretzel Bites.avif", section:"#appetizers" },
  { name:"4 Mellow Rollz", cat:"Appetizers", price:"~$9+", img:"./Images/4 Mellow Rollz.avif", section:"#appetizers" },
  { name:"8 Mellow Rollz", cat:"Appetizers", price:"~$15+", img:"./Images/8 Mellow Rollz.avif", section:"#appetizers" },
  { name:"Greek Feta Rollz", cat:"Appetizers", price:"~$12+", img:"./Images/Greek Feta Rollz.avif", section:"#appetizers" },
  { name:"Cheese Bread", cat:"Appetizers", price:"~$9+", img:"./Images/Cheese Bread.avif", section:"#appetizers" },
  { name:"Spinach Artichoke Dip", cat:"Appetizers", price:"~$13+", img:"./Images/Spinach Artichoke Dip.avif", section:"#appetizers" },
  { name:"Magic Meatballs", cat:"Appetizers", price:"~$11+", img:"./Images/Magic Meatballs.avif", section:"#appetizers" },
  { name:"Dips", cat:"Appetizers", price:"~$4+", img:"./Images/Dips.avif", section:"#appetizers" },
  { name:"Parmesan Side", cat:"Appetizers", price:"~$5+", img:"./Images/Parmesan Side.avif", section:"#appetizers" },
  { name:"Tots", cat:"Appetizers", price:"~$7+", img:"./Images/Tots.avif", section:"#appetizers" },
  { name:"BBQ Chips", cat:"Appetizers", price:"~$3+", img:"./Images/BBQ Chips.avif", section:"#appetizers" },
  { name:"Regular Chips", cat:"Appetizers", price:"~$3+", img:"./Images/Regular Chips.avif", section:"#appetizers" },
  // WINGS
  { name:"5 Wings", cat:"Wings", price:"~$10+", img:"./Images/5 Wings.avif", section:"#wings" },
  { name:"10 Wings", cat:"Wings", price:"~$17+", img:"./Images/10 Wings.avif", section:"#wings" },
  { name:"15 Wings", cat:"Wings", price:"~$22+", img:"./Images/15 Wings.avif", section:"#wings" },
  { name:"5 Boneless Wings", cat:"Wings", price:"~$10+", img:"./Images/5 Boneless Wings.avif", section:"#wings" },
  { name:"10 Boneless Wings", cat:"Wings", price:"~$16+", img:"./Images/10 Boneless Wings.avif", section:"#wings" },
  { name:"15 Boneless Wings", cat:"Wings", price:"~$22+", img:"./Images/15 Boneless Wings.avif", section:"#wings" },
  { name:"4 Naked Boneless Wings", cat:"Wings", price:"~$8+", img:"./Images/4 Naked Boneless Wings.avif", section:"#wings" },
  { name:"Split Flavor Wings", cat:"Wings", price:"~$17+", img:"./Images/Split Flavor Wings.avif", section:"#wings" },
  { name:"Split Flavor Boneless Wings", cat:"Wings", price:"~$16+", img:"./Images/Split Flavor Boneless Wings.avif", section:"#wings" },
  { name:"Sauces", cat:"Wings", price:"N/A", img:"./Images/Sauces.avif", section:"#wings" },
  // SALADS
  { name:"Caesar Supreme", cat:"Salads", price:"~$13+", img:"./Images/Caesar Supreme.avif", section:"#salads" },
  { name:"Mellow Cobb", cat:"Salads", price:"~$14+", img:"./Images/Mellow Cobb.avif", section:"#salads" },
  { name:"House Salad", cat:"Salads", price:"~$9+", img:"./Images/House.avif", section:"#salads" },
  { name:"Asian Crunch", cat:"Salads", price:"~$14+", img:"./Images/Asian Crunch.avif", section:"#salads" },
  { name:"Apple Harvest", cat:"Salads", price:"~$13+", img:"./Images/Apple Harvest.avif", section:"#salads" },
  { name:"Keep It Greek Salad", cat:"Salads", price:"~$13+", img:"./Images/Keep It Greek.avif", section:"#salads" },
  { name:"Vegan Apple Harvest Salad", cat:"Vegan Salads", price:"~$13+", img:"./Images/Vegan Apple Harvest Salad.avif", section:"#salads" },
  { name:"Vegan Keep It Greek Salad", cat:"Vegan Salads", price:"~$13+", img:"./Images/Vegan Keep It Greek Salad.avif", section:"#salads" },
  { name:"Vegan Avocado Hoagie", cat:"Vegan", price:"~$13+", img:"./Images/Vegan Avocado Hoagie.avif", section:"#sandwiches" },
  // SANDWICHES
  { name:"Italian Hoagie", cat:"Sandwiches", price:"~$13+", img:"./Images/Italian Hoagie.avif", section:"#sandwiches" },
  { name:"Steak & Cheese Hoagie", cat:"Sandwiches", price:"~$14+", img:"./Images/Steak & Cheese Hoagie.avif", section:"#sandwiches" },
  { name:"Meatball Hoagie", cat:"Sandwiches", price:"~$13+", img:"./Images/Meatball Hoagie.avif", section:"#sandwiches" },
  { name:"Avocado Hoagie", cat:"Sandwiches", price:"~$13+", img:"./Images/Avocado Hoagie.avif", section:"#sandwiches" },
  { name:"Tempeh Hoagie", cat:"Sandwiches", price:"~$13+", img:"./Images/Tempeh Hoagie.avif", section:"#sandwiches" },
  { name:"California Club", cat:"Sandwiches", price:"~$14+", img:"./Images/California Club.avif", section:"#sandwiches" },
  { name:"All-American Smashburger", cat:"Sandwiches", price:"~$15+", img:"./Images/All-American Smashburger.avif", section:"#sandwiches" },
  // DESSERTS
  { name:"Mary Jane's Triple Chocolate Brownie", cat:"Desserts", price:"~$8+", img:"./Images/Mary Jane's Triple Chocolate Brownie.avif", section:"#desserts" },
  { name:"Gluten-Free Brownie", cat:"Desserts", price:"~$8+", img:"./Images/Gluten-Free Brownie.avif", section:"#desserts" },
  { name:"Peanut Butter Cookie", cat:"Desserts", price:"~$6+", img:"./Images/Peanut Butter Cookie.avif", section:"#desserts" },
  { name:"Triple Chocolate Chunk Cookie", cat:"Desserts", price:"~$6+", img:"./Images/Triple Chocolate Chunk Cookie.avif", section:"#desserts" },
  { name:"Sugar Cookie", cat:"Desserts", price:"~$5+", img:"./Images/Sugar Cookie.avif", section:"#desserts" },
  // DRINKS
  { name:"22 oz. Coke®", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Coke®.avif", section:"#drinks" },
  { name:"22 oz. Diet Coke®", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Diet Coke®.avif", section:"#drinks" },
  { name:"22 oz. Coke Zero®", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Coke Zero®.avif", section:"#drinks" },
  { name:"22 oz. Sprite®", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Sprite®.avif", section:"#drinks" },
  { name:"22 oz. Sweet Tea", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Sweet Tea.avif", section:"#drinks" },
  { name:"22 oz. Unsweet Tea", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Unsweet Tea.avif", section:"#drinks" },
  { name:"22 oz. Minute Maid Lemonade®", cat:"Drinks", price:"~$3+", img:"./Images/22 oz. Minute Maid Lemonade®.avif", section:"#drinks" },
  { name:"20 oz. Dasani® Water", cat:"Drinks", price:"~$3+", img:"./Images/20 oz. Bottled Dasani® Water.avif", section:"#drinks" },
  { name:"Gallon Sweet Tea", cat:"Drinks", price:"~$12+", img:"./Images/Gallon Sweet Tea.avif", section:"#drinks" },
  { name:"Gallon Unsweet Tea", cat:"Drinks", price:"~$12+", img:"./Images/Gallon Unsweet Tea.avif", section:"#drinks" },
  { name:"Gallon Lemonade", cat:"Drinks", price:"~$14+", img:"./Images/Gallon Lemonade.avif", section:"#drinks" },
  { name:"Red Bull Energy Drink", cat:"Drinks", price:"~$5+", img:"./Images/Red Bull.avif", section:"#drinks" },
  { name:"Red Bull Sugar Free", cat:"Drinks", price:"~$5+", img:"./Images/Red Bull Sugar Free.avif", section:"#drinks" },
  { name:"Red Bull Watermelon", cat:"Drinks", price:"~$5+", img:"./Images/Red Bull Watermelon.avif", section:"#drinks" },
  // KIDS
  { name:"Mac & Cheese", cat:"Kids Menu", price:"~$7+", img:"./Images/Mac & Cheese.avif", section:"#kids" },
];

/* ════════════════════════════════════════
   SEARCH FUNCTIONALITY
════════════════════════════════════════ */
(function() {
  const searchToggle  = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose   = document.getElementById('search-close');
  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchToggle || !searchOverlay) return;

  function openSearch() {
    searchOverlay.classList.add('is-open');
    setTimeout(() => searchInput && searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }
  function closeSearch() {
    searchOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (searchInput) { searchInput.value = ''; }
    if (searchResults) { searchResults.innerHTML = ''; searchResults.hidden = true; }
  }

  searchToggle.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      if (!q || q.length < 2) { searchResults.innerHTML = ''; searchResults.hidden = true; return; }
      const matches = MENU_DATA.filter(item =>
        item.name.toLowerCase().includes(q) || item.cat.toLowerCase().includes(q)
      ).slice(0, 10);
      if (!matches.length) {
        searchResults.innerHTML = '<div class="search-no-results">No results found. Try "pizza", "wings", or "calzone".</div>';
        searchResults.hidden = false; return;
      }
      searchResults.innerHTML = matches.map(item => `
        <div class="search-result-item" onclick="window.location.hash='${item.section.replace('#','')}';document.getElementById('${item.section.replace('#','')}') && document.getElementById('${item.section.replace('#','')}').scrollIntoView({behavior:'smooth'});setTimeout(closeSearch,300);">
          <img class="search-result-img" src="${item.img}" alt="${item.name}" loading="lazy">
          <div style="flex:1">
            <div class="search-result-name">${item.name}</div>
            <div class="search-result-cat">${item.cat}</div>
          </div>
          <div class="search-result-price">${item.price}</div>
        </div>
      `).join('');
      searchResults.hidden = false;
    });
  }

  window.closeSearch = closeSearch;
})();

/* ════════════════════════════════════════
   HEADER SCROLL BEHAVIOR
════════════════════════════════════════ */
(function() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const isHome = header.classList.contains('is-transparent-start');
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.remove('is-transparent');
      header.classList.add('is-scrolled');
    } else {
      if (isHome) header.classList.add('is-transparent');
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ════════════════════════════════════════
   MOBILE MENU
════════════════════════════════════════ */
(function() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop   = document.getElementById('mobile-backdrop');
  const closeBtn   = document.getElementById('mobile-close');
  if (!hamburger || !mobileMenu) return;

  function open() {
    mobileMenu.classList.add('is-open');
    backdrop && backdrop.classList.add('is-active');
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    mobileMenu.classList.remove('is-open');
    backdrop && backdrop.classList.remove('is-active');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', () => mobileMenu.classList.contains('is-open') ? close() : open());
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ════════════════════════════════════════
   ACCORDION
════════════════════════════════════════ */
(function() {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', function() {
      const panel = document.getElementById(this.getAttribute('aria-controls'));
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      // close all
      document.querySelectorAll('.accordion-trigger').forEach(b => {
        b.setAttribute('aria-expanded','false');
        const p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) p.classList.remove('is-open');
      });
      if (!isOpen) {
        this.setAttribute('aria-expanded','true');
        if (panel) panel.classList.add('is-open');
      }
    });
  });
})();

/* ════════════════════════════════════════
   REVEAL ANIMATIONS (IntersectionObserver)
════════════════════════════════════════ */
(function() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible')); return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* ════════════════════════════════════════
   BACK TO TOP
════════════════════════════════════════ */
(function() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
})();

/* ════════════════════════════════════════
   MENU TABS (sticky category tabs)
════════════════════════════════════════ */
(function() {
  const tabs = document.querySelectorAll('.menu-tab-btn');
  if (!tabs.length) return;
  const sections = document.querySelectorAll('.menu-category-section[id]');
  function updateActive() {
    let current = '';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 160) current = sec.id;
    });
    tabs.forEach(tab => {
      tab.classList.toggle('is-active', tab.dataset.target === current);
    });
  }
  window.addEventListener('scroll', updateActive, { passive:true });
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });
})();

/* ════════════════════════════════════════
   NEWSLETTER FORM
════════════════════════════════════════ */
(function() {
  document.querySelectorAll('.newsletter-form, .footer-newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      if (btn) { btn.textContent = '✓ Subscribed!'; btn.disabled = true; }
    });
  });
})();

/* FOOTER YEAR */
const fy = document.getElementById('footer-year');
if (fy) fy.textContent = new Date().getFullYear();
