# Como publicar / manter a landing page no GitHub Pages

> ✅ **A página já está no ar em: https://ekz007.github.io/**
> (URL gratuita gerada automaticamente pelo GitHub — sem precisar comprar domínio.)

## ⚠️ Atenção às URLs (isto causava o erro 404)

Sua conta do GitHub é **`Ekz007`**. Portanto:

| URL | Vale? |
|-----|-------|
| `https://ekz007.github.io/` | ✅ **É a URL correta** |
| `https://mauricioeskenazi.github.io/` | ❌ 404 — esse repositório não existe |
| `https://mauriciopernidji.github.io/` | ❌ 404 — esse usuário não existe no GitHub |

O erro **"There isn't a GitHub Pages site here"** aparecia porque a URL acessada não
correspondia à conta/repositório reais. A página só responde em `ekz007.github.io`.

## Estado atual do projeto

- **Usuário GitHub:** `Ekz007`
- **Repositório:** `Ekz007.github.io` (já criado, público, Pages ativo)
- **Remote já configurado:** `https://github.com/Ekz007/Ekz007.github.io.git`
- **Arquivo principal:** `index.html`, na raiz (é o que o Pages exige)

Como o repositório se chama exatamente `SEU-USUARIO.github.io` (`Ekz007.github.io`),
o site fica no domínio raiz `https://ekz007.github.io/` — e não numa subpasta.

## Como atualizar a página (fluxo do dia a dia)

Depois de editar o `index.html`, envie as mudanças:

```bash
cd C:/Users/User/Documents/portfolio-mauricio
git add .
git commit -m "Atualiza landing page"
git push
```

Espere ~1 minuto e recarregue **https://ekz007.github.io/** (use Ctrl+F5 para
ignorar o cache do navegador).

> 💡 Há um commit local pendente (o do `.nojekyll`). Basta rodar `git push` uma vez
> para sincronizar. Se pedir login, autentique com `gh auth login` ou pelo navegador.

## Onde o GitHub Pages está configurado

No repositório `Ekz007.github.io` → **Settings → Pages**:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Pasta:** `/ (root)`

Para uma landing page HTML simples, publicar pela branch `main` é o caminho mais fácil.
(Um projeto em React/Vite exigiria gerar o build e configurar deploy via GitHub Actions —
não é o caso aqui, pois é HTML/CSS/JS estático.)

## O que personalizar no index.html

- Texto da seção **Sobre mim** (ainda tem o aviso "Edite este texto com a sua história.")
- A lista de **Tecnologias**
- O **e-mail** de contato (hoje está `mailto:seu-email@exemplo.com` — placeholder)
- O link do **LinkedIn** (hoje está genérico `https://www.linkedin.com/` — placeholder)

> Os **projetos aparecem sozinhos** — o site puxa os repositórios públicos da conta
> `Ekz007` direto pela API do GitHub. Basta ter repositórios públicos e eles aparecem.

## Checklist se voltar a dar 404

- ✅ O arquivo se chama exatamente `index.html` (tudo minúsculo)
- ✅ O `index.html` está na raiz do repositório
- ✅ A branch publicada é `main`, pasta `/ (root)`
- ✅ O repositório está **público**
- ✅ Existe pelo menos um commit na branch (e o `git push` foi feito)
- ✅ Você está acessando **https://ekz007.github.io/** (a URL correta)
