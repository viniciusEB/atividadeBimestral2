# Pokédex

Aplicativo mobile que consome a **PokéAPI**, desenvolvido com **React Native**, **Expo** e **TypeScript**. O app reproduz o visual de uma Pokédex e tem três telas: **Lista**, com todos os Pokémon, **Detalhes**, com as informações de cada um, e **Favoritos**.

> Projeto sem fins comerciais, desenvolvido para a Atividade Bimestral 2.

## Integrantes

- Vinicius Ernani Bessa dos Santos
- Matheus Duarte

## Descrição

O Pokédex permite navegar pela lista de Pokémon, buscar por nome, ver os detalhes de cada um e salvar seus preferidos na tela de favoritos. Os dados vêm da API pública [PokéAPI](https://pokeapi.co/).

## API utilizada

- **PokéAPI** (https://pokeapi.co/): API pública e gratuita, sem necessidade de chave de acesso.

## Funcionalidades

### Tela Lista
- Cards em duas colunas com imagem, número (#001) e nome de cada Pokémon
- Campo **"Buscar Pokémon..."** para filtrar a lista pelo nome
- Botão **"♥ Favoritos"** no cabeçalho, que leva à tela de favoritos
- Toque no card para abrir a tela de detalhes

### Tela Detalhes
- Informações do Pokémon selecionado, obtidas da PokéAPI [ajuste: tipos, altura, peso, habilidades, status...]
- Botão **"Favoritar"** para adicionar ou remover o Pokémon dos favoritos

### Tela Favoritos
- Lista dos Pokémon favoritados, no mesmo formato de cards da Lista
- Mensagem orientando o usuário quando ainda não há favoritos
- Toque no card para abrir os detalhes

### Diferenciais
- **Visual de Pokédex**: cabeçalho vermelho, cards brancos e cores por tipo de Pokémon
- **Favoritos globais**: estado compartilhado entre as telas com Context API
- **Tratamento de estados**: mensagens para carregamento, erro e lista vazia
- **Navegação**: React Navigation (native stack) entre as três telas

## Tecnologias

- React Native + Expo
- TypeScript
- React Navigation (native stack)
- PokéAPI

## Como executar

1. Clone o repositório:
```
   git clone https://github.com/viniciusEB/atividadeBimestral2.git
   cd atividadeBimestral2
```
2. Instale as dependências:
```
   npm install
```
3. Inicie o projeto:
```
   npm run start
```
4. Escaneie o QR Code com o **Expo Go** ou abra no emulador Android (tecla `a` no terminal).

> O Expo Go precisa ser compatível com a versão do SDK do projeto (veja `expo` no `package.json`). Se aparecer erro de incompatibilidade, baixe o Expo Go correspondente em [expo.dev/go](https://expo.dev/go).

Cada componente e cada tela seguem o padrão `Nome.tsx` (estrutura) + `NomeStyles.ts` (estilos).