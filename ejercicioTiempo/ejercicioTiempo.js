
}
function registrar() {
     let contraseña = document.getElementById ('contraseña').value;
    let confcontraseña = document.getElementById('contraseña').value;
   
    if (contraseña !== confcontraseña) {
      
        alert( "Algo has puesto mal");
        return false;
    }
    if (!validarContraseña(confcontraseña)) {
        Alert("La contraseña esta muu mal");
        return false;
  }
         Alert("genial");
         return true;

    }

function validarContraseña(password) {

    if (password.length < 10 || password.length > 15) {
      return false;
    }
    if ((password.match(/[A-Z]/g) || []).length < 2) {
      return false;
    }
    if (!/[*/\-#~]/.test(password)) {
      return false;
    }
    let numerosValidos = password.match(/[5-9]/g) || [];
    if (numerosValidos.length < 3) {
      return false;
    }
    return true;
  }













