# 🎵 Spotify Clone — Player de Música

Clone da interface de player do Spotify, desenvolvido com HTML, CSS e JavaScript puro, com playlist funcional e controles completos de reprodução.

---

## 🎵Visão Geral

Player de música com capa do álbum, controles de reprodução, barra de progresso clicável, modo aleatório, repetição e sistema de curtidas — tudo salvo no `localStorage`.

---

## 🗂️ Estrutura do Projeto

```
📁 projetospotify/
├── README.md
├── index.html
├── style.css
├── app.js
├── img/
│   ├── enjoythesilence.webp
│   ├── givenup.webp
│   └── sledgehammer.webp
└── songs/
    ├── enjoythesilence.mp3
    ├── givenup.mp3
    └── sledgehammer.mp3
```

---

## 🎵Como Usar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` diretamente no navegador

Não requer instalação, build ou dependências locais.

> ⚠️ Alguns navegadores bloqueiam a reprodução de áudio local por política de segurança. Se o áudio não tocar, abra com uma extensão de servidor local como o **Live Server** (VS Code).

---

## 🛠️ Tecnologias

- **HTML5** — player de áudio nativo com `<audio>` e semântica com `section`, `nav`, `header`
- **CSS3** — gradiente de fundo, Flexbox, variável CSS `--progress` para barra dinâmica
- **JavaScript** — manipulação de DOM, lógica de playlist e `localStorage`
- [Bootstrap Icons](https://icons.getbootstrap.com/) — ícones dos controles do player

---

## 🎧 Playlist

| # | Música | Artista |
|---|--------|---------|
| 1 | Sledgehammer | Rihanna |
| 2 | Enjoy the Silence | Depeche Mode |
| 3 | Given Up | Linkin Park |

---

## ✨ Funcionalidades

- **Play / Pause** — alterna o ícone e controla a reprodução
- **Próxima / Anterior** — navega entre as músicas em loop
- **Barra de progresso clicável** — pula para qualquer ponto da música
- **Tempo atual e total** — exibidos no formato `HH:MM:SS`
- **Modo aleatório (Shuffle)** — embaralha a playlist com algoritmo de Fisher-Yates
- **Modo repetição (Repeat)** — repete a música atual ao terminar
- **Curtir música** — alterna entre coração vazio e preenchido, salvo no `localStorage`
- **Estado persistente** — curtidas salvas entre sessões via `localStorage`
- **Capa dinâmica** — atualiza a imagem de acordo com a música atual

---

## 🎨 Estilo

O visual segue o padrão escuro do Spotify com gradiente característico:

```css
background-image: linear-gradient(
  rgb(59, 88, 93),
  rgb(29, 40, 42)
);
```

O verde do Spotify é usado para indicar botões ativos (shuffle, repeat, like):

```css
.button-active {
  color: rgb(0, 183, 107);
}
```

---

## 📄 Licença

Projeto de uso pessoal / estudo. Todos os direitos da marca Spotify pertencem à Spotify AB.  
© 2026 Spotify Clone.