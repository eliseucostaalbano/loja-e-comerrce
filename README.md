
# Configuração do Projeto React com Vite, Tailwind CSS e Shadcn-UI

## Criar Projeto

### Criar um novo projeto Vite usando npm

```bash
npm create vite@latest
```

## Adicionar e Configurar Tailwind CSS

### Instalar tailwindcss e suas dependências

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Gerar os arquivos de configuração tailwind.config.js e postcss.config.js

```bash
npx tailwindcss init -p
```

## Configuração do Vite

### Atualizar o arquivo vite.config.js

```javascript
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## Configuração do Shadcn-UI

### Executar o CLI

Execute o comando `shadcn-ui init` para configurar seu projeto:

```bash
npx shadcn-ui@latest init
```

### Configurar components.json

Você será solicitado a configurar o arquivo `components.json` com algumas perguntas:

- TypeScript (recomendado)? no / yes
- Estilo padrão? › Default
- Cor base? › Slate
- Onde está seu arquivo CSS global? › › src/index.css
- Usar variáveis CSS para cores? › no / yes
- Onde está seu tailwind.config.js? › tailwind.config.js
- Alias de importação para components: › @/components
- Alias de importação para utils: › @/lib/utils
- Usando React Server Components? › no / yes (no)

## Configuração do jsconfig.json

### Criar jsconfig.json

Crie um arquivo `jsconfig.json` na raiz do seu projeto com o seguinte conteúdo:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Uso de Componentes

### Adicionar Componentes

Para adicionar um componente como o botão:

```bash
npx shadcn-ui@latest add button
```

### Exemplo de Uso

```javascript
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

