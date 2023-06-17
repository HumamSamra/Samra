const appSettings = {
    name: "Coffee Shop",
};

function init() {
    document.querySelectorAll('[appData]').forEach(element => {
        element.innerHTML = appSettings[element.getAttribute('appData')]
    }); 
}
document.addEventListener('DOMContentLoaded', init);