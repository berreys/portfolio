function contactClick(){
    console.log("hello")
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
        showErrorMessage();
        return;
    }
    sendEmail(name, email, content);
    clearContactForm();
    showSuccessMessage();
}
function showErrorMessage(){
    removeErrorAndSuccessMessages();
    const parent = document.querySelector(".contact-form");
    var errorMsg = document.createElement('p');
    errorMsg.innerHTML = "Please fill out all of the form.";
    errorMsg.className = "error-message";
    parent.appendChild(errorMsg);
}
function showSuccessMessage(){
    removeErrorAndSuccessMessages();
    const parent = document.querySelector(".contact-form");
    var successMsg = document.createElement('p');
    successMsg.innerHTML = "Email sent.";
    successMsg.className = "success-message";
    parent.appendChild(successMsg);
}
function sendEmail(name, email, content){
    console.log("TODO: SEND EMAIL");
}
function clearContactForm(){
    const name = document.getElementById('name');
    name.value = '';
    const email = document.getElementById('email');
    email.value = ''; 
    const content = document.getElementById('email-content');
    content.value = '';
    removeErrorAndSuccessMessages();
}

function removeErrorAndSuccessMessages(){
    const parent = document.querySelector(".contact-form");
    const errorMsg = document.querySelector(".error-message");
    if(errorMsg !== null){
        parent.removeChild(errorMsg);
    }
    const successMsg = document.querySelector(".success-message");
    if(successMsg !== null){
        parent.removeChild(successMsg);
    }
}

function downloadResume(){
    // const path = '../assets/resume.pdf';
    // const link = document.createElement('a');
    // link.href = path;
    // link.download = 'Sam-Berrey-Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    window.open('../assets/resume.pdf', '_blank');
    return false;
}

$(".right-container-button").hover(function() {
    $(".long-text").addClass("show-long-text");
}, function () {
    $(".long-text").removeClass("show-long-text");
});