function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('dark');
    html.classList.toggle('light');

    //Para alteração de imagens do modo dark pro light
    const lightImg = document.querySelectorAll('.light-img');
    const darkImg = document.querySelectorAll('.dark-img');

    if (html.classList.contains('light')) {
    
        darkImg.forEach(element => {
            element.style.display = 'none';
        });

        lightImg.forEach(element => {
            element.style.display = 'block';
        });
        
    } else {
        darkImg.forEach(element => {
            element.style.display = 'block';
        });

        lightImg.forEach(element => {
            element.style.display = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project');
    const destaquesButton = document.getElementById('destaques-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            projects.forEach(project => {
                project.style.display = 'none';
                if (filterValue === 'todos') {
                    if (project.classList.contains('ativo')) {
                        project.style.display = 'block';
                    }
                } else {
                    if (project.classList.contains(filterValue)) {
                        project.style.display = 'block';
                    }
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
    destaquesButton.addEventListener('click', () => {
        projects.forEach(project => {
            project.style.display = 'none';
            if (project.classList.contains('ativo')) {
                project.style.display = 'block';
            }
        });

        // Atualiza o estado dos botões
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        destaquesButton.classList.add('active');
    });

    destaquesButton.click();
});

