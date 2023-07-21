document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('languagePopup');
    
    popup.style.display = 'flex';
  
    localStorage.setItem('popupDisplayed', true);
});

function selectLanguage(language){
    var popup = document.getElementById('languagePopup');
    if(language == "en"){
        location.replace("/languages/en/index.html");
    } else{
        popup.style.display = "none";
    }
}