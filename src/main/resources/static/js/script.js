const sendButton = document.querySelector('#sendMail');
sendButton.addEventListener('click', () => {
    let subjectInput = document.querySelector('#subjectInput');
    let messageInput = document.querySelector('#messageInput');
    let buttonDiv = document.querySelector('#buttonDiv');
    let buttonDiv2 = document.querySelector('#buttonDiv2');
    const language = document.querySelector(".active");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jakub-portfolio.herokuapp.com//sendEmail");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    let mail = {
        subject: subjectInput.value,
        text: messageInput.value
    };
    let json = JSON.stringify(mail);

    if (subjectInput.value.length < 50 && messageInput.value.length < 250 &&
        subjectInput.value.length !== 0 && messageInput.value.length !== 0) {
        xhr.send(json);
        clear()
        if (language.getAttribute('language') === "polish") {
            buttonDiv.textContent = "Wiadomość wysłana!";
        } else {
            buttonDiv.textContent = "Message sent!";
        }
    } else {
        clear()
        if (language.getAttribute('language') === "polish") {
            buttonDiv2.textContent = "Niepoprawny temat, lub wiadomość!";
        } else {
            buttonDiv2.textContent = "Wrong subject, or message!";
        }
    }
})

function clear() {
    buttonDiv.textContent = "";
    buttonDiv2.textContent = "";
}

let cookieButtons = document.querySelectorAll(".allow-button")
cookieButtons.forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.cookie-consent').classList.add('cookie-consent-hidden');
    })
});