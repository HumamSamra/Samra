const appSettings = {
    name: "Coffee Shop",
    world: "Hello World",
    samra: "Samra",
    home: "Home",
    about: "About us",
    tr: "Turkish",
    en: "English",
    lang: "Language",
    search: "Search"
};

const appSettingsTR = {
    name: "Cahve market",
    world: "dunya",
    samra: "Samra",
    home: "ana sayfa",
    about: "hakkimiz",
    tr: "Turkish",
    en: "English",
    lang: "Dil",
    search: "Ara"
};

function init() {
    document.querySelectorAll('[appData]').forEach(element => {
        if(localStorage.getItem('language')){
            if(localStorage.getItem('language') == 'tr'){
                element.innerHTML = appSettingsTR[element.getAttribute('appData').toLowerCase()] ?? element.getAttribute('appData');
            }else{
                element.innerHTML = appSettings[element.getAttribute('appData').toLowerCase()] ?? element.getAttribute('appData');
            }
        }else{
            element.innerHTML = appSettings[element.getAttribute('appData').toLowerCase()] ?? element.getAttribute('appData');
        }
    });
}
document.addEventListener('DOMContentLoaded', init);

