document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project');
    const destaquesButton = document.getElementById('destaques-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            projects.forEach(project => {
                project.style.display = 'none';
                if (project.classList.contains(filterValue) || filterValue === 'todos') {
                    project.style.display = 'block';
                }
            });

            // Atualiza o estado dos botões
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });

    // Exibe os projetos ativos inicialmente
    projects.forEach(project => {
        if (project.classList.contains('ativo')) {
            project.style.display = 'block';
        }
    });

    // Ativa o botão de destaques inicialmente
    destaquesButton.click();
});
