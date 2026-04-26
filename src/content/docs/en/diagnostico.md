---
title: Why your AI keeps missing
description: An honest diagnosis of why AI deliveries are inconsistent — and what has to change before any method can solve the problem.
---

*Before showing the method, the problem needs naming. If this text doesn't describe your experience, PARDES is probably not for you.*

## The typical experience

You've had Claude, Cursor, or Copilot open most of your working day for the past twelve months. The early weeks were exhilarating: tasks that used to take afternoons resolve in minutes, *boilerplate* vanishes, mechanical *refactors* become trivial. Productivity spikes.

Then something nobody promises happens: average velocity stops climbing. Worse, the **variance** between days starts to hurt. On a Monday you ship three *features* before lunch. On Wednesday you burn six hours undoing an *output* that looked right, compiled, passed the tests — and was semantically wrong, or rested on an assumption that didn't hold, or contradicted a decision made two weeks earlier that nobody had recorded anywhere.

After a while, you discover that the hard part is no longer writing code. The hard part is trusting the code the agent delivers.

## The explanation that doesn't work

The first tempting hypothesis is technical: *"I need a better model"*, *"I need an IDE with tighter integration"*, *"I need the right *skill* configured"*. You swap Cursor for Windsurf, upgrade your plan, install extensions, read *threads* about the latest magic *prompt*. It helps in spots. It doesn't fix it.

The second hypothesis is procedural: *"I need stricter code review"*, *"I should write more tests"*, *"I should *pair-program* with the AI"*. Also helps, marginally. Also doesn't fix it.

The symptom keeps returning: good day, bad day, and you can't predict which one you're in.

## What's actually failing

Your AI isn't failing to generate code. It's generating code on top of an intent that you yourself never pinned down before invoking it.

Think of a typical morning's loop: you open the editor, read the task above, mentally formulate what you want, type a *prompt* with that mental formulation, get code back, fix what's visibly wrong, *commit*. The intent lived **inside your head** the whole time — the agent never saw it. What it saw was the abbreviated translation you managed to type into a *prompt*.

When the intent is simple and your translation is good, the result is excellent. When the intent has subtleties — a business rule you know but didn't articulate, an implicit system constraint, an earlier architectural decision, an *edge case* you learned three weeks ago and forgot to mention — the agent fills the gaps with plausibility. And plausibility is not correctness. It's code that looks right until it fails.

The inconsistency in your deliveries doesn't come from the agent. It comes from the fact that the source of truth for intent lives in your short-term memory, which oscillates between days, between coffees, between *calls* that interrupted you.

## Why this gets worse as you use more AI

There's a perverse effect. The more code the agent generates per unit of time, the more implicit decisions are entering the system with nobody pinning them down. Every *prompt* you give materialises assumptions you haven't written anywhere. After a week, your code holds hundreds of micro-decisions that live only in your memory — and your memory forgets most of them in three days.

A month from now, somebody (yourself, a colleague, the agent in a fresh session) will read that code and ask *why* this way. The honest answer is *I don't know anymore*. And that's when the corrosion starts.

## What has to change

The cure isn't technical. It's a matter of discipline. You have to pull intent out of your head and put it somewhere the agent, your colleague, and your three-months-from-now self can consult it, contest it, and revise it before any line of code.

This sounds like documentation, but it isn't. Documentation serves a future human reader who wants to learn the system. What you need is different: a chain of pinned-down decisions that every *prompt*, every review, every new *feature* can derive from predictably. In PARDES we call this a chain of *specs*. They are short, they are alive, and they are the only thing that separates consistent code from code by luck.

The good news is that, once the habit is installed, this stops feeling like extra work. Intent pinned at the start saves you hours of rework at the end, and the agent — with intent in front of it rather than guessing — starts delivering with the predictability it should always have had.

## Next step

If the diagnosis lands, the path is the method. One hour is enough for you to verify in practice whether the problem described above is yours.

→ [Start in 1 hour](/en/metodo/onboarding/)
