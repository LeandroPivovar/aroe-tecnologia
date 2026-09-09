// header com borda ao rolar
const header = document.querySelector('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll(); addEventListener('scroll', onScroll, {passive:true});

// menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
});

document.documentElement.classList.add('js-reveal');

// revelação suave (fade + leve translateY, 200–300ms)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {rootMargin:'0px 0px -8% 0px', threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// formulário (sem backend ainda)
document.querySelector('form')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!f.nome.value.trim() || !f.email.value.trim()) { alert('Preencha nome e e-mail.'); return; }
  const corpo = `Nome: ${f.nome.value}%0AEmpresa: ${f.empresa.value}%0AAssunto: ${f.assunto.value}%0A%0A${f.mensagem.value}`;
  location.href = `mailto:contato@aroe.com.br?subject=Diagn%C3%B3stico%20Aroe&body=${corpo}`;
});
