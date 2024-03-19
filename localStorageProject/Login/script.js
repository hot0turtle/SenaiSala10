const showPassword = () => {
    var inputsenha = document.querySelector("#senha");

    if(inputsenha.getAttribute("type") === "password"){
        inputsenha.setAttribute("type", "text")
    }else{
        inputsenha.setAttribute("type", "password")
    }
}

function login(){
    var nome = $("nome").val();
    var senha = $("senha").val();
}