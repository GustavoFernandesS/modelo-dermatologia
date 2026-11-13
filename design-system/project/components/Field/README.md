# Field

Campo de formulário com a label escrita como pergunta, no formulário curto de agendamento.

## Anatomia

- **Label**: Instrument Serif itálico 20/24 em `cacau-900`, escrita como pergunta ("Seu WhatsApp", "Onde prefere ser atendida(o)?"). Sempre visível.
- **Campo**: 52px, fundo `branco`, borda 1px `cacau-600` (contraste de controle acima de 3:1), raio `raio-2`, texto `corpo` 16px.
- **Ajuda**: `pequeno` em `cacau-600`, abaixo do campo.

## Estados

- Foco: borda 1.5px `azul-carimbo` + anel `foco`.
- Erro: borda 1.5px e mensagem em `erro`, com `aria-invalid` e `aria-describedby`. A mensagem diz como corrigir.

## Regras

- Três campos: nome, WhatsApp e unidade (Campinas, Valinhos ou on-line).
- `type="tel"`, `inputmode="tel"` e `autocomplete` corretos.
- Uma coluna no mobile.
