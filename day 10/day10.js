const card_font= document.querySelectorAll('.back')
const card_back = document.querySelectorAll('.font')
const moves_update = document.querySelector('.move span')

const arr = ['A', 'B', 'C', 'D', 'E', 'F']
// let doublearr = arr.concat(arr)
let doublearr = [...arr,...arr]

function random_item(items)
{
    return Math.floor(Math.random()*items.length)
}

for (let i = 0; i < 12;i++)
{
    let index = random_item(doublearr)
    const el = doublearr.splice(index, 1)
    card_back[i].innerHTML = `<h1> ${el} </h1>`
}

let first_parent = null, first_card, gameactive = true , move = 0,
    card_count = 6

function adda(card)
{
    let parent = card.parentNode.classList[1] - 1
    if (first_parent)
    {
        card.classList.add('active')
        gameactive = false
        move++
        setTimeout(function ()
        {
            if(first_parent.innerHTML === card_back[parent].innerHTML)
            {
                first_parent.classList.add('active')
                card_back[parent].classList.add('active')
                card_count--
                console.log(card_count)

                if(card_count === 0)
                    reload()
            }
            else
            {
                first_card.classList.remove('active')
                card.classList.remove('active')
            }

            first_parent = null
            gameactive = true
            moves_update.innerHTML = `${move}`

        }, 1000)
    }

    else
    {
        first_parent = card_back[parent]
        first_card = card
        card.classList.add('active')
    }
}

function reload(){
    document.querySelector('.all').style.display = 'none'

    document.body.innerHTML=`<div class="reload">
    <h1>You Won !</h1>
    <button>Replay</button>
    </div>`

    document.querySelector('.reload button').addEventListener('click',()=>
    {
        window.location.reload()
    })
}

card_font.forEach(function (card)
{
    card.addEventListener("click", ()=>{
        if(!gameactive) return
        adda(card)
    })
})

