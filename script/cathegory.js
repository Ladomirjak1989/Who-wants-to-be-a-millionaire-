const cathegoryParent = document.querySelector('#cathegory')
let html = ''
cathegory.forEach(item => {
    html += `<li>
    <a href='${item.cathegory}'>${item.title}</a>
    </li>
    `
})
cathegoryParent.innerHTML = html