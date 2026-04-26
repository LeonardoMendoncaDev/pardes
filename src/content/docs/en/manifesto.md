---
title: Manifesto
description: Why PARDES — the fundamental thesis of the methodology, by Leonardo Mendonça.
---

*By Leonardo Mendonça. Initial version — 21 April 2026.*

## 1. The single premise

There is one sentence that sustains everything that follows:

**The only exclusively human act in software development is intent.**

*"I want this to exist for this purpose."* Only that. Everything else — domain design, contracts, code, tests, *deploy*, metrics, evolution — is derivable by agents, human or artificial, provided the original intent has been captured faithfully.

The historical problem of software development is not that this derivation chain did not exist — it always existed, stumbling through someone's head. The problem is that it lived implicit, compartmentalised, and unverifiable. PARDES makes it explicit, linked, and re-evaluable at every step.

## 2. The four phases of a system

A software system, from birth to death, passes through four phases. They are not a rigid sequence — they are layers of different nature that coexist at distinct maturities throughout the life of the code.

**The literal.** The raw purpose. Why it exists, for whom, what value it delivers, what value it expressly *does not* deliver. It is also the domain: what concepts, rules, and constraints of the real world this system will represent. Without this pinned down, nothing else has ground. In PARDES, this layer corresponds to the **Intent** and **Domain** *specs*.

**The allusive.** Everything that purpose points to without yet materialising. The capabilities the system needs to have, the contracts it needs to honour. There is direction, there is not yet code. In PARDES, **Capabilities** and **Contracts**.

**The interpretive.** Where intent passes through the filter of material reality and is translated into engineering decisions. *Guardrails*, who executes what, concrete code, tests that verify. It is the most visible layer of the craft. In PARDES, **Behaviour**, **Orchestration**, **Implementation**, and **Validation**.

**The emergent.** The sense that only reveals itself when the system lives in real operation. How it behaves under load, what observability teaches, how it ages, when it should be re-evaluated or discontinued. It is the most humble layer — the one that recognises that the system, once placed in the world, has a life of its own that the author cannot entirely predict. In PARDES, **Deployment**, **Observability**, **Operation**, and **Evolution**.

The execution steps — putting code on the network, running tests, deploying, operating — alternate with the *specs*. The chain breathes between intent and matter. When Evolution is executed, we return to Intent: *is intent still valid?* The method is a cycle, not a line.

## 3. What PARDES is not

It is not *waterfall*. It does not require a complete *spec* before code. Detailed *specs* appear when the system justifies it, not before.

It is not *Big Design Up Front*. The method is a taxonomy of artefacts, not a rigid sequence of approval. Code is written at any moment, provided intent is clear. The *spec* formalises what was already known; it does not prevent starting.

It is not *documentation*. Documentation serves a future human reader. *Spec* serves a derivable decision. Different languages, for different audiences.

It is not *anti-code*. Code remains the central artefact of execution. What changes is that it ceases to be the only record of intent.

It is not a *substitute for the dev*. The developer does not disappear. They gain two layers of contribution: capturing intent faithfully, and guiding the chain when some derived *spec* strays from the purpose.

## 4. Why this matters now

In the last three years, software development entered a phase in which a good part of technical tasks — writing code, writing tests, writing configuration, writing documentation — became accelerable by five to ten times by well-oriented artificial intelligence agents. The limit has ceased to be production speed. The limit is the clarity of intent and the fidelity of its propagation throughout the lifecycle.

Teams that learn to capture intent with rigour and establish a revisitable chain between intent and production will multiply their *output*. Teams that treat intent as implicit will rapidly produce wrong artefacts at scale.

PARDES is not a prophecy. It is a discipline. There are those who have been applying it for years without giving it a name. I worked the last two years in parallel on several projects of great complexity to build the version I share here. I call it PARDES because the four-layer structure matches what I saw happen every day: a clear intent at the top, a chain of *specs* and executions deriving from it, and a system in operation teaching me — always — meanings I had not foreseen.

## 5. Who writes this

I am Leonardo Mendonça. Software architect. For years I have worked on critical systems, in lifecycles that cross dense legacy and new construction. PARDES is the distillation of what has worked in my daily practice, organised in a format I hope can serve other professionals who feel the same discomfort with previous methods.

This site is the starting point. I will add material as the work justifies it. If what you find here is useful, share it — that is how a methodology takes on life beyond the author.

---

## Appendix — Origin of the name

*PARDES* is not an invented acronym. It is a term borrowed from the Jewish hermeneutic tradition, where it designates four layers of reading of sacred texts. The metaphor matches the four-layer structure that the method proposes — literal, allusive, interpretive, emergent — and the name stuck.

For those who want to understand the origin carefully, there is a dedicated page: [About the name](/en/sobre-o-nome/). For all other practical purposes, **PARDES is what is described above**: a method for making human intent explicit, linked, and revisitable throughout the software lifecycle.

---

*Next reading: [Why your AI keeps missing](/en/diagnostico/) — the diagnosis of the problem this method solves. Or [Start in 1 hour](/en/metodo/onboarding/) if you're already convinced.*
