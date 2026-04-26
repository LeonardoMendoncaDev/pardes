---
title: A CLI do PARDES
description: Um único comando, pardes init, prepara tudo no projeto e entrega o briefing-mestre ao seu agente de IA. Filosofia coreográfica até o fim — a CLI orquestra, o agente faz a entrevista profunda com você no IDE.
---

<p class="cli-version-badge"><strong>v0.0.2</strong> · 26 de Abril de 2026 · <a href="https://github.com/LeonardoMendoncaDev/pardes-cli/releases">ver todas as versões</a></p>

PARDES é primeiro um método. A *CLI* é a ferramenta que esse método tem para entrar no seu projeto sem fricção. Em vez de ler a metodologia inteira antes de poder começar, você instala o binário `pardes`, roda **um único comando** e seu agente de IA — Claude Code, Cursor, Windsurf, Copilot Chat, Gemini CLI, Aider — recebe automaticamente um briefing denso que o transforma de executor em entrevistador.

## A filosofia: o coreógrafo

A intuição inicial era pôr a *CLI* a fazer uma entrevista longa com você, com dezenas de perguntas. Foi descartada na primeira hora. O argumento que ganhou: *isso é pesado para o dev — imagina se está inicializando PARDES numa funcionalidade simples*.

A versão atual leva essa filosofia até o fim: a CLI **não te pergunta praticamente nada**. Detecta a *stack* sozinha, infere se é *greenfield* ou *brownfield*, monta o briefing-mestre, copia para o clipboard, e abre um terminal ou IDE com o agente da sua escolha já rodando. Seu único gesto é um `Cmd+V` final. PARDES deixa de ser entrevistador e passa a ser **coreógrafo**: rege o agente que você já tem, em vez de competir com ele.

## O fluxo, em uma linha

Rode `pardes init` na pasta do projeto. Escolhe o idioma, vê cada etapa sendo preparada nos bastidores (todas com `✓` verde à frente quando concluem), responde a uma única pergunta sobre qual agente de IA usa, e o `pardes` abre a janela certa com tudo pronto. A entrevista profunda — quem é o usuário, qual a intenção, o que NÃO deve fazer, restrições — acontece a seguir entre você e o agente, no editor, com o código à frente.

## Próximos passos

Para começar a usar agora, siga para [instalar a CLI](/pt-br/cli/instalar/). Para entender em detalhe o que `pardes init` faz e o que fica no seu projeto, vá em [o comando](/pt-br/cli/comandos/). Para ver casos concretos onde a CLI já foi usada, siga para [exemplos](/pt-br/cli/exemplos/).

---

## Histórico de versões

A `pardes-cli` segue versionamento semântico. Todas as *releases* — com binários cross-platform, *checksums* e *changelog* automático — vivem em [github.com/LeonardoMendoncaDev/pardes-cli/releases](https://github.com/LeonardoMendoncaDev/pardes-cli/releases).
