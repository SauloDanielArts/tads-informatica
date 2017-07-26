function validateForm() {
    var validar = true;
    var nome = document.forms["contato"]["nome"].value;
    var email = document.form["contato"]["email"].value;
    var telefone = document.form["contato"]["telefone"].value;
    var celular = document.form["contato"]["celular"].value;
    var temp_ini = 0
    var temp_fin = 0
    if (nome == "") {
        validar = false;
    }
    if (email == ""){
      validar = false;
    }
    if (telefone == ""){
      validar = false;
    }
    if (telefone == ""){
      validar = false;
    }
    if (celular == ""){
      validar = false;
    }
    if (validar){
      alert("Contato enviado com sucesso!");
    }else{
      alert("Não pode haver campos em branco!");
    }
    return validar;
}
