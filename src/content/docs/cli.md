---
title: A CLI do PARDES
description: Um único comando, pardes init, prepara tudo no projecto e entrega o briefing-mestre ao teu agente de IA. Filosofia coreográfica até ao fim — a CLI orquestra, o agente faz a entrevista profunda contigo no IDE.
---

<p class="cli-version-badge"><strong>v0.0.2</strong> · 26 Abril 2026 · <a href="https://github.com/LeonardoMendoncaDev/pardes-cli/releases">ver todas as versões</a></p>

PARDES é primeiro um método. A *CLI* é a ferramenta que esse método tem para entrar no teu projecto sem fricção. Em vez de leres a metodologia inteira antes de poderes começar, instalas o binário `pardes`, corres **um único comando** e o teu agente de IA — Claude Code, Cursor, Windsurf, Copilot Chat, Gemini CLI, Aider — recebe automaticamente um briefing denso que o transforma de executor em entrevistador.

## A filosofia: o coreógrafo

A intuição inicial era pôr a *CLI* a fazer uma entrevista longa contigo, com dezenas de perguntas. Foi descartada na primeira hora. O argumento que ganhou: *isso é pesado para o dev — imagina se está a inicializar PARDES numa funcionalidade simples*.

A versão actual leva esta filosofia até ao fim: a CLI **não te pergunta praticamente nada**. Detecta a *stack* sozinha, infere se é *greenfield* ou *brownfield*, monta o briefing-mestre, copia-o para o clipboard, e abre-te um terminal ou IDE com o agente da tua escolha já a correr. O teu único gesto é um `Cmd+V` final. PARDES deixa de ser entrevistador e passa a ser **coreógrafo**: rege o agente que tu já tens, em vez de competir com ele.

## O fluxo, em uma linha

Corre `pardes init` na pasta do projecto. Escolhes o idioma, vês cada etapa a ser preparada nos bastidores (todas com `✓` verde à frente quando concluem), respondes a uma única pergunta sobre qual agente de IA usas, e o `pardes` abre-te a janela certa com tudo a postos. A entrevista profunda — quem é o utilizador, qual a intenção, o que NÃO deve fazer, restrições — acontece a seguir entre ti e o agente, no editor, com o código à frente.

## Próximos passos

Para começares a usar agora, segue para [instalar a CLI](/cli/instalar/). Para perceberes em detalhe o que `pardes init` faz e o que fica no teu projecto, vai a [o comando](/cli/comandos/). Para ver casos concretos onde a CLI já foi usada, segue para [exemplos](/cli/exemplos/).

---

## Histórico de versões

A `pardes-cli` segue versionamento semântico. Todas as *releases* — com binários cross-platform, *checksums* e *changelog* automático — vivem em [github.com/LeonardoMendoncaDev/pardes-cli/releases](https://github.com/LeonardoMendoncaDev/pardes-cli/releases).
