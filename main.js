$(document).ready(function() {

    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('(00000-000')
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required:true
            },
            cep: {
                required:true
            },
            enderecoCompleto: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, escreva seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})