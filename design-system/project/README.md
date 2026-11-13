# Helena Vasconcelos Dermatologia

> Modelo de demonstração da Codetrax. A Dra. Helena Vasconcelos e os dados de contato são fictícios.

Design System da landing page da Dra. Helena Vasconcelos, dermatologista em Campinas e Valinhos (SP), com atendimento presencial e on-line. A página tem um único trabalho: levar a pessoa a **agendar uma consulta pelo WhatsApp**.

Design system criado no Figma (arquivo privado) (Fundamentos, Componentes e Direção visual).

## A ideia: receituário e carimbo

A composição segue a referência: foto grande no hero, título em sans fina com a segunda linha em serifada itálica, uma palavra gigante clara por seção, tom malva e muito respiro. O que é só da Helena vem do dia a dia de um consultório brasileiro:

- **O carimbo médico** é a marca: "Dra. Helena Vasconcelos · Médica dermatologista · CRM-SP 000000 · RQE 00000", em `azul-carimbo`, girado entre -4° e -6°, sobreposto à borda de uma foto ou ao receituário.
- **O receituário** organiza o que é sequência: as etapas da primeira consulta aparecem como itens de uma receita (1. Conversa, 2. Exame da pele, 3. Plano por escrito, 4. Retorno), com linhas tracejadas e o carimbo na assinatura.
- **A caneta**: anotações à mão (`caneta`, Caveat) em azul, com uma seta desenhada. Detalhe humano, nunca informação essencial.

## Cores

| Papel | Token | Hex | Uso |
| --- | --- | --- | --- |
| Principal | `malva-600` | `#8E5E57` | Botão primário, itálicos, números do receituário |
| Principal | `malva-800` | `#6E4540` | Hover do primário |
| Principal | `cacau-900` | `#2B1D1A` | Texto, foto escura do hero, rodapé |
| Secundária | `azul-carimbo` | `#2F3E8C` | Carimbo, caneta, links, foco |
| Secundária | `nude-300` | `#D9C3B8` | Palavra gigante, itálico do H1 sobre foto |
| Suporte | `papel` | `#F7F2EF` | Fundo da página |
| Suporte | `nude-100` | `#EFE4DE` | Seções alternadas, depoimentos, espaço de foto |
| Suporte | `branco` | `#FFFFFF` | Fichas, receituário, inputs |
| Suporte | `linha` | `#E3D4CC` | Linhas e contornos |
| Suporte | `cacau-600` | `#6F5A55` | Texto de apoio, borda de input |
| Estado | `estrela` / `erro` | `#9F7A3E` / `#A8251C` | Estrelas / erro |

**Proporção:** 70% papel, nude e branco; 20% cacau; 10% malva. O azul aparece só em pontos pequenos (carimbo, caneta, links): se ele virar fundo ou bloco, perde o sentido de tinta.

## Tipografia

| Nível | Estilo | Fonte | Desktop | Mobile |
| --- | --- | --- | --- | --- |
| Palavra gigante | `palavra-gigante` | Albert Sans Thin | 180/160 | oculta |
| H1 linha 1 | `hero` | Albert Sans Light | 72/76 | 40/44 |
| H1 linha 2 | `hero-italico` | Instrument Serif itálico | 76/76 | 42/44 |
| H2 linha 1 | `h2` | Albert Sans Light | 44/50 | 30/36 |
| H2 linha 2 | `h2-italico` | Instrument Serif itálico | 48/50 | 32/36 |
| Nome na ficha | `h3-ficha` | Instrument Serif | 30/34 | 26/30 |
| H4 | `h4` | Albert Sans Medium | 18/26 | 18/26 |
| Lead | `lead` | Albert Sans Light | 22/32 | 18/28 |
| Corpo | `corpo` | Albert Sans | 16/26 | 16/26 |
| Pequeno | `pequeno` | Albert Sans | 14/21 | 14/21 |
| Rótulo | `rotulo` | Albert Sans SemiBold, MAIÚSCULAS, +0.12em | 12/16 | 12/16 |
| Botão | `botao` | Albert Sans Medium | 15/20 | 15/20 |
| Citação | `citacao` | Instrument Serif itálico | 26/34 | 22/30 |
| Caneta | `caneta` | Caveat | 24/28 | 22/26 |

Títulos sempre em duas linhas: a primeira reta e leve, a segunda em itálico malva ("Sua primeira consulta, / *passo a passo.*").

## Componentes

- **Carimbo** (`components/Carimbo`): moldura dupla em `azul-carimbo`, nome em maiúsculas, especialidade, CRM e RQE. No máximo 2 por página.
- **Botão** (`components/Button`): primário em `malva-600` com ↗, raio de 2px, 56px de altura; secundário com contorno `cacau-900`; link sublinhado em `azul-carimbo`, como escrito à caneta.
- **Campo** (`components/Field`): label em Instrument Serif itálico, como uma pergunta escrita no papel; campo de 52px, raio de 2px, borda `cacau-600`; foco e links em azul.
- **Cards** (`components/Card`): ficha de tratamento (Nº e categoria, foto 4:3, nome em serifada, duas linhas de dados) e depoimento em `nude-100`.

## Estética

**Arredondamento.** `raio-0` no receituário e nas seções, `raio-2` em botões e campos, `raio-4` em fichas e fotos. Nada de pílula ou arco.

**Sombras.** Só `sombra-papel` no receituário, como uma folha sobre a mesa. O resto se separa por fundo (papel e nude-100) e por linhas.

**Espaçamento.** Base de 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Cabeçalho com 64px de margem lateral, hero com 32px (a foto quase encosta nas bordas), seções de conteúdo com 128px. Seções com 112px de padding vertical no desktop e 64px no mobile.

**Composição.** Assimétrica, como na referência: texto de um lado, foto deslocada do outro, carimbo atravessando a borda entre os dois. Evite grades de cards iguais logo no começo da página.

## Usabilidade e conversão

1. "Agendar consulta" no cabeçalho e no hero, com "ou fale pelo WhatsApp" ao lado.
2. Nota 5,0 do Google dentro do hero, em número grande.
3. CRM e RQE visíveis no carimbo e no rodapé (exigência da publicidade médica). Sem promessa de resultado.
4. Primeira consulta explicada passo a passo antes de pedir o agendamento.
5. Barra fixa de agendamento no mobile; alvos de toque de 48px ou mais.
6. Formulário de 3 campos: nome, WhatsApp e unidade.
7. Endereço e telefone antes do rodapé: Rua das Magnólias, 450, Cambuí, Campinas · (19) 9 0000-0000.
8. Contraste AA em todo texto, foco visível em azul, `prefers-reduced-motion` respeitado.

## Voz

Primeira pessoa, próxima e direta, como a Dra. Helena fala: "Atendo cada pessoa como uma consulta inteira, não como um procedimento." Frases curtas. Botões dizem o que acontece.

## Fotografia

Fotos reais da Dra. Helena em atendimento, com luz natural de janela, e detalhes de pele e de exame. Retângulos com `raio-4`. Por enquanto as fotos são espaços reservados com legenda; não use banco de imagem nem imagem gerada no lugar dela.

Ainda não há logotipo: use "Helena Vasconcelos" em Albert Sans Light com "dermatologia" em Instrument Serif itálico malva, e o carimbo como selo.
