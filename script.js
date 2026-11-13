// Dispara as animações (.run) quando cada bloco entra na tela.
const animados = document.querySelectorAll('.fx-blur, .fx-curtain, .fx-draw');
const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (semMovimento || !('IntersectionObserver' in window)) {
  animados.forEach((el) => el.classList.add('run'));
} else {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('run');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.35 });
  animados.forEach((el) => obs.observe(el));
}

// Barra fixa de agendamento no celular: aparece depois do hero.
const barra = document.querySelector('.barra-mobile');
const hero = document.querySelector('.hero');
if (barra && hero && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => barra.classList.toggle('visivel', !e.isIntersecting)).observe(hero);
}

// Cabeçalho: vidro enquanto está sobre a foto do hero, papel no resto da página.
const topo = document.querySelector('.topo');
if (topo && hero && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => topo.classList.toggle('topo--hero', e.isIntersecting), { rootMargin: '-90px 0px 0px 0px' }).observe(hero);
}

// Formulário: valida o WhatsApp e abre a conversa com a mensagem pronta.
const form = document.getElementById('form-agendar');
form?.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const nome = form.nome.value.trim();
  const whats = form.whats.value.replace(/\D/g, '');
  const campoWhats = form.whats.closest('.campo');
  const ajuda = document.getElementById('f-whats-ajuda');

  if (whats.length < 10 || whats.length > 11) {
    campoWhats.classList.add('campo--erro');
    form.whats.setAttribute('aria-invalid', 'true');
    ajuda.textContent = 'Faltam números. Use DDD + 9 dígitos, ex.: (38) 99999-0000.';
    form.whats.focus();
    return;
  }
  campoWhats.classList.remove('campo--erro');
  form.whats.removeAttribute('aria-invalid');
  ajuda.textContent = 'DDD + 9 dígitos.';

  // Modelo demonstrativo: a conversa abre no WhatsApp da Codetrax, nunca num número fictício.
  const msg = `Olá, Codetrax! Vi o modelo de site de dermatologia no portfólio e quero um site assim. ` +
    `(Testei o formulário como ${nome || 'visitante'}, unidade: ${form.unidade.value}.)`;
  window.open(`https://wa.me/5511947771128?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
});
