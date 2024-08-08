// transição header
window.addEventListener("scroll", function () {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem-header', window.scrollY > 50)
});

$(document).ready(function () {

    var descriptions = {
        'box-html': "Habilidade em HTML, utilizado para estruturar o conteúdo das páginas web.",
        'box-css': "Conhecimento em CSS, usado para estilizar e formatar elementos HTML.",
        'box-sql': "Habilidade em SQL, utilizado para gerenciar e consultar bancos de dados relacionais.",
        'box-js': "Conhecimento em JavaScript, usado para adicionar interatividade e dinamismo às páginas web.",
        'box-bootstrap': "Proficiente em Bootstrap, um framework front-end utilizado para criar interfaces web responsivas e estilizadas com facilidade.",
        'box-csharpe': "Conhecimento em C#, usado principalmente para desenvolvimento de software na plataforma .NET.",
        'box-angular': "Habilidade em Angular, um framework JavaScript para construção de aplicações web dinâmicas e escaláveis.",
        'box-git': "Conhecimento em Git, utilizado para controle de versão e colaboração em projetos de desenvolvimento."
    };

    $('.box').click(function () {
        let clique = $(this).attr('id');
        $('.texto-selecionavel').html(descriptions[clique]);
    });
});
