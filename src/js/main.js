
const hide = (query) => {
    document.querySelector(query).classList.add('hide');
}

const show = (query) => {
    document.querySelector(query).classList.remove('hide');
}

const playAudio = (query) =>{
    document.querySelector(query).play();
}


document.querySelector('div.carta').addEventListener('click', ()=>{
    hide('.carta');
    playAudio('#bg-audio')
    show('.carta-escrita');
});

document.querySelector('button#sim').addEventListener('click', ()=>{
    show('div#escolha-sim');
})

document.querySelector('button#nao').addEventListener('click', ()=>{
    show('div#escolha-nao');
})

