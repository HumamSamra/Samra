const appSettings = {
    name: "Coffee Shop",
    world: "Hello World",
    samra: "Samra"
};

const appSettingsAR = {
    name: "سوق القهوة",
    world: "مرحباً بالعالم",
    samra: "سمرة"
};

function init() {
    document.querySelectorAll('[appData]').forEach(element => {
        if(localStorage.getItem('language')){
            if(localStorage.getItem('language') == 'ar'){
                element.innerHTML = appSettingsAR[element.getAttribute('appData').toLowerCase()] ?? element.getAttribute('appData');
            }else{
                element.innerHTML = appSettings[element.getAttribute('appData').toLowerCase()] ?? element.getAttribute('appData');
            }
        }else{
            element.innerHTML = appSettings[element.getAttribute('appData').toLowerCase()] ?? element.getAttribute('appData');
        }
    }); 
}
document.addEventListener('DOMContentLoaded', init);

