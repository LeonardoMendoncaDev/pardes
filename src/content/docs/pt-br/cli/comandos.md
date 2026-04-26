---
title: O comando
description: Detalhe do comando único da CLI — pardes init. O que faz, o que aparece no terminal, o que fica no projeto, e o que vai acontecer a seguir no seu agente de IA.
---

A CLI do PARDES tem propositadamente **um único comando**. A versão antiga tinha três (`init`, `intent`, `prompt`), e a entrevista mínima ainda era feita pela própria CLI antes do briefing ser entregue ao agente. Isso foi descartado: pesava demais para o dev e duplicava trabalho que o agente de IA, com o código à frente, faz melhor. A versão atual aplica a filosofia coreográfica até o fim — o dev faz `pardes init`, e o agente assume tudo.

## `pardes init`

O comando único faz, em sequência:

1. **Pergunta o idioma** (Português PT, Português BR ou English). É a única coisa que precisa de input no início, e fica registrada para próximas execuções no mesmo projeto.
2. **Mostra cada etapa nos bastidores** com um indicador `✓` à frente de cada uma à medida que conclui — detectar a *stack*, inferir se é *greenfield* ou *brownfield*, escrever os arquivos, montar o briefing-mestre, copiar para o *clipboard*. O dev acompanha o que está acontecendo sem ter que pensar.
3. **Pergunta o agente de IA que você costuma usar** — escolha múltipla com Claude Code, Gemini CLI, Aider, Codex CLI, Cursor, Windsurf, VS Code com Copilot, VS Code com Cline, ou *"outro / só copiar para o clipboard"*. Esta é a única outra interação do dev.
4. **Abre um terminal ou IDE** com o agente já rodando na pasta do projeto, conforme a escolha. Em alguns sistemas operacionais isso pode falhar — nesse caso, mostra como abrir manualmente.
5. **Imprime uma caixa final bem visível** dizendo claramente que o briefing está no clipboard e que seu único gesto é colar com `Cmd+V` (ou `Ctrl+V`) na janela do agente. Sem esse gesto manual nada acontece — por isso a caixa é destacada.

## O que fica no seu projeto

Numa pasta nova chamada `pardes/`:

- `pardes/_estado.md` — fonte única de verdade do estado atual. À medida que o projeto avança, é aqui que se anotam decisões, bloqueios e a fase corrente da cadeia de quinze passos.
- `pardes/intent.md` — esqueleto da Spec de Intenção, com placeholders. Ainda não está preenchido — o agente de IA vai preencher com você durante a conversa.
- `pardes/prompt-briefing.md` — o briefing-mestre completo, persistente. Está também no clipboard, mas se precisar recopiar mais tarde está aqui.
- `pardes/.config` — preferências do usuário (idioma, etc.).

## O que o agente faz a seguir

Quando colar o briefing na janela do agente, ele vai:

- Ler o estado atual do projeto e a *stack* detectada;
- Ler o esqueleto vazio de `intent.md`;
- Conduzir a **entrevista profunda** com você, pergunta a pergunta, ao longo do desenvolvimento normal — quem é o usuário, qual é a intenção, o que NÃO deve fazer (não-intenção), restrições conhecidas;
- Preencher o `intent.md` em colaboração com você, à medida que as respostas vão saindo;
- Manter o `_estado.md` atualizado quando você avança passos da cadeia.

## Comandos avançados

Para usuários que queiram pular partes do fluxo, dois comandos continuam disponíveis embora ocultos do `--help`:

- `pardes intent` — invoca apenas a entrevista mínima de quatro perguntas dentro da CLI (versão antiga, mantida para quem prefere capturar o "para quem é" e "qual a intenção" no terminal antes de chamar o agente).
- `pardes prompt` — invoca apenas a geração do briefing-mestre. Útil se mudou manualmente o `_estado.md` ou o `intent.md` e quer uma versão atualizada do briefing.

Esses dois comandos são opcionais. O fluxo recomendado é, e fica, `pardes init`.
