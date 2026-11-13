# Modelo de site · Dermatologia

Landing page demonstrativa da [Codetrax](https://codetraxgf.com) para um consultório de dermatologia. A marca "Dra. Helena Vasconcelos", os registros (CRM/RQE), o endereço e os depoimentos são **fictícios**. As fotos são do Unsplash ([CREDITOS.md](CREDITOS.md)).

Todos os botões de WhatsApp e o formulário abrem uma conversa com a Codetrax, para que nenhum número fictício caia no WhatsApp de uma pessoa real.

## Conceito
Receituário e carimbo: o carimbo médico vira a marca, a primeira consulta aparece como itens de uma receita e anotações à caneta dão o toque humano. O design system está em `design-system/`.

## Técnico
- HTML, CSS e JS puros (`index.html`, `styles.css`, `script.js`), imagens WebP em `img/`.
- Sem dependências e sem etapa de build.
- `vercel.json` com cabeçalhos de segurança (CSP, nosniff, Referrer-Policy, Permissions-Policy, HSTS, bloqueio de iframe) e `noindex`, para o modelo não aparecer em buscas como se fosse uma clínica real.

## Rodar localmente
```bash
python -m http.server 5181
```
