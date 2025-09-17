# AgendaPro

## Agenda de contato online

Um aplicativo web moderno para gerenciamento de contatos pessoais e profissionais, desenvolvido com React e tecnologias modernas.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Roteamento e navegação entre páginas
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **JavaScript ES6+** - Linguagem de programação com módulos ES
- **Vite** - Ferramenta de build e desenvolvimento

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e componentizada:

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Layout/         # Componentes de layout (Header, Sidebar)
│   └── Contact/        # Componentes específicos de contatos
├── contexts/           # Contextos React para gerenciamento de estado
├── pages/              # Componentes de página (rotas)
├── services/           # Serviços para comunicação com API
└── App.jsx             # Componente principal
```

Princípios aplicados:

- Componentes modulares e reutilizáveis
- Gerenciamento de estado com Context API + useReducer
- Separação de preocupações (separação entre lógica e UI)
- Named exports para melhor tree-shaking
- Mock services para simular integração com backend

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd agenda-pro
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador e acesse:

```
http://localhost:5173
```

## 🚀 Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

## ✨ Funcionalidades

- ✅ Listagem de contatos com busca
- ✅ Visualização de detalhes do contato
- ✅ Criação e edição de contatos
- ✅ Exclusão de contatos
- ✅ Dashboard com estatísticas
- ✅ Interface responsiva
- ✅ Navegação por rotas
- ✅ Categorização de contatos
