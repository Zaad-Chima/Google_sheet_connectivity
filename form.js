var scriptURL = "https://script.google.com/macros/s/AKfycbzJjRRLedS8WTseQggO7zP4TJB-2fP4aU6tJ2USA7MFWaIMDj1olwPwGj0uuEaWR7sx/exec"
var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST' , body: new FormData(form)})
    .then(response => document.getElementById('form_alert').innerHTML = "Data was stored successfully")
    .catch(error => document.getElementById('form_alert').innerHTML = "Data was not stored successfully")
})