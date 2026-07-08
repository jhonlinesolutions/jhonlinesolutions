# JH Online Solutions — Website Institucional

Site institucional e blog da **JH Online Solutions LTDA**, construído com Next.js 16 (App Router), Tailwind CSS v4, TypeScript e Framer Motion.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** (configuração via `@theme` em `src/app/globals.css`, sem `tailwind.config.js`)
- **Framer Motion** para animações de scroll (respeitando `prefers-reduced-motion`)
- **Blog em MDX** — posts versionados em `content/blog/*.mdx`, sem CMS externo
- **Zod** para validação do formulário de contato (Server Action)
- **Resend** (opcional) para envio de e-mail do formulário de contato

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha conforme necessário:

```bash
cp .env.example .env.local
```

| Variável | Obrigatória | Descrição |
|---|---|---|
| `RESEND_API_KEY` | Não | Chave da [Resend](https://resend.com) para enviar e-mails do formulário de contato. Sem ela, o formulário exibe uma mensagem pedindo contato direto por e-mail/telefone — o site funciona normalmente, só o envio automático fica desativado. |
| `CONTACT_FROM_EMAIL` | Não | Remetente do e-mail (precisa ser um domínio verificado na Resend, ou use o padrão `onboarding@resend.dev` para testes). |
| `CONTACT_TO_EMAIL` | Não | Caixa de entrada que recebe os leads. Padrão: `contato@jhonlinesolutions.com.br`. |

## Estrutura

```
src/
  app/            # Rotas (App Router): home, sobre, servicos, blog, contato
  components/     # Componentes de UI reutilizáveis
  lib/            # site-config, dados de serviços, blog (leitura de MDX), Server Actions
content/
  blog/           # Posts do blog em MDX (frontmatter: title, description, date, category, author)
```

### Adicionando um novo post no blog

Crie um arquivo `.mdx` em `content/blog/` com o frontmatter:

```md
---
title: "Título do post"
description: "Resumo curto para o card e SEO."
date: "2026-07-08"
category: "Categoria"
author: "Equipe JH Online Solutions"
---

Conteúdo em Markdown...
```

O post aparece automaticamente no blog e no sitemap — não é necessário registrar em nenhum outro lugar.

## Deploy (GitHub → Vercel)

1. Crie um repositório no GitHub e envie este projeto:

   ```bash
   git remote add origin <url-do-repositorio>
   git branch -M main
   git push -u origin main
   ```

2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel detecta Next.js automaticamente — nenhuma configuração de build é necessária.
3. Em **Project Settings → Environment Variables**, adicione `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL` (se for usar o envio de e-mail).
4. Deploy. Cada push para `main` gera um deploy de produção automaticamente; pull requests geram preview deployments.

### Domínio próprio

Em **Project Settings → Domains**, adicione o domínio da empresa e siga as instruções de DNS da Vercel. Depois, atualize `url` em `src/lib/site-config.ts` para refletir o domínio final (usado em metadata, sitemap e OG images).

## Scripts

```bash
npm run dev     # Ambiente de desenvolvimento
npm run build   # Build de produção
npm run start   # Servir o build de produção localmente
npm run lint    # ESLint
```
