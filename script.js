let nav = document.querySelector("#navbar");
function responsiveNav(){
    if(nav.classList.contains("nav")){
        nav.classList.add("responsive");
    } else {
        nav.className = "nav"
    }
}

function closeNav(){
    if(nav.classList.contains("responsive")){
        nav.classList.remove("responsive")
    }
}