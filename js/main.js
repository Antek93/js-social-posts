console.log('HI, I am java and I am working fine');  // ↑ ↓ ← →

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
                        <a class="like-button js-like-button" href="#" data-postid="${posts[index]['id']}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[index]['id']}" class="js-likes-counter boxing">${posts[index]['likes']}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
        container.append(newDiv);
}

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.


// Selezionate la classe js-like-button per identificare il container del like button

const allLikeButtons = document.querySelectorAll('.js-like-button');

// Creato archivio per contenere tutti 

const likedPosts = [];

// <---------------------CREATO CICLO PER RIPETERE AZIONE CLICK SU OGNI LIKE BUTTON ------------------------>


allLikeButtons.forEach((singleButton, i) => {

// <---------------------------------------------AZIONE CLICK ----------------------------------------------->

    singleButton.addEventListener('click',
    
    function(event) { //EVENT riferito all'azione del cliccare

        event.preventDefault(); // aka = quando clicco previeni evento di default
        // (in questo caso, il ricaricare la pagina a vuoto riga 126 href='#' azione di default di a)

        if(!this.classList.contains('like-button--liked')) { // SE (if) L'ELEMENTO CLICCATO (this) NON (!this) CONTIENE (.contains) la classe 'like-button--liked'

                this.classList.add('like-button--liked'); // AGGIUNGI (add) la classe 'like-button--liked' all'elemento cliccato

                const postId = this.getAttribute('data-postid'); // postId = elemento cliccato con (this) con attributo 'data-postid'
                //SELEZIONAMO QUESTO ELEMENTO PER IDENTIFICARE UNO DEI 5 DIV CREATI CON IL CICLO FOR EACH (riga 126)

                const likesCounter = document.getElementById('like-counter-' + postId); // 'like-counter-' + postId = like-counter-${posts[index]['id']} della riga 132
                // ↑ creiamo variabile per associare l'id specifico di b (riga 132) con classe 'like-counter' 

                
                let likes = parseInt(likesCounter.innerText);
                //All'interno del likesCounter per ogni click sul contatore: likes incrementa di 1
                likes = likes + 1;

                likesCounter.innerHTML = likes; //Mostra all'interno del counter il numero di likes

                //Pusha all'interno dell'archivio precedentemente creato (riga 150) l'id di <a> riga 126
                likedPosts.push(postId);

        } else { // ALTRIMENTI (else) se L'ELEMENTO CLICCATO (this) CONTIENE (.contains) la classe 'like-button--liked'
        
        const postId = this.getAttribute('data-postid'); //recupera il suo id pushato nell'array postId

        likedPosts.splice(likedPosts.indexOf(postId), 1); //rimuovi dall'array l'id pushato

        const likesCounter = document.getElementById('like-counter-' + postId) // 'like-counter-' + postId = like-counter-${posts[index]['id']} della riga 132
        // ↑ creiamo variabile per associare l'id specifico di b (riga 132) con classe 'like-counter' 

        let likes = parseInt(likesCounter.innerText); 
        //All'interno del likesCounter per ogni click sul contatore: likes decrementa di 1
        likes = likes - 1;
        likesCounter.innerHTML = likes; //Mostra all'interno del counter il numero di likes

        this.classList.remove('like-button--liked');
        // RIMUOVI (remove) la classe 'like-button--liked' all'elemento cliccato

        }
    });
        

});


