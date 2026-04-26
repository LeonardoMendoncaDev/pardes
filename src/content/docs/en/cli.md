---
title: The PARDES CLI
description: One single command, pardes init, prepares everything in the project and hands the master briefing to your AI agent. Choreographic philosophy taken to the end — the CLI orchestrates, the agent runs the deep interview with you in the IDE.
---

<p class="cli-version-badge"><strong>v0.0.2</strong> · April 26, 2026 · <a href="https://github.com/LeonardoMendoncaDev/pardes-cli/releases">view all versions</a></p>

PARDES is, first, a method. The *CLI* is the tool that lets the method enter your project without friction. Instead of having to read the whole methodology before you can start, you install the `pardes` binary, run **one single command**, and your AI agent — Claude Code, Cursor, Windsurf, Copilot Chat, Gemini CLI, Aider — automatically receives a dense briefing that turns it from an executor into an interviewer.

## The philosophy: the choreographer

The first instinct was to make the *CLI* run a long interview with you, with dozens of questions. That was discarded in the first hour. The argument that won: *that is heavy for the dev — imagine kicking off PARDES on a small feature*.

The current version takes that philosophy all the way: the CLI **asks you almost nothing**. It detects the *stack* on its own, infers whether the project is *greenfield* or *brownfield*, composes the master briefing, copies it to the clipboard, and opens a terminal or IDE with the agent of your choice already running. Your only gesture is a final `Cmd+V`. PARDES stops trying to be the interviewer and becomes a **choreographer**: it conducts the agent you already have, instead of competing with it.

## The flow, in one line

Run `pardes init` in the project folder. Pick the language, watch each step get prepared in the background (each one shows a green `✓` when done), answer a single question about which AI agent you use, and `pardes` opens the right window with everything ready. The deep interview — who the user is, what the intent is, what the system should NOT do, constraints — happens next between you and the agent, in the editor, with the code in front.

## Next steps

To start using it now, head to [install the CLI](/en/cli/instalar/). To understand in detail what `pardes init` does and what stays in your project, see [the command](/en/cli/comandos/). To see concrete cases where the CLI has already been used, head to [examples](/en/cli/exemplos/).

---

## Version history

`pardes-cli` follows semantic versioning. All releases — with cross-platform binaries, checksums and automatic changelog — live at [github.com/LeonardoMendoncaDev/pardes-cli/releases](https://github.com/LeonardoMendoncaDev/pardes-cli/releases).
