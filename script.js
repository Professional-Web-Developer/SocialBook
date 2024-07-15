var settingsmenu=document.querySelector(".settings-menu")
var darkbtn=document.getElementById("dark-btn-span")
function settingsmenutoggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}
if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on")
    document.body.classList.add("dark-theme")
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.remove("dark-btn-on")
    document.body.classList.add("dark-theme")
}
