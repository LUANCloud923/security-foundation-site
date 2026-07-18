# Security Foundation Kit — Landing Page

Landing page de venda em português, construída com Next.js, TypeScript e Tailwind CSS.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

Copie `.env.example` para `.env.local` e preencha as variáveis:

- `NEXT_PUBLIC_WHATSAPP_URL`: URL do WhatsApp ou de compra usada pelos CTAs principais.
- `NEXT_PUBLIC_SUPPORT_EMAIL`: e-mail exibido no rodapé.

Enquanto não for configurada, a página usa uma URL placeholder claramente identificada. As configurações também estão centralizadas em `src/config/site.ts`.

## Validar produção

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy na Vercel

1. Envie este diretório para um repositório Git.
2. Importe o repositório na Vercel.
3. Em **Environment Variables**, configure `NEXT_PUBLIC_WHATSAPP_URL` e `NEXT_PUBLIC_SUPPORT_EMAIL`.
4. Faça o deploy. A Vercel detecta automaticamente o Next.js e executa `npm run build`.
# security-foundation-site
