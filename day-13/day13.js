const article = document.querySelector("article")
const searchBtn = document.querySelector('button')
const inputEl = document.querySelector('input')

searchBtn.addEventListener('click', fetchDogs)
fetchDogs()

function fetchDogs(){
    article.innerHTML = ''
    fetch(`https://dog.ceo/api/breed/${inputEl.value}/images/random/10`)
        .then((res) => res.json())
        .then((data) =>{
            getResponce(data)
        })
}

function getResponce(data){
    if(data.status === 'success'){
        data.message.forEach((image) => {
            article.innerHTML += `<img src=${image} alt="">`
        })
    }
    else{
        article.innerHTML = `<h1> Not Found the dog types</h1>`
    }
}