const appSettings = {
    name: "Coffee Shop",
};

const appSettingsAR = {
    name: "Coffee Shop",
};

function init() {
    document.querySelectorAll('[appData]').forEach(element => {
        if(localStorage.getItem('language')){
            if(localStorage.getItem('language') == 'ar'){
                element.innerHTML = appSettingsAR[element.getAttribute('appData')] ?? element.getAttribute('appData');
            }else{
                element.innerHTML = appSettings[element.getAttribute('appData')] ?? element.getAttribute('appData');
            }
        }else{
            element.innerHTML = appSettings[element.getAttribute('appData')] ?? element.getAttribute('appData');
        }
    }); 
}
document.addEventListener('DOMContentLoaded', init);