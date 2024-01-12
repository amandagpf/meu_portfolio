//Código para alterar do modo dark para o light.
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

//Para que não apareça o Switch quando o menu toggle for ativado.
function hideSwitch() {
const toggler = document.getElementById("navbar-menu");
const switchElement = document.querySelector('.switch');

if (toggler.getAttribute('aria-expanded') === "true") {
    switchElement.style.display = 'none';
}else if(toggler.getAttribute('aria-expanded') === "false"){
    switchElement.style.display = 'block';
}
}


//Filtro de projetos
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
                if (project.classList.contains('project')) {
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

//Deixa o destaques ativado toda vez que carregar/recarregar a página
destaquesButton.click();
});

//Para enviar o formulario
class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.getElementById(settings.buttonId);
      if (this.form) {
        this.url = "https://formsubmit.co/8f9289f8a0ea671a34381d0a111bac22";
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: ".formulario",
    buttonId: "enviar",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();