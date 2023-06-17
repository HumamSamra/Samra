const appSettings = {
    name: "Coffee Shop",
    world: "Hello World"
};

const appSettingsAR = {
    name: "سوق القهوة",
    world: "مرحباً بالعالم"
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

