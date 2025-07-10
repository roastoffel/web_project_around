# Around the U.S. - Projeto Web Interativo

Este repositório contém o projeto "Around the U.S.", uma página de galeria de fotos totalmente interativa desenvolvida como parte do bootcamp de Desenvolvimento Web da Tripleten. A aplicação foi construída a partir de um layout no Figma e evoluiu para uma single-page application (SPA) robusta, com manipulação dinâmica do DOM e validação de formulários em tempo real.

O projeto demonstra a aplicação de tecnologias front-end modernas para criar uma experiência de usuário fluida e responsiva, com foco em boas práticas de código, performance e componentização.

### [Veja o projeto no ar](https://roastoffel.github.io/web_project_around/)

## Funcionalidades Implementadas

- **Edição de Perfil:** O usuário pode editar o nome e a descrição do seu perfil através de um formulário em um popup.
- **Galeria Dinâmica:** Os cartões com as imagens e títulos são renderizados dinamicamente na página via JavaScript.
- **Adição de Novos Locais:** É possível adicionar novos cartões à galeria preenchendo um formulário com título e URL da imagem.
- **Visualização de Imagens:** Clicar em uma imagem abre um popup com a visualização ampliada.
- **Funcionalidade "Curtir":** Os usuários podem marcar seus cartões favoritos.
- **Remoção de Cartões:** Cada cartão possui a opção de ser removido da galeria.

## Recursos e Tecnologias

- **HTML5 Semântico:** Estrutura organizada e acessível.
- **CSS3 com Design Responsivo:**
  - **Flexbox** e **Grid Layout** para a construção de layouts complexos e alinhados.
  - **Media Queries** para total adaptação a diferentes resoluções de tela (desktop, tablet e mobile).
  - **Metodologia BEM** para uma arquitetura de CSS organizada e escalável.
  - Uso de `@font-face` para a importação de fontes customizadas.
- **JavaScript (ES6+):**
  - **Manipulação Avançada do DOM:** Criação, adição e remoção de elementos de forma dinâmica.
  - **Sistema de Popups Universal:** Funções centralizadas para abrir e fechar os três popups da aplicação (Editar Perfil, Adicionar Local e Visualizar Imagem).
  - **Gerenciamento de Eventos:** Implementação de múltiplos _event listeners_ para uma interatividade completa, incluindo:
    - Fechamento dos popups ao clicar na sobreposição (overlay).
    - Fechamento dos popups ao pressionar a tecla `Esc`.
  - **Módulo de Validação de Formulários (`validate.js`):**
    - Função de validação universal e reutilizável que se aplica a todos os formulários.
    - Uso da API de Validação de Restrições do HTML5 (`validityState`).
    - Exibição de mensagens de erro customizadas e em tempo real.
    - Gerenciamento dinâmico do estado (ativo/inativo) dos botões de envio com base na validade dos campos.
