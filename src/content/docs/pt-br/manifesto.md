---
title: Manifesto
description: Por que PARDES — a tese fundamental da metodologia, por Leonardo Mendonça.
---

*Por Leonardo Mendonça. Versão inicial — 21 de Abril de 2026.*

> **Peshat, Remez, Drash, Sod — as quatro camadas da intenção no software.**

## 1. A premissa única

Há uma frase que sustenta tudo o que se segue:

**O único ato exclusivamente humano no desenvolvimento de software é a intenção.**

*"Quero que isto exista para este propósito."* Só isto. Todo o resto — desenho de domínio, contratos, código, testes, deploy, métricas, evolução — é derivável por agentes, humanos ou de inteligência artificial, desde que a intenção original tenha sido capturada com fidelidade.

O problema histórico do desenvolvimento de software não é que essa cadeia de derivação não existisse — sempre existiu, tropeçando na cabeça de alguém. O problema é que vivia implícita, compartimentada e não verificável. PARDES torna-a explícita, encadeada e reavaliável em cada passo.

## 2. O nome

*PARDES* vem da tradição hermenêutica judaica. É um acrônimo clássico para quatro camadas de interpretação dos textos sagrados:

- **Peshat** (פְּשָׁט) — o sentido literal, simples
- **Remez** (רֶמֶז) — o sentido alusivo, que aponta sem ainda revelar
- **Drash** (דְּרַשׁ) — o sentido interpretativo, buscado, trabalhado
- **Sod** (סוֹד) — o sentido místico, que só se revela a quem vive o texto

A palavra em hebraico significa *pomar* ou *jardim* — é a raiz etimológica de *paraíso*. Captura a ideia de que um texto sagrado, como um jardim, tem camadas que se desvendam ao longo do tempo a quem o habita.

Adoto o termo como metáfora operacional, com respeito pela tradição original. A intenção humana que dá origem a um sistema de software é, para quem o constrói, um texto fundador. Tem literal, tem alusão, tem interpretação, tem emergência. A metodologia PARDES organiza esse desvendamento em quinze passos concretos.

## 3. As quatro camadas aplicadas ao software

**Peshat — o literal.** É o propósito cru da aplicação. Para que existe. Para quem. Que valor entrega. Que valor, expressamente, *não* entrega. Esta camada corresponde às duas primeiras specs da cadeia PARDES: **Propósito** e **Domínio**. Sem ela, nada do resto tem chão.

**Remez — o alusivo.** É tudo aquilo que o propósito aponta sem ainda realizar. As capacidades que o sistema precisa ter, os contratos que ele precisa honrar. Há direção, não há ainda materialização. Corresponde a **Capacidades** e **Contratos**.

**Drash — o interpretativo.** É onde a intenção passa pelo filtro da realidade material e é traduzida em decisões de engenharia. Guardrails e limites, quem executa o quê, código concreto, testes que verificam. Aqui vivem **Comportamento**, **Orquestração**, **Implementação** e **Validação**. Drash é a camada mais visível do ofício.

**Sod — o emergente.** É o sentido que só se revela quando o sistema vive em operação real. Como se comporta sob carga, o que a observabilidade ensina, como envelhece, quando deve ser reavaliado ou descontinuado. **Deployment**, **Observabilidade**, **Operação** e **Evolução**. É a camada mais humilde — a que reconhece que o sistema, posto no mundo, tem uma vida própria que o autor não pode prever inteiramente.

Os passos de execução — colocar código na rede, rodar testes, fazer deploy, operar — alternam com as specs. A cadeia respira entre intenção e matéria.

## 4. O que PARDES não é

Não é *waterfall*. Não exige spec completa antes de código. As specs detalhadas aparecem quando o sistema justifica, não antes.

Não é *Big Design Up Front*. O método é taxonomia de artefatos, não sequência rígida de aprovação. Escreve-se código a qualquer momento, desde que a intenção esteja clara. A spec formaliza o que já se sabe; não impede de começar.

Não é *documentação*. Documentação serve um leitor humano futuro. Spec serve uma decisão derivável. São linguagens diferentes, para públicos diferentes.

Não é *anti-código*. O código continua a ser o artefato central da execução. O que muda é que deixa de ser o único registro da intenção.

Não é *substituto do dev*. O desenvolvedor não desaparece. Passa a ter duas camadas de contribuição: capturar intenção com fidelidade, e guiar a cadeia quando alguma spec derivada se afastar do propósito.

## 5. Por que isto importa agora

Nos últimos três anos, o desenvolvimento de software entrou numa fase em que boa parte das tarefas técnicas — escrever código, escrever testes, escrever configuração, escrever documentação — passou a ser acelerável em cinco a dez vezes por agentes de inteligência artificial bem orientados. O limite deixou de ser a velocidade de produção. O limite é a clareza da intenção e a fidelidade da sua propagação ao longo do ciclo de vida.

Times que souberem capturar intenção com rigor e estabelecer uma cadeia revisitável entre intenção e produção vão multiplicar o seu output. Times que tratarem a intenção como implícita vão produzir rápido artefatos errados em escala.

PARDES não é uma profecia. É uma disciplina. Há quem aplique há anos sem lhe chamar nome. Trabalhei os últimos dois anos em paralelo em vários projetos de grande complexidade para construir a versão que aqui compartilho. Chamo-a PARDES porque a metáfora das quatro camadas de leitura bate com o que via acontecer todos os dias: uma intenção clara no topo, uma cadeia de specs e execuções derivando dela, e um sistema em operação me ensinando — sempre — camadas de sentido que eu não tinha previsto.

## 6. Quem escreve isto

Sou Leonardo Mendonça. Arquiteto de software. Há anos trabalhando em sistemas críticos, em ciclos de vida que atravessam legado denso e construção nova. PARDES é a destilação do que tem funcionado no meu dia a dia, organizada num formato que espero poder servir outros profissionais que sintam o mesmo desconforto com métodos anteriores.

Este site é o ponto de partida. Vou adicionar material à medida que o trabalho justificar. Se o que encontrar aqui for útil, compartilhe — é assim que uma metodologia ganha vida além do autor.

---

*Próxima leitura: [Onboarding em 1 dia](/pt-br/metodo/onboarding/). Quem preferir entender primeiro a origem do nome: [Sobre o nome](/pt-br/sobre-o-nome/). Quem quiser saber quem escreve: [Sobre o autor](/pt-br/sobre-o-autor/).*
