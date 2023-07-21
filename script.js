let selectField = document.getElementById('selectField')
let selectText = document.getElementById('selectText')
let options = document.getElementsByClassName('options')
let list = document.getElementById('list')
let arrowIcon = document.getElementById('arrowIcon')

selectField.addEventListener('click', () => {
    list.classList.toggle('hide')
    arrowIcon.classList.toggle('rotate')
})

// for (const option of options) {
//     option.onclick = function () {
//         selectText.innerHTML = this.textContent
//     }
// }

// to use an arrow function, we have to write code like this
for (const option of options) {
    option.addEventListener('click', (event) => {
        selectText.innerHTML = event.target.textContent
        arrowIcon.classList.toggle('rotate')
        list.classList.toggle('hide')
    })
}





