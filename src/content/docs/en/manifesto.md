---
title: Manifesto
description: Why PARDES — the fundamental thesis of the methodology, by Leonardo Mendonça.
---

*By Leonardo Mendonça. Initial version — 21 April 2026.*

> **Peshat, Remez, Drash, Sod — the four layers of intent in software.**

## 1. The single premise

There is one sentence that sustains everything that follows:

**The only exclusively human act in software development is intent.**

*"I want this to exist for this purpose."* Only that. Everything else — domain design, contracts, code, tests, deploy, metrics, evolution — is derivable by agents, human or artificial, provided the original intent has been captured faithfully.

The historical problem of software development is not that this derivation chain did not exist — it always existed, stumbling through someone's head. The problem is that it lived implicit, compartmentalised, and unverifiable. PARDES makes it explicit, linked, and re-evaluable at every step.

## 2. The name

*PARDES* comes from the Jewish hermeneutic tradition. It is a classical acronym for four layers of interpreting sacred texts:

- **Peshat** (פְּשָׁט) — the literal, simple sense
- **Remez** (רֶמֶז) — the allusive sense, which points without yet revealing
- **Drash** (דְּרַשׁ) — the interpretive sense, sought, worked
- **Sod** (סוֹד) — the mystical sense, which reveals itself only to those who live the text

The Hebrew word means *orchard* or *garden* — it is the etymological root of *paradise*. It captures the idea that a sacred text, like a garden, has layers that unveil themselves over time to those who inhabit it.

I adopt the term as an operational metaphor, with respect for the original tradition. The human intent that gives rise to a software system is, for those who build it, a founding text. It has literal, allusion, interpretation, and emergence. The PARDES methodology organises this unveiling into fifteen concrete steps.

## 3. The four layers applied to software

**Peshat — the literal.** It is the raw purpose of the application. Why it exists. For whom. What value it delivers. What value, expressly, it does *not* deliver. This layer corresponds to the first two specs of the PARDES chain: **Purpose** and **Domain**. Without it, nothing else has ground.

**Remez — the allusive.** It is everything that the purpose points to without yet realising. The capabilities the system needs to have, the contracts it needs to honour. There is direction, there is no materialisation yet. This corresponds to **Capabilities** and **Contracts**.

**Drash — the interpretive.** It is where intent passes through the filter of material reality and is translated into engineering decisions. Guardrails and limits, who executes what, concrete code, tests that verify. Here live **Behaviour**, **Orchestration**, **Implementation**, and **Validation**. Drash is the most visible layer of the craft.

**Sod — the emergent.** It is the sense that only reveals itself when the system lives in real operation. How it behaves under load, what observability teaches, how it ages, when it should be re-evaluated or discontinued. **Deployment**, **Observability**, **Operation**, and **Evolution**. It is the most humble layer — the one that recognises that the system, once placed in the world, has a life of its own that the author cannot entirely predict.

The execution steps — putting code on the network, running tests, deploying, operating — alternate with the specs. The chain breathes between intent and matter.

## 4. What PARDES is not

It is not *waterfall*. It does not require a complete spec before code. Detailed specs appear when the system justifies it, not before.

It is not *Big Design Up Front*. The method is a taxonomy of artefacts, not a rigid sequence of approval. Code is written at any moment, provided intent is clear. The spec formalises what was already known; it does not prevent starting.

It is not *documentation*. Documentation serves a future human reader. Spec serves a derivable decision. Different languages, for different audiences.

It is not *anti-code*. Code remains the central artefact of execution. What changes is that it ceases to be the only record of intent.

It is not a *substitute for the dev*. The developer does not disappear. They gain two layers of contribution: capturing intent faithfully, and guiding the chain when some derived spec strays from the purpose.

## 5. Why this matters now

In the last three years, software development entered a phase in which a good part of technical tasks — writing code, writing tests, writing configuration, writing documentation — became accelerable by five to ten times by well-oriented artificial intelligence agents. The limit has ceased to be production speed. The limit is the clarity of intent and the fidelity of its propagation throughout the lifecycle.

Teams that learn to capture intent with rigour and establish a revisitable chain between intent and production will multiply their output. Teams that treat intent as implicit will rapidly produce wrong artefacts at scale.

PARDES is not a prophecy. It is a discipline. There are those who have been applying it for years without giving it a name. I worked the last two years in parallel on several projects of great complexity to build the version I share here. I call it PARDES because the metaphor of the four layers of reading matches what I saw happen every day: a clear intent at the top, a chain of specs and executions deriving from it, and a system in operation teaching me — always — layers of meaning I had not foreseen.

## 6. Who writes this

I am Leonardo Mendonça. Software architect. For years I have worked on critical systems, in lifecycles that cross dense legacy and new construction. PARDES is the distillation of what has worked in my daily practice, organised in a format I hope can serve other professionals who feel the same discomfort with previous methods.

This site is the starting point. I will add material as the work justifies it. If what you find here is useful, share it — that is how a methodology takes on life beyond the author.

---

*Next reading: [Onboarding in 1 day](/en/metodo/onboarding/). Those who prefer to understand first the origin of the name: [About the name](/en/sobre-o-nome/). Those who want to know who is writing: [About the author](/en/sobre-o-autor/).*
