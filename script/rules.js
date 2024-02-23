const parent = document.querySelector('#rules')
const rulesHTML = `<h2>${rules.title}</h2>

<a class= 'link-home' href= '/'>HOME</a> 

<p>${rules.paragraph1}</p> 
<p>${rules.paragraph2}</p>
<p>${rules.paragraph3}</p> 
<p>${rules.paragraph4}</p> 
<p>${rules.paragraph5}</p> 
<ul id= 'rules-list'></ul>`
parent.innerHTML = rulesHTML
const rulesList = document.querySelector('#rules-list')
let rulesListHTML = ''
rules.lifelines.forEach(element => {
    rulesListHTML += `<li>${element}</li>`
});
rulesList.innerHTML = rulesListHTML
