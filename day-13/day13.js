const article = document.querySelector('article')
const inputEl = document.querySelector('input')
const searchBtn = document.querySelector('button')

searchBtn.addEventListener('click', fetchdata)

function fetchdata() {
    article.innerHTML = ''
    fetch(`https://dog.ceo/api/breed/${inputEl.value}/images/random/10`)
        .then(res => res.json())
        .then(data => {
            getresponse(data)
            // console.log(data)
            })
}

fetchdata()
function getresponse(data){
    if(data.status==='success') {
        data.message.forEach((ima) => {
            article.innerHTML += `<img src = ${ima} alt="">`
            console.log(ima)
        })
    }
    else {
        article.innerHTML = `<h1> hksdafkjfdskj </h1>`
    }
}
