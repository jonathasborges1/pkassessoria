# PK Assessoria

Projeto em Next.js para apresentacao comercial da Alciellen, consultora comercial da J&R Concretos em Manaus.

A pagina apresenta servicos como concreto usinado, lajes pre-moldadas, vigotas, bombeamento de concreto, piso polido e piso discado, com foco em captacao de orcamentos pelo WhatsApp.

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Lucide React
- CSS embutido no componente principal

## Como rodar

Instale as dependencias:

```bash
npm install
```

Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

Por padrao, o projeto sobe em:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Inicia o servidor de desenvolvimento na porta 3000.

```bash
npm run build
```

Gera a versao de producao.

```bash
npm run start
```

Inicia a aplicacao em modo producao na porta 3001.

```bash
npm run lint
```

Executa o lint configurado pelo Next.js.

## Estrutura Principal

```text
app/
  page.tsx
  layout.tsx
  globals.css
  robots.ts
  sitemap.ts
  proposta-comercial/
    alciellen/
      page.tsx
      layout.tsx
public/
  images/
    alciellen/
```

## Rotas

- `/` - Pagina principal da proposta comercial.
- `/proposta-comercial/alciellen` - Alias da mesma pagina principal.

## Imagens

Os assets da cliente ficam em:

```text
public/images/alciellen/
```

Imagem prevista para os servicos de piso polido e piso discado:

```text
public/images/alciellen/piso-polido-piso-discado-jr-concretos.jpg
```

Essa imagem e usada nos cards dos servicos e na galeria de obras. Caso ainda nao exista no projeto, basta adicionar o arquivo nesse caminho com esse nome.

## Contatos

Os links de WhatsApp estao definidos no arquivo:

```text
app/page.tsx
```

Constante principal:

```ts
const WA_NUMBER = "5592993564052";
```

## Observacoes

Este projeto foi construido como uma proposta comercial visual. Antes de publicar, vale revisar textos institucionais, diferenciais, dados de atendimento e imagens finais aprovadas pela cliente.

## Instrucoes para windows

Get-NetTCPConnection -State Listen | Where-Object {$_.OwningProcess -in (Get-Process node).Id} | Select-Object LocalAddress, LocalPort, @{Name="Process";Expression={(Get-Process -Id $_.OwningProcess).ProcessName}}, OwningProcess

taskkill /PID 15432 /F
