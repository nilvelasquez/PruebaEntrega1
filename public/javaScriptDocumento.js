function irLogin(){
    window.location.href="Login.html";
}
function irRegister(){
    window.location.href="Register.html";
}
function irIndex(){
    window.location.href="index.html";
}
function logear(){
    var correo = $('#usuario').val();
    var contrasena = $('#contrasena').val();
    $.ajax({
        contentType: "application/json",
        type: 'POST',
        url: URL+'/dsaApp/game/login',
        data: JSON.stringify({ "correo": correo, "contrasena": contrasena }),
        dataType: 'json',
        success: function(result){
            localStorage.setItem("usuarioactivo", correo);
        },
        error: function(error){
            if (usuario == "" || contrasena == "")
                alert("You left something blank. Please try again!");
            else{
                alert("Wrong username or password. Please try again!");
            }
        }
    });
}
function registrar() {
    var username = $('#usuario').val();
    var password = $('#contrasena').val();
    var password2 = $('#contrasena2').val();
    var email = $('#email').val();
    if (password == password2) {

        $.ajax({
            contentType: "application/json",
            type: 'POST',
            url: URL + '/dsaApp/user/registrarUsuario',
            data: JSON.stringify({"Usuario": username, "Email":email, "Contrasena": password}),
            dataType: 'json',
            success: function (result) {
                window.location.href = "Login.html";
            },
            error: function (error) {
                console.log(error);
                if (email == null || username == null || password == null)
                    alert("Has dejado algo en blanco, miralo de nuevo!");
                else
                    alert("Usuario o contraseña ya estan siendo usados, prueba de nuevo!");
            }
        });
    }
    else alert("Comprueba que las dos contraseñas son iguales.");
}