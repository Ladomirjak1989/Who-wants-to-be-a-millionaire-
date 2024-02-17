const parent = document.querySelector('#rules')
parent.insertAdjacentHTML('beforeend', 
`<h2>${rules.title}</h2>

<a class= 'link-home' href= '/'>Home</a> 

<p>${rules.paragraph1}</p> 
<p>${rules.paragraph2}</p>
<p>${rules.paragraph3}</p> 
<p>${rules.paragraph4}</p> 
<p>${rules.paragraph5}</p> 
<ul>${rules.lifelines.map(item => {
    return `<li>${item}</li>`
}).join('')}</ul>`)