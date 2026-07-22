# Barrion Contabilidade & Consultoria — Protótipo do novo site

Protótipo de um site **moderno, digital e com apelo para a Geração Z**, criado para
modernizar a presença online da **Barrion Contabilidade & Consultoria** (Colombo/Curitiba – PR).

O conteúdo é baseado no site atual ([barrion.com.br](http://www.barrion.com.br/)) e nos
dados públicos da empresa, reorganizado em uma experiência mais leve, rápida e mobile-first.

## ✨ Destaques do protótipo

- **Visual moderno**: gradientes, cards em vidro (glassmorphism), tipografia contemporânea
  (Space Grotesk + Plus Jakarta Sans) e microanimações.
- **Linguagem Geração Z**: textos diretos, sem juridiquês, com foco em "descomplicar".
- **Modo claro e escuro** 🌙☀️ (com preferência salva no navegador).
- **100% responsivo** — pensado primeiro para o celular.
- **Botão flutuante de WhatsApp** e CTAs de conversão em todo o site.
- **Seções**: Hero, Sobre, Serviços, Resultados (contadores animados), Portal do Cliente,
  News, Agenda Tributária, Links úteis (federais/estaduais) e Contato.
- **Logo recriada em SVG** (versões clara e escura + favicon), fiel às cores da marca.
- Sem dependências de build: **HTML + CSS + JS puro**.

## 🎨 Paleta (baseada na logo)

| Cor | Uso |
|-----|-----|
| Azul-marinho `#0a2a4d` | Base / rodapé |
| Azul brilhante `#3aa0ff` | Destaques / gradientes |
| Dourado `#f5a623` | Acentos (Portal, detalhes) |

## 📁 Estrutura

```
.
├── index.html          # Página única (landing) em pt-BR
├── css/styles.css      # Estilos + temas claro/escuro + responsivo
├── js/main.js          # Tema, menu mobile, contadores, reveal, form
└── assets/
    ├── logo.svg         # Logo (fundo claro)
    ├── logo-light.svg   # Logo (fundo escuro)
    └── favicon.svg      # Ícone da marca
```

## 🚀 Como visualizar

Abra o `index.html` no navegador, ou rode um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## 📌 Observações

- É um **protótipo visual**. O formulário de contato e o Portal do Cliente são simulados —
  basta conectar a um e-mail, WhatsApp Business API ou sistema real para funcionar.
- A **logo é uma recriação em SVG** baseada na identidade atual. Recomenda-se substituir
  pelo arquivo vetorial original quando disponível.
- O e-mail `contato@barrion.com.br` é um **placeholder** — ajuste para o e-mail oficial.
- Textos das notícias (News) e da Agenda Tributária são exemplos ilustrativos.

## ✅ Próximos passos sugeridos

1. Substituir a logo recriada pelo vetor oficial.
2. Confirmar e-mail, endereço e horários de atendimento reais.
3. Conectar o formulário e o Portal do Cliente a um back-end.
4. Publicar (GitHub Pages, Netlify ou Vercel) com domínio `barrion.com.br` e HTTPS.
