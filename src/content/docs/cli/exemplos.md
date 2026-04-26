---
title: Exemplos
description: Casos concretos onde a CLI do PARDES foi usada na prática. Começa com a calculadora — o primeiro caso fora do contexto de trabalho do autor, que validou a versão 0.0.1.
---

A teoria é fácil. A pergunta justa é se o método e a CLI funcionam num caso pequeno, sem domínio complicado, sem stakeholders a pressionar. Esta página guarda os primeiros casos reais.

## Calculadora em JavaScript autocontido — a validação 0.0.1

**Data.** 26 de Abril de 2026.

**Contexto.** Primeira utilização da CLI fora do contexto profissional do autor (os quatro contratos onde PARDES já era aplicado internamente). Caso escolhido propositadamente trivial: uma calculadora em JavaScript, num único ficheiro HTML, sem dependências externas, sem *build*, abre directamente no *browser*.

**Como correu.** O autor abriu o terminal numa pasta vazia e correu `pardes init`. Escolheu Português PT como idioma. A CLI mostrou as etapas a passar pelo terminal com um `✓` verde à frente de cada uma — detectou que a pasta estava vazia, inferiu *greenfield*, escreveu o `pardes/_estado.md` e o `pardes/intent.md` em esqueleto, montou o briefing-mestre e copiou para o clipboard. A seguir, perguntou qual agente de IA usava — o autor escolheu Claude Code. A CLI abriu um terminal novo já com o Claude Code a correr na pasta da calculadora, e mostrou uma caixa colorida no terminal original a lembrar: "o briefing está no clipboard, cola com Cmd+V". Foi exactamente isso: um Cmd+V na janela do Claude Code, e o agente assumiu daí. Apresentou-se como entrevistador profundo, fez a primeira pergunta sobre quem ia usar a calculadora, depois sobre que operações suportar, depois sobre o que NÃO devia fazer (não-intenção). Quando o autor respondeu "sem *frameworks*, sem ficheiros separados, sem *build*", o agente registou no `intent.md` e passou directamente para a fatia mínima — entregou um único `index.html` autocontido com JavaScript, CSS e marcação no mesmo ficheiro, funcional ao primeiro abrir.

**Resultado.** Calculadora funcional num único HTML. Sem retrabalho, sem *prompts* extra para corrigir. O autor declarou "PARDES 0.0.1 validado e pronto a subir" no fim.

**O que isto prova.** Que o fluxo `pardes init` funciona até num caso onde nenhuma das partes complicadas do método (cadeia de quinze passos, integrações, *trade-offs* de domínio) é exercida. A intenção fixada pela coreografia da CLI + agente, antes da primeira linha de código, melhora visivelmente o que o agente devolve.

**O que isto não prova.** Que funciona em casos grandes, com *brownfield*, com mais que um *stakeholder*, ou em equipas distribuídas. Esses casos são exercitados nos contratos profissionais do autor — internamente — mas não estão publicados aqui por restrição de confidencialidade.

## Outros casos

Os próximos casos publicados serão os que outros utilizadores partilharem. Se experimentaste a CLI num projecto teu e queres que apareça aqui, abre uma *issue* no [repositório do site](https://github.com/LeonardoMendoncaDev/pardes) com um relato curto seguindo o padrão acima — data, contexto, como correu, resultado, o que prova e o que não prova.

A *barra* para entrar nesta lista é deliberadamente baixa em termos de tamanho de projecto, mas alta em termos de honestidade do relato. Casos onde o método não correu bem são igualmente bem-vindos — esses ensinam mais.
