# Around the U.S. - Projeto Web Interativo

Este repositório contém o projeto "Around the U.S.", uma página de galeria de fotos totalmente interativa desenvolvida como parte do bootcamp de Desenvolvimento Web da Tripleten. A aplicação foi construída a partir de um layout no Figma e evoluiu para uma single-page application (SPA) robusta.

O projeto foi refatorado para utilizar uma arquitetura modular e Orientada a Objetos (OOP), com foco em código limpo, componentização e escalabilidade.

### [Veja o projeto no ar](https://roastoffel.github.io/web_project_around/)

## Funcionalidades Implementadas

- **Edição de Perfil:** O usuário pode editar o nome e a descrição do seu perfil através de um formulário em um popup.
- **Galeria Dinâmica:** Os cartões com as imagens e títulos são renderizados dinamicamente na página.
- **Adição de Novos Locais:** É possível adicionar novos cartões à galeria preenchendo um formulário com título e URL da imagem.
- **Visualização de Imagens:** Clicar em uma imagem abre um popup com a visualização ampliada.
- **Funcionalidade "Curtir":** Os usuários podem marcar seus cartões favoritos.
- **Remoção de Cartões:** Cada cartão possui a opção de ser removido da galeria.

## Recursos e Tecnologias

- **HTML5 Semântico:** Estrutura organizada e acessível.
- **CSS3 com Design Responsivo:**
  - **Flexbox** e **Grid Layout** para a construção de layouts complexos.
  - **Media Queries** para total adaptação a diferentes resoluções de tela.
  - **Metodologia BEM** para uma arquitetura de CSS organizada e escalável.
- **JavaScript (ES6+):**
  - **Arquitetura Orientada a Objetos (OOP):** O código é estruturado em classes para componentizar responsabilidades, tornando-o mais limpo e fácil de manter.
  - **ES6 Modules (`import`/`export`):** O JavaScript é dividido em módulos, separando a lógica em arquivos distintos e melhorando a organização do projeto.
  - **Classe `Card`:** Componente responsável por criar, renderizar e gerenciar toda a interatividade de um único cartão da galeria (criar a partir de um template, adicionar listeners de like, exclusão e clique na imagem).
  - **Classe `FormValidator`:** Componente reutilizável que encapsula toda a lógica de validação de formulários do projeto, aplicando feedback visual em tempo real.
  - **Manipulação do DOM:** O script principal (`index.js`) orquestra a aplicação, instanciando as classes e atualizando a página dinamicamente.

## Como Executar o Projeto

Por utilizar módulos ES6, este projeto precisa ser executado a partir de um servidor local.

1.  Clone este repositório para a sua máquina local.
2.  Abra a pasta do projeto em um editor de código (ex: VSCode).
3.  Utilize uma extensão como o **Live Server** (para VSCode) para iniciar o projeto. Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
