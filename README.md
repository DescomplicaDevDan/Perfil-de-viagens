# 📸 Travelgram: Seu Diário de Viagens Visual - Projeto acâdemico

## 🌟 Visão Geral do Projeto

O **Travelgram** é uma página de perfil de usuário projetada para um aplicativo ou plataforma de diário de viagens visual. Inspirado nas tendências atuais de design de interfaces de mídia social e blogs de viagem, este projeto foca em uma apresentação limpa, responsiva e visualmente atraente do perfil de um viajante, suas estatísticas e uma galeria de fotos de suas aventuras.

Desenvolvido com **HTML5** e **CSS3**, o Travelgram demonstra boas práticas de desenvolvimento web, incluindo semântica, acessibilidade e um design responsivo que se adapta a diferentes tamanhos de tela.

## ✨ Recursos

* **Barra de Navegação Intuitiva:** Com logo, links de navegação (`Explorar`, `Minhas viagens`) e ícones funcionais (`Lupa`, `Perfil`).
* **Seção de Perfil Dinâmica:**
    * Foto de perfil circular com borda de destaque.
    * Nome do usuário (`Isabela Torres`) e uma biografia concisa e envolvente.
    * **Estatísticas de Viagem:** Exibição clara de localização atual, número de países visitados e quantidade de fotos publicadas, utilizando ícones para melhor compreensão.
* **Galeria de Imagens Responsiva:**
    * Layout em grade de fotos, utilizando `display: flex` com `flex-wrap` para adaptação.
    * Imagens de tamanho fixo, mas que se organizam de forma fluida.
    * Efeito de zoom suave (`scale`) ao passar o mouse sobre as fotos, proporcionando uma experiência interativa.
* **Design Clean e Moderno:** Utilização da fonte "Poppins" e uma paleta de cores agradável para uma experiência visual sofisticada.
* **Estrutura CSS Modular:** Estilos organizados em arquivos separados (`global.css`, `nav.css`, `header.css`, `gallery.css`) e importados via `@import` no `index.css`, facilitando a manutenção e escalabilidade.
* **Acessibilidade:** Uso de atributos `alt` em todas as imagens para garantir que o conteúdo seja acessível a leitores de tela.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura e semântica do conteúdo.
* **CSS3:** Para a estilização e responsividade, com ênfase em:
    * **Flexbox:** Para layout de navegação e seções do cabeçalho.
    * **Variáveis CSS (`:root`):** Para gerenciamento eficiente de cores e tipografia.
    * **`object-fit: cover`:** Para garantir que as imagens preencham seus contêineres sem distorção.
    * **`box-shadow` e `border-radius`:** Para criar um visual de "cards" flutuantes.
    * **`transition` e `transform`:** Para efeitos de interação suaves.
* **Google Fonts:** Utilização da fonte "Poppins" para uma tipografia moderna.
* **Ícones SVG:** Ícones leves e escaláveis para elementos interativos e informativos.

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/DescomplicaDevDan/Perfil-de-viagens.git](https://github.com/DescomplicaDevDan/Perfil-de-viagens.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd travelgram
    ```
3.  **Abra o arquivo `index.html` em seu navegador web preferido.**
    * Alternativamente, você pode usar uma extensão de servidor local como "Live Server" no VS Code para auto-recarregamento.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Danilo Texeira
