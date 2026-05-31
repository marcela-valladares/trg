# Landing Page Marcela Valladares

Landing page premium em Next.js, Tailwind CSS e Framer Motion, pronta para deploy na Vercel.

## Rodar no Windows deste workspace

Se `npm` nao estiver disponivel no terminal, use:

```cmd
run-dev.cmd
```

Acesse:

```text
http://127.0.0.1:3000
```

Para testar em um celular na mesma rede Wi-Fi, use o IP do computador:

```text
http://192.168.1.9:3000
```

Esse link local funciona apenas enquanto o computador estiver ligado, na mesma rede e com `run-dev.cmd` aberto.

Para validar o build:

```cmd
run-build.cmd
```

Se preferir PowerShell e a execucao de scripts estiver liberada, tambem existem:

```powershell
.\run-dev.ps1
.\run-build.ps1
```

## Rodar em um ambiente normal com Node/npm

```powershell
npm install
npm run dev
```

## Deploy na Vercel

Suba este diretorio como projeto Next.js. A Vercel detecta automaticamente o framework e usa:

```text
npm run build
```

Para Instagram, anuncios e WhatsApp, publique na Vercel e use o link publico gerado pela plataforma.
