---
title: Instalar a CLI
description: Três caminhos para instalar a CLI do PARDES — Homebrew (recomendado em macOS e Linux), descarregar o binário pré-compilado, ou compilar a partir do código-fonte. Escolhe o que melhor encaixa no teu sistema.
---

A CLI do PARDES é um binário Go autónomo, sem dependências em *runtime*. Para o instalares tens três caminhos, do mais simples ao mais flexível.

## Caminho 1 — Homebrew (recomendado em macOS e Linux)

Uma linha:

```bash
brew install LeonardoMendoncaDev/pardes/pardes-cli
```

A primeira vez que correres, o Homebrew adiciona automaticamente o *tap* `LeonardoMendoncaDev/pardes` e instala a fórmula `pardes-cli`. A partir daí, basta `brew upgrade pardes-cli` para actualizares para a versão mais recente.

## Caminho 2 — descarregar o binário pré-compilado

Se não usas Homebrew (ou estás em Windows), descarrega o ficheiro certo para o teu sistema na [página de *releases*](https://github.com/LeonardoMendoncaDev/pardes-cli/releases) do GitHub:

- **macOS Apple Silicon (M1/M2/M3)** — `pardes-cli_*_darwin_arm64.tar.gz`
- **macOS Intel** — `pardes-cli_*_darwin_amd64.tar.gz`
- **Linux x86_64** — `pardes-cli_*_linux_amd64.tar.gz`
- **Linux ARM64** — `pardes-cli_*_linux_arm64.tar.gz`
- **Windows x86_64** — `pardes-cli_*_windows_amd64.zip`

Em macOS ou Linux, descomprime e mete no PATH:

```bash
tar -xzf pardes-cli_*_*.tar.gz
sudo mv pardes /usr/local/bin/pardes
chmod +x /usr/local/bin/pardes
```

Em Windows, descomprime o ZIP e copia o `pardes.exe` para uma pasta que esteja no `PATH` (ou cria uma nova, por exemplo `C:\bin`, e adiciona-a às variáveis de ambiente do sistema).

Cada ficheiro tem o seu *checksum* SHA-256 publicado no `checksums.txt` da mesma *release* — verifica antes de executar se quiseres a tranquilidade extra.

## Caminho 3 — compilar a partir do código-fonte

Para *contributors* ou para ambientes onde não consegues usar binários externos:

```bash
git clone https://github.com/LeonardoMendoncaDev/pardes-cli.git
cd pardes-cli
go build -o pardes .
sudo mv pardes /usr/local/bin/pardes
```

Precisas de **Go 1.21 ou superior**. Verifica com `go version`. Em macOS/Homebrew: `brew install go`; Ubuntu/Debian: `sudo apt install golang`; Windows: instalador em [go.dev/dl](https://go.dev/dl/).

## Verificar a instalação

Em qualquer dos três caminhos:

```bash
pardes --version
pardes --help
```

Se o `--help` mostrar os três comandos (`init`, `intent`, `prompt`), está pronto. Avança para [os comandos](/cli/comandos/) ou directamente para um [exemplo](/cli/exemplos/).

## O que vem por aí

A próxima iteração da CLI vai acrescentar o comando `pardes status` (resumo rápido do estado actual sem abrir os ficheiros), e novas plataformas no Homebrew (Linux ARM via `linuxbrew`). Não há prazo fixo. A regra é a do método: só publicar quando o caminho actual mostrar fricção real.
