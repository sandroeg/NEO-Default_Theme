$(document).ready(function(){
/*Repete o que foi digitado*/
    $("input[name='Name']").keyup(function(){$("#nome-rt").html($("input[name='Name']").val())});
    $("input[name='Email']").keyup(function(){$("#email-rt").html($("input[name='Email']").val())});
    $("input[name='Phone']").keyup(function(){$("#tel-rt").html($("input[name='Phone']").val())});
    $("input[name='Subject']").keyup(function(){$("#assunto-rt").html($("input[name='Subject']").val())});
    $("textarea[name='Message']").keyup(function(){$("#mensagem-rt").html($("textarea[name='Message']").val())});

/*validações*/
    $(".form.avaliacao")
        .form({        
            fields:{
                Name:{
                    identifier:"Name",
                    rules:[
                        {
                            type:"empty",
                            prompt:"Nome não pode estar em branco"
                        }
                    ]
                },
                Email:{
                    identifier:"Email",
                    rules:[
                        {
                            type:"empty",
                            prompt:"E-mail não pode estar em branco"
                        },
                        {
                            type:"email",
                            prompt:"Formato de E-mail inválido"
                        }
                    ]
                },
                Phone:{
                    identifier:"Phone",
                    rules:[
                        {
                            type:"minLength[14]",
                            prompt:"Número de telefone inválido"}
                    ]
                },
                Subject:{
                    identifier:"Subject",
                    rules:[
                        {
                            type:"empty",
                            prompt:"Assunto não pode estar em branco"
                        }
                    ]
                },
                Message:{
                    identifier:"Message",
                    rules:
                    [
                        {
                            type:"empty",
                            prompt:"Mensagem não pode estar em branco"
                        }
                    ]
                }
            }
        });

/*Limpar o que foi digitado*/
    $(".limpar").click(function(){$(".digitado").html("")})


/*Guardar form na session*/
$( ".form.avaliacao" ).submit(function( event ) {

    if( $('.form.avaliacao').form('is valid')) {
        // form is valid (both email and name)      
        sessionStorage.setItem("Nome",$("input[name='Name']").val()),
        sessionStorage.setItem("Email",$("input[name='Email']").val());
        sessionStorage.setItem("Phone",$("input[name='Phone']").val());
        sessionStorage.setItem("Subject",$("input[name='Subject']").val());
        sessionStorage.setItem("Message",$("textarea[name='Message']").val());
        $(".ui.modal.formend").modal("show");
        $(".digitado").html("");
        $(".form.avaliacao").form("clear");
        $(".recuperar").removeAttr("disabled");        
    }
    event.preventDefault();
});

/*Recupera form da session*/
    $(".recuperar").click(function(){               
        $("#nome-rt").html(sessionStorage.getItem("Nome"));
        $("input[name='Name']").val(sessionStorage.getItem("Nome"));
        $("#email-rt").html(sessionStorage.getItem("Email"));
        $("input[name='Email']").val(sessionStorage.getItem("Email"));
        $("#tel-rt").html(sessionStorage.getItem("Phone"));
        $("input[name='Phone']").val(sessionStorage.getItem("Phone"));
        $("#assunto-rt").html(sessionStorage.getItem("Subject"));
        $("input[name='Subject']").val(sessionStorage.getItem("Subject"));
        $("#mensagem-rt").html(sessionStorage.getItem("Message"));
        $("textarea[name='Message']").val(sessionStorage.getItem("Message"));
        event.preventDefault();
    });

})