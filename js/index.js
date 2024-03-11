window.onload=()=> {
    let menu = document.getElementById("barras-menu")
    menu.onclick=()=> {
        if (document.getElementById("menumovil").classList.contains("menu-movil")) {

            document.getElementById("menumovil").classList.remove("menu-movil");
        } else {

             document.getElementById("menumovil").classList.add("menu-movil");

        }
    }
}