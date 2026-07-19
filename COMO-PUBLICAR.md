# Como publicar seu portfólio no GitHub Pages

Seu site vai ficar no ar em: **https://mauricioeskenazi.github.io**
(URL gratuita — o GitHub cria automaticamente, sem precisar comprar domínio)

## Passo a passo

### 1. Crie o repositório
- Acesse https://github.com/new
- Em **Repository name**, digite EXATAMENTE: `MauricioEskenazi.github.io`
- Deixe como **Public**
- Clique em **Create repository**

### 2. Suba o arquivo `index.html`
Modo fácil (pelo site):
- No repositório, clique em **"Add file" → "Upload files"**
- Arraste o arquivo `index.html`
- Clique em **"Commit changes"**

Ou pelo terminal (git):
```bash
cd C:/Users/User/Documents/portfolio-mauricio
git init
git add index.html
git commit -m "Meu portfolio"
git branch -M main
git remote add origin https://github.com/MauricioEskenazi/MauricioEskenazi.github.io.git
git push -u origin main
```

### 3. Ative o GitHub Pages
- No repositório, vá em **Settings → Pages**
- Em **Branch**, selecione `main` e a pasta `/ (root)`
- Clique em **Save**

### 4. Pronto! 🎉
Espere ~1 minuto e acesse: **https://mauricioeskenazi.github.io**

## O que personalizar no index.html
- Texto da seção **Sobre mim**
- A lista de **Tecnologias**
- O **e-mail** e o link do **LinkedIn** na seção de contato

> Os **projetos aparecem sozinhos** — o site puxa seus repositórios direto da API do GitHub.
> Basta ter repositórios públicos na sua conta que eles aparecem automaticamente.
