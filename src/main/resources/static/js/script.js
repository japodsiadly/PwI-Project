const sendButton = document.querySelector('#sendMail');
sendButton.addEventListener('click', () => {
    let subjectInput = document.querySelector('#subjectInput');
    let messageInput = document.querySelector('#messageInput');
    let buttonDiv = document.querySelector('#buttonDiv');

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/sendEmail");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    // const para = document.createElement("p");
    // para.classList.add('row');
    // para.classList.add('textNode');

    // xhr.onload = () => {
    //     // para.removeChild(para.firstElementChild);
    //     para.innerHTML = '';
    //     let textNode = document.createTextNode("Pomyślnie wysłano wiadomość!");
    //     para.appendChild(textNode);
    //     buttonDiv.appendChild(para);
    // }

    let mail = {
        subject: subjectInput.value,
        text: messageInput.value
    };
    let json = JSON.stringify(mail);

    xhr.send(json);

    // let textNode = document.createTextNode("Wiadomość w trakcie wysyłania...");
    // para.appendChild(textNode);
    // buttonDiv.appendChild(para);
})