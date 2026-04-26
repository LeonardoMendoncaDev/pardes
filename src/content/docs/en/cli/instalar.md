---
title: Install the CLI
description: Three paths to install the PARDES CLI — Homebrew (recommended on macOS and Linux), download the pre-compiled binary, or build from source. Pick whichever fits your system.
---

The PARDES CLI is a self-contained Go binary with no runtime dependencies. There are three paths to install it, from simplest to most flexible.

## Path 1 — Homebrew (recommended on macOS and Linux)

One line:

```bash
brew install LeonardoMendoncaDev/pardes/pardes-cli
```

The first time you run it, Homebrew automatically adds the `LeonardoMendoncaDev/pardes` *tap* and installs the `pardes-cli` formula. From then on, `brew upgrade pardes-cli` is all you need to update.

## Path 2 — download the pre-compiled binary

If you don't use Homebrew (or you're on Windows), download the right file for your system from the [GitHub releases page](https://github.com/LeonardoMendoncaDev/pardes-cli/releases):

- **macOS Apple Silicon (M1/M2/M3)** — `pardes-cli_*_darwin_arm64.tar.gz`
- **macOS Intel** — `pardes-cli_*_darwin_amd64.tar.gz`
- **Linux x86_64** — `pardes-cli_*_linux_amd64.tar.gz`
- **Linux ARM64** — `pardes-cli_*_linux_arm64.tar.gz`
- **Windows x86_64** — `pardes-cli_*_windows_amd64.zip`

On macOS or Linux, unpack and put it on PATH:

```bash
tar -xzf pardes-cli_*_*.tar.gz
sudo mv pardes /usr/local/bin/pardes
chmod +x /usr/local/bin/pardes
```

On Windows, unzip and copy `pardes.exe` to a folder that's already on `PATH` (or create one, e.g. `C:\bin`, and add it to the system environment variables).

Each file has its SHA-256 *checksum* published in the `checksums.txt` of the same release — verify before running if you want extra peace of mind.

## Path 3 — build from source

For *contributors* or for environments where you can't run external binaries:

```bash
git clone https://github.com/LeonardoMendoncaDev/pardes-cli.git
cd pardes-cli
go build -o pardes .
sudo mv pardes /usr/local/bin/pardes
```

You need **Go 1.21 or above**. Check with `go version`. macOS/Homebrew: `brew install go`; Ubuntu/Debian: `sudo apt install golang`; Windows: installer at [go.dev/dl](https://go.dev/dl/).

## Verify the install

In any of the three paths:

```bash
pardes --version
pardes --help
```

If `--help` shows the three commands (`init`, `intent`, `prompt`), you're ready. Move on to [the commands](/en/cli/comandos/) or jump to an [example](/en/cli/exemplos/).

## What's coming

The next iteration of the CLI will add the `pardes status` command (a quick summary of the current state without opening the files), and more platforms in Homebrew (Linux ARM via `linuxbrew`). No fixed deadline. The rule follows the method: only publish when the current path shows real friction.
