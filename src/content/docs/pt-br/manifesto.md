---
title: Manifesto
description: Por que PARDES — a tese fundamental da metodologia, por Leonardo Mendonça.
---

*Por Leonardo Mendonça. Versão inicial — 21 de Abril de 2026.*

## 1. A premissa única

Há uma frase que sustenta tudo o que se segue:

**O único ato exclusivamente humano no desenvolvimento de software é a intenção.**

*"Quero que isto exista para este propósito."* Só isto. Todo o resto — desenho de domínio, contratos, código, testes, *deploy*, métricas, evolução — é derivável por agentes, humanos ou de inteligência artificial, desde que a intenção original tenha sido capturada com fidelidade.

O problema histórico do desenvolvimento de software não é que essa cadeia de derivação não existisse — sempre existiu, tropeçando na cabeça de alguém. O problema é que vivia implícita, compartimentada e não verificável. PARDES torna-a explícita, encadeada e reavaliável em cada passo.

## 2. As quatro fases de um sistema

Um sistema de software, do nascimento à morte, atravessa quatro fases. Não são uma sequência rígida — são camadas de natureza diferente, que coexistem em maturidades distintas ao longo da vida do código.

**O literal.** É o propósito cru. Para que existe, para quem, que valor entrega, que valor expressamente *não* entrega. É também o domínio: que conceitos, regras e restrições do mundo real este sistema vai representar. Sem isto fixado, nada do resto tem chão. Em PARDES, esta camada corresponde às *specs* de **Intenção** e **Domínio**.

**O alusivo.** É tudo aquilo que o propósito aponta sem ainda materializar. As capacidades que o sistema precisa ter, os contratos que precisa honrar. Há direção, ainda não há código. Em PARDES, **Capacidades** e **Contratos**.

**O interpretativo.** É onde a intenção passa pelo filtro da realidade material e se traduz em decisões de engenharia. *Guardrails*, quem executa o quê, código concreto, testes que verificam. É a camada mais visível do ofício. Em PARDES, **Comportamento**, **Orquestração**, **Implementação** e **Validação**.

**O emergente.** É o sentido que só se revela quando o sistema vive em operação real. Como se comporta sob carga, o que a observabilidade ensina, como envelhece, quando deve ser reavaliado ou descontinuado. É a camada mais humilde — a que reconhece que o sistema, posto no mundo, tem uma vida própria que o autor não pode prever inteiramente. Em PARDES, **Deployment**, **Observabilidade**, **Operação** e **Evolução**.

Os passos de execução — colocar código na rede, rodar testes, fazer *deploy*, operar — alternam com as *specs*. A cadeia respira entre intenção e matéria. Quando a Evolução é executada, volta-se à Intenção: *a intenção ainda é válida?* O método é um ciclo, não uma linha.

## 3. O que PARDES não é

Não é *waterfall*. Não exige *spec* completa antes de código. As *specs* detalhadas aparecem quando o sistema justifica, não antes.

Não é *Big Design Up Front*. O método é taxonomia de artefatos, não sequência rígida de aprovação. Escreve-se código a qualquer momento, desde que a intenção esteja clara. A *spec* formaliza o que já se sabe; não impede de começar.

Não é *documentação*. Documentação serve um leitor humano futuro. *Spec* serve uma decisão derivável. São linguagens diferentes, para públicos diferentes.

Não é *anti-código*. O código continua a ser o artefato central da execução. O que muda é que deixa de ser o único registro da intenção.

Não é *substituto do dev*. O desenvolvedor não desaparece. Passa a ter duas camadas de contribuição: capturar intenção com fidelidade, e guiar a cadeia quando alguma *spec* derivada se afastar do propósito.

## 4. Por que isto importa agora

Nos últimos três anos, o desenvolvimento de software entrou numa fase em que uma boa parte das tarefas técnicas — escrever código, escrever testes, escrever configuração, escrever documentação — passou a ser acelerável em cinco a dez vezes por agentes de inteligência artificial bem orientados. O limite deixou de ser a velocidade de produção. O limite é a clareza da intenção e a fidelidade da sua propagação ao longo do ciclo de vida.

Times que souberem capturar intenção com rigor e estabelecer uma cadeia revisitável entre intenção e produção vão multiplicar o seu *output*. Times que tratarem a intenção como implícita vão produzir rápido artefatos errados em escala.

PARDES não é uma profecia. É uma disciplina. Há quem aplique há anos sem lhe dar nome. Trabalhei os últimos dois anos em paralelo em vários projetos de grande complexidade para construir a versão que aqui compartilho. Chamo-a PARDES porque a estrutura em quatro camadas bate com o que eu via acontecer todos os dias: uma intenção clara no topo, uma cadeia de *specs* e execuções derivando dela, e um sistema em operação me ensinando — sempre — sentidos que eu não tinha previsto.

## 5. Quem escreve isto

Sou Leonardo Mendonça. Arquiteto de software. Há anos trabalhando em sistemas críticos, em ciclos de vida que atravessam legado denso e construção nova. PARDES é a destilação do que tem funcionado no meu dia a dia, organizada num formato que espero poder servir outros profissionais que sintam o mesmo desconforto com métodos anteriores.

Este site é o ponto de partida. Vou adicionar material à medida que o trabalho justificar. Se o que encontrar aqui for útil, compartilhe — é assim que uma metodologia ganha vida além do autor.

---

## Apêndice — Origem do nome

*PARDES* não foi um acrônimo inventado. É um termo emprestado da tradição hermenêutica judaica, onde designa quatro camadas de leitura de textos sagrados. A metáfora bate com a estrutura em quatro camadas que o método propõe — literal, alusivo, interpretativo, emergente — e o nome ficou.

Para quem queira entender a origem com cuidado, há uma página dedicada: [Sobre o nome](/pt-br/sobre-o-nome/). Para todos os outros efeitos práticos, **PARDES é o que está descrito acima**: um método para tornar a intenção humana explícita, encadeada e revisitável ao longo do ciclo de vida do software.

---

*Próxima leitura: [Por que sua IA falha](/pt-br/diagnostico/) — o diagnóstico do problema que este método resolve. Ou [Começar em 1 hora](/pt-br/metodo/onboarding/) se você já está convencido.*
