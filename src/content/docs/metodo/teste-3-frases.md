---
title: O teste das 3 frases
description: A regra fundamental ao aceitar código gerado por um agente de inteligência artificial.
---

<div class="metodo-page">

Esta é uma regra simples para aplicar antes de cada `git add`:

> **Se não consegues explicar em três frases por que é que o código faz o que faz, não mereces ter aceitado o output. Revê.**

A regra parece óbvia até ao momento em que se tenta aplicá-la durante uma semana inteira. Aí percebe-se que uma parte considerável do código que aceitamos do agente de IA não sobrevive a este critério mínimo — e nunca sobreviveu. Não nos apercebemos porque nunca fomos forçados a articular.

## Por que é que isto importa

O agente produz código sintacticamente correcto quase sempre. Compila, passa o *linter*, parece razoável. Mas pode estar semanticamente errado — algoritmo incorrecto, invariante violada, *edge case* ignorado, pressuposto sobre *input* que não se verifica. O *linter* não apanha nada disto.

O humano é a última camada de validação semântica antes do código entrar no repositório. O agente não tem responsabilidade pelo código; o programador tem. E o `git blame` aponta para o programador, não para o modelo que gerou o texto.

A partir deste enquadramento, o teste das 3 frases passa a fazer sentido como disciplina prática.

## Por que três

É uma escolha específica, não arbitrária:

- **Uma frase** dá para mascarar a falta de compreensão. *"Esta função processa o input"* não explica nada.
- **Dez frases** dão para esconder. Se precisas de dez frases para explicar uma função, a função está confusa ou não a percebeste.
- **Três frases** são suficientes para articular o que o código faz, por que está estruturado assim, e o que aconteceria se uma entrada importante mudasse.

É o limiar funcional mais curto onde ainda se consegue demonstrar compreensão real.

## As três perguntas que as frases têm de cobrir

### 1. O que o código faz

Primeira frase. Sem jargão, sem metáforas. Em linguagem do domínio se o código é de negócio; em linguagem técnica se é de infraestrutura.

Não vale *"trata o pedido"*. Vale *"valida o CPF, consulta o saldo em cache, aceita se ≥ 100, rejeita caso contrário, regista em log"*.

### 2. Por que está estruturado assim

Segunda frase. Esta é a que apanha mais frequentemente o programador desprevenido. Não é *"porque faz sentido"* — é por que é estruturado **desta** forma, e não de outra.

*"Uso `Promise.all` em vez de `await` sequencial porque os três fetches não dependem uns dos outros e assim o tempo total é o do mais lento, não a soma."* Eis uma segunda frase defensável.

### 3. O que aconteceria se uma entrada importante mudasse

Terceira frase. Força o cérebro a simular o futuro. O que acontece se o input passar a vir `null`? Se o serviço a jusante ficar mais lento? Se alguém passar a chamar este método 100 vezes por segundo em vez de uma?

Se a resposta é *"não sei"*, o código não vai sobreviver à primeira mudança real do ambiente.

<div class="exercise">

**Para aplicar agora**

Pega no último *commit* onde o agente de IA te ajudou a escrever código. Abre o *diff*.

Tenta escrever três frases que cubram: o que faz, por que está estruturado assim, o que acontece se uma entrada importante mudar.

Se precisares de mais de três frases, não expandas o texto — simplifica o código.

<details>
<summary>Como saber se a resposta está suficientemente boa?</summary>

Lê as três frases e pergunta-te se as defenderias numa revisão de código com um colega que desafie cada uma delas. Se hesitaste, não é porque a revisão assusta — é porque a compreensão ainda não é firme.

</details>
</div>

## Armadilhas comuns

<div class="trap">

**Sentir que se sabe sem conseguir articular**

O cérebro humano tem uma capacidade bem documentada de sentir que entende sem realmente entender. A articulação em voz alta — ou por escrito — é um dos testes mais fiáveis para distinguir compreensão real de ilusão de compreensão.

</div>

<div class="trap">

**Três frases longas em vez de três frases normais**

Cláusulas encadeadas com *"que também"* e *"além disso"* transformam três frases em dez disfarçadas. Se o código exige frases compostas longas para se explicar, quase sempre o problema é do código.

</div>

<div class="trap">

**Aplicar a regra só a código "importante"**

Introduz uma hierarquia invisível: código importante versus código secundário. Na prática, o problema que acorda o programador às três da manhã é quase sempre em código que ninguém achou importante o suficiente para rever com cuidado.

</div>

## Quando se falha o teste

Acontece — com alguma frequência no início. O que fazer:

- **Não apagar o código.** É caro e nove em cada dez vezes é desnecessário.
- **Pedir ao agente que explique linha a linha.** Pergunta por cada bloco de três ou quatro linhas o que faz e por que é está ali.
- **Reescrever partes até o modelo mental assentar.** Muitas vezes o exercício de reescrita clarifica.
- **Simplificar o código até caber em três frases.** Esta é a opção que mais frequentemente produz o melhor resultado.

## Sobre o tom da regra

A formulação *"não mereces ter aceitado o output"* é deliberadamente firme. O objectivo é instalar um pequeno atrito na rotina — suficiente para quebrar o hábito de aceitar por inércia. No dia a dia, aplica-se com menos teatralidade do que o texto sugere: basta parar, escrever as três frases mentalmente, e seguir em frente.

<div class="checklist">

- Li o código linha a linha antes de *commitar*
- Consigo explicar o **que** faz numa frase curta
- Consigo explicar o **porquê** da estrutura numa frase curta
- Consigo prever o **comportamento** sob mudança numa frase curta
- Se um colega me perguntar amanhã, defendo o código sem hesitar

</div>

## Onde ir a seguir

- **[A cadeia de 15 passos](/metodo/cadeia/)** — onde este teste se encaixa na cadeia (passo 8, imediatamente antes do *commit*)
- **[Onboarding em 1 dia](/metodo/onboarding/)** — a disciplina completa que envolve esta e outras regras

</div>
