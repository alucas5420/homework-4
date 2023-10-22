function initlisteners() {
    $("#submit").click(function(e){
        e.preventDefault();
        let grass = $("#grass").val();
        let fire = $("#fire").val();
        let water = $("#water").val();
        let normal = $("#normal").val();
        let electric = $("#electric").val();
        let fighting = $("#fighting").val();
        let flying = $("#flying").val();
        let ghost = $("#ghost").val();
        let fairy = $("#fairy").val();
        let dragon = $("#dragon").val();
        console.log("inputs " + grass + " " + fire 
        + " " + water + " " + normal + " " + electric + " " + fighting + " " + flying + " " + ghost + " " + fairy + " " + dragon);
    });

    $("#sub").click(function(e){
        e.preventDefault();
        let login = $("#login").val();
        console.log("inputs " + login);
    });

    $("#sub2").click(function(e){
        e.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();
        let fName = $("#fName").val();
        let lName = $("#lName").val();
        console.log("inputs " + email + " " + password + " " + fName + " " + lName);
    });

    $("#edit").click(function(e){
        e.preventDefault();

        let userObj = {
            grass: "Bellossom", 
            fire: "Ceruledge",
            water: "Vaporeon", 
            normal: "Lopunny (Mega)",
            electric: "Rotom",
            fighting: "Gallade",
            flying: "Gliscor",
            ghost: "Mimikyu",
            fairy: "Tinkaton",
            dragon: "Garchomp",
        };
        console.log(userObj);
       $("#grass").val(userObj.grass);
       $("#fire").val(userObj.fire);
       $("#water").val(userObj.water);
       $("#normal").val(userObj.normal);
       $("#electric").val(userObj.electric);
       $("#fighting").val(userObj.fighting);
       $("#flying").val(userObj.flying);
       $("#ghost").val(userObj.ghost);
       $("#fairy").val(userObj.fairy);
       $("#dragon").val(userObj.dragon);
        // console.log("inputs " + firstName + " " + lastName);

    });
}

$(document).ready(function(){
    initlisteners();
});