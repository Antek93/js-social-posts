console.log('HI, I am java and I am working fine');

// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// BONUS

// 1. Formattare le date in formato italiano (gg/mm/aaaa);

// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola LF);

// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone;



// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.

// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (yyyy-mm-dd),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// Non è necessario creare date casuali

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// <-----------------------------DATI------------------------------->


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// <-----------------------------SELEZIONATO CONTENITORE NEL DOM------------------------------->

let container = document.getElementById('container');

// <---------------------CREARE CICLO PER ESPORTARE ELEMENTI DELL'ARRAY------------------------>


for (let index = 0; index < posts.length; index++) {
    

    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[index]['author']['image']}" alt"Failed loading">                  
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[index]['author']['name']}</div>
                        <div class="post-meta__time">${posts[index]['created']} </div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[index]['content']} </div>
            <div class="post__image">
                <img src="${posts[index]['author']['image']}" alt="Failed loading">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a id="${posts[index]['id']}" class="like-button js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter boxing">${posts[index]['likes']}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

        container.append(newDiv);

    
}

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// Selezionati i box like tramite ID specifico

let like_uno = document.getElementById('1');
let like_due = document.getElementById('2');
let like_tre = document.getElementById('3');
let like_quattro = document.getElementById('4');
let like_cinque = document.getElementById('5');

//Creato array dei like box

let likeBox = [like_uno, like_due, like_tre, like_quattro, like_cinque];


// <-----------------------------SELEZIONATO BOTTONE NEL DOM------------------------------->

for (let index = 0; index < likeBox.length; index++) {

    // <-----------------------------CREATO EVENTO SUL CLICK------------------------------->

    let liked = false;

    likeBox[index].addEventListener("click", function() {

        if (liked == false) {

            likeBox[index].classList.add("like-button--liked")
            posts[index]['likes'] = (posts[index]['likes'] + 1);  
            console.log('likes:', posts[index]['likes'])

            liked = true;

        } else {

            likeBox[index].classList.remove("like-button--liked")
            posts[index]['likes'] = (posts[index]['likes'] - 1);  
            console.log('likes:', posts[index]['likes'])
            liked = false;
        }

        
           let counter = document.getElementById('like-counter-1');
           //     counter.innerHTML = `<div class="post__likes-counter">${posts[index].likes}</div>`
           counter.innerHTML = `<div class="post__likes-counter">${posts[index].likes}</div>`
    });


}

let totalLikes = 0;
for (let index = 0; index < posts.length; index++) {
    // code to create new div for post
    totalLikes += posts[index].likes;
}
console.log(totalLikes);
