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
      var elemento = getElementById("sucesso")
      temp_ini = get.Milliseconds();
      elemento.style.display = "block";
      temp_fin = get.Milliseconds();
      while(temp_fin - temp_ini < 30000){
        temp_fin = get.Milliseconds();
      }
      elemento.style.display = "none";
    }else{
      var elemento2 = getElementById("aviso")
      temp_ini = get.Milliseconds();
      elemento2.style.display = "block";
      temp_fin = get.Milliseconds();
      while(temp_fin - temp_ini < 30000){
        temp_fin = get.Milliseconds();
      }
      elemento2.style.display = "none";
    }
    return validar;
}
