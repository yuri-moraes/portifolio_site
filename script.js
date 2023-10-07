// Seleciona todos os links de âncora que têm a classe .scroll-link
document.querySelectorAll('a.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtém o destino da âncora (o ID da seção alvo)
        const targetId = this.getAttribute('href').substring(1);

        // Encontra a seção de destino usando o ID
        const targetSection = document.getElementById(targetId);

        // Calcula a posição da seção de destino
        const offset = 100; // Ajuste esse valor conforme necessário para controlar o espaçamento entre a seção e o topo da página
        const targetOffsetTop = targetSection.offsetTop - offset;

        // Role suavemente para a seção de destino usando o método scrollTo
        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth' // Isso habilita a animação de rolagem suave
        });
    });
});
