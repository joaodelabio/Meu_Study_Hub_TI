(() => {
  const words = ['Segurança Cibernética.', 'Redes de Computadores.', 'Governança de TI.', 'Engenharia de Software.'];
  const el = document.getElementById('typed');
  let w = 0, c = 0, deleting = false;
  const tick = () => {
    if (!el) return;
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!deleting && c < word.length) c++;
    else if (deleting && c > 0) c--;
    else if (!deleting) { deleting = true; return setTimeout(tick, 1600); }
    else { deleting = false; w = (w + 1) % words.length; }
    setTimeout(tick, deleting ? 40 : 85);
  };
  tick();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((n) => io.observe(n));

  const links = document.querySelectorAll('#nav-menu a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('nav-menu');
  btn?.addEventListener('click', () => menu.classList.toggle('open'));
  links.forEach((l) => l.addEventListener('click', () => menu.classList.remove('open')));

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
