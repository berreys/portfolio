function contactClick(){
    const shading = document.querySelector(".shading-div");
    shading.setAttribute("style", "visibility: visible;")
    const popup = document.querySelector(".contact-popup");
    popup.setAttribute("style", "visibility: visible;");
}
function closeClick(){
    const shading = document.querySelector(".shading-div");
    shading.setAttribute("style", "visibility: hidden;")
    const popup = document.querySelector(".contact-popup");
    popup.setAttribute("style", "visibility: hidden;");
}