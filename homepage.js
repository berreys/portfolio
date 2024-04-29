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
    const name = document.getElementById('name');
    name.value = '';
    const email = document.getElementById('email');
    email.value = ''; 
    const content = document.getElementById('email-content');
    content.value = '';
    const parent = document.querySelector(".contact-form");
    const errorMsg = document.querySelector(".error-message");
    if(errorMsg !== null){
        parent.removeChild(errorMsg);
    }
    
}
function submitContact(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const content = document.getElementById('email-content').value;
    if(name.length === 0 || email.length === 0 || content.length === 0){
        var errorMsg = document.querySelector(".error-message");
        if(errorMsg !== null){
            return;
        }
        const parent = document.querySelector(".contact-form");
        errorMsg = document.createElement('p');
        errorMsg.innerHTML = "Please fill out all of the form.";
        errorMsg.className = "error-message";
        parent.appendChild(errorMsg);
        return;
    }
    sendEmail(name, email, content);
    clearContactForm();
}
function sendEmail(name, email, content){
    console.log("TODO: SEND EMAIL");
}
function clearContactForm(){

}