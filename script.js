//##########Google Translate API###########
function googleTranslateElementInit()
{
    new google.translate.TranslateElement({pageLanguage: 'end'}, 'google_translate_element');
}












//##########Browser localSaving for themes###########
//I re-write the light theme toggle to save the current theme attribute into the browser's local storage. Even tho it's not necessary, I want to place small details.
function toggle_light_theme()
{
    const islighttheme = localStorage.getItem('light-theme') == 'true';
    localStorage.setItem('light-theme', !islighttheme);
    const element = document.body;
    element.classList.toggle('light-theme', !islighttheme);
}
//loads the light/dark theme attribute
function onLoad()
{
    document.body.classList.toggle('light-theme', localStorage.getItem('light-theme') == true);
}
    //Toggles the theme.
if(localStorage.getItem('light-theme')=== 'true')
{
    document.body.classList.toggle('light-theme');
}
