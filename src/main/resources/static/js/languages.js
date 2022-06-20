const langList = document.querySelector('.langListList');
const LangListItem = document.querySelectorAll('.langListItem');

const introductionHeader = document.querySelector(".introductionHeader");
const introductionSubheader = document.querySelector(".introductionSubheader");
const introductionText = document.querySelector(".introductionText");

const aboutMeHeader = document.querySelector(".aboutMeHeader");
const aboutMeSubheader_0 = document.querySelector(".aboutMeSubheader_0");
const aboutMeSubheader_1 = document.querySelector(".aboutMeSubheader_1");
const aboutMeText_0 = document.querySelector(".aboutMeText_0");
const aboutMeText_1 = document.querySelector(".aboutMeText_1");
const aboutMeText_2 = document.querySelector(".aboutMeText_2");
const aboutMeText_3 = document.querySelector(".aboutMeText_3");

const skillsHeader = document.querySelector(".skillsHeader");

const contactHeader = document.querySelector(".contactHeader");
const contactSubheader_0 = document.querySelector(".contactSubheader_0");
const contactSubheader_1 = document.querySelector(".contactSubheader_1");
const contactFormSubject = document.querySelector(".contactFormSubject");
const contactFormSubjectHelp = document.querySelector(".contactFormSubjectHelp");
const contactFormMessage = document.querySelector(".contactFormMessage");
const contactFormMessageHelp = document.querySelector(".contactFormMessageHelp");
const contactSendButton = document.querySelector(".contactSendButton");

LangListItem.forEach(el => {
    el.addEventListener('click', () => {
        langList.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        introductionHeader.textContent = data[attr].introductionHeader;
        introductionSubheader.textContent = data[attr].introductionSubheader;
        introductionText.textContent = data[attr].introductionText;

        aboutMeHeader.textContent = data[attr].aboutMeHeader;
        aboutMeSubheader_0.textContent = data[attr].aboutMeSubheader_0;
        aboutMeSubheader_1.textContent = data[attr].aboutMeSubheader_1;
        aboutMeText_0.textContent = data[attr].aboutMeText_0;
        aboutMeText_1.textContent = data[attr].aboutMeText_1;
        aboutMeText_2.textContent = data[attr].aboutMeText_2;
        aboutMeText_3.textContent = data[attr].aboutMeText_3;

        skillsHeader.textContent = data[attr].skillsHeader;

        contactHeader.textContent = data[attr].contactHeader;
        contactSubheader_0.textContent = data[attr].contactSubheader_0;
        contactSubheader_1.textContent = data[attr].contactSubheader_1;
        contactFormSubject.textContent = data[attr].contactFormSubject;
        contactFormSubjectHelp.textContent = data[attr].contactFormSubjectHelp;
        contactFormMessage.textContent = data[attr].contactFormMessage;
        contactFormMessageHelp.textContent = data[attr].contactFormMessageHelp;
        contactSendButton.textContent = data[attr].contactSendButton;
    });
});

const data = {
    "english":
        {
            "introductionHeader": "I`m Jakub Podsiadły",
            "introductionSubheader": "And I`m Junior Java Spring developer",
            "introductionText": "If you want to know me better, see my portfolio",

            "aboutMeHeader": " About me:",
            "aboutMeSubheader_0": " I'm 3rd year student in the field of computer science",
            "aboutMeSubheader_1": " My strengths:",
            "aboutMeText_0": " I can organise my work well",
            "aboutMeText_1": " I take care about details",
            "aboutMeText_2": " I'm learning new technologies quickly",
            "aboutMeText_3": " I can handle every challenge",

            "skillsHeader": " My skills:",

            "contactHeader": " Contact:",
            "contactSubheader_0": " Link to my GitHub:",
            "contactSubheader_1": " You can send me a message on my email here:",
            "contactFormSubject": " Subject",
            "contactFormSubjectHelp": " Max 50 characters",
            "contactFormMessage": " Send me a message",
            "contactFormMessageHelp": " Max 250 characters",
            "contactSendButton": " Send",
        },
    "polish":
        {
            "introductionHeader": " Nazywam się Jakub Podsiadły ",
            "introductionSubheader": " Jestem Junior Java Spring developerem",
            "introductionText": " Jeżeli chcesz wiedzieć więcej o mnie zapraszam do mojego portfolio",

            "aboutMeHeader": " O mnie:",
            "aboutMeSubheader_0": " Jestem studentem 3 roku na kierunku informatycznym.",
            "aboutMeSubheader_1": " Moje mocne strony:",
            "aboutMeText_0": " Umiem dobrze organizować sobie pracę",
            "aboutMeText_1": " Przykładam dużą uwagę do szczegółów",
            "aboutMeText_2": " Szybko uczę się nowych technologii",
            "aboutMeText_3": " Umiem poradzić sobie z każdym zadaniem",

            "skillsHeader": " Moje Umiejętności:",

            "contactHeader": " Kontakt:",
            "contactSubheader_0": " Link do mojego GitHuba:",
            "contactSubheader_1": " Możesz wysłać do mnie wiadomość na mój email tutaj:",
            "contactFormSubject": " Temat",
            "contactFormSubjectHelp": " Max 50 znaków",
            "contactFormMessage": " Napisz wiadomość do mnie",
            "contactFormMessageHelp": " Max 250 znaków",
            "contactSendButton": " Wyślij",
        }
}