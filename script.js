function validarFormulario(event) {
    event.preventDefault(); 

    var nome = document.forms["inscricao"]["nome"].value;
    var matricula = document.forms["inscricao"]["matricula"].value;
    var cpf = document.forms["inscricao"]["cpf"].value;
    var email = document.forms["inscricao"]["email"].value;
    var turma = document.forms["inscricao"]["turma"].value;

   
    if (nome === "" || matricula === "" || cpf === "" || email === "" || turma === "") {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return false;
    }

    
    var cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf.match(cpfPattern)) {
        alert("O CPF deve estar no formato XXX.XXX.XXX-XX.");
        return false;
    }

    
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("O email deve estar em um formato válido.");
        return false;
    }

    
    salvarInformacoesLocalmente();
}

function salvarInformacoesLocalmente() {
    var nome = document.forms["inscricao"]["nome"].value;
    var matricula = document.forms["inscricao"]["matricula"].value;
    var cpf = document.forms["inscricao"]["cpf"].value;
    var email = document.forms["inscricao"]["email"].value;
    var turma = document.forms["inscricao"]["turma"].value;

    var inscricao = {
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        email: email,
        turma: turma
    };

    
    var inscricaoJSON = JSON.stringify(inscricao);


    localStorage.setItem("inscricao", inscricaoJSON);


    alert("Inscrição efetuada com sucesso");
}


if (localStorage.getItem("total_inscritos") === null) {

    localStorage.setItem("total_inscritos", 0);
}


var totalInscritos = parseInt(localStorage.getItem("total_inscritos"));
totalInscritos = isNaN(totalInscritos) ? 0 : totalInscritos;
totalInscritos++;
localStorage.setItem("total_inscritos", totalInscritos);


var numeroTotalInscritos = localStorage.getItem("total_inscritos");

console.log("Número total de inscritos: " + numeroTotalInscritos);