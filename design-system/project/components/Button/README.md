# Button

Botão quase reto que leva ao agendamento; o primário é a ação de cada bloco.

## Variantes

- **Primário**: fundo `malva-600`, texto `branco` (5.5:1), seta ↗ em SVG. Hover `malva-800`. Para "Agendar consulta".
- **Secundário**: contorno 1px `cacau-900`, sem fundo; hover `nude-100`. Para "Ver tratamentos".
- **Link**: `azul-carimbo` sublinhado, como escrito à caneta. Hover `cacau-900`. Para "ou fale pelo WhatsApp", sempre ao lado do primário. Sobre a foto escura do hero, o link fica `branco`.

## Medidas

- Altura 56px (link 48px), raio `raio-2`, estilo `botao` (Albert Sans Medium 15px).
- Padding 28px à esquerda e 24px à direita; gap de 12px até a seta.
- No mobile, o primário ocupa 100% da largura.

## Regras

- Um primário por bloco, com no máximo um link ao lado.
- Foco: `foco` (anel azul de 2px, afastado 2px).
- A seta é um ícone SVG, não o caractere ↗ (em algumas fontes ele vira emoji).
- Nada de pílula: o raio de 2px é o que dá cara de papel.
