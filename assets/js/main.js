/* 
Creare una pagina che elenchi una lista di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: 
    id 
    contenuto
    immagine
    autore 
        nome, 
        avatar
    numero di likes
    data creazione
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like. */

const posts =
    [
        {
            id: 1012,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquid distinctio, a earum recusandae animi voluptatem saepe impedit quas atque aut, ullam at officia. Totam natus quod illum incidunt sint.',
            image: 'https://picsum.photos/600/400',
            author:
            {
                authorName: 'Phil Mangione',
                authorImage: 'https://unsplash.it/60/60?image=',
            }
            ,
            like: 80,
            date: new Date().toLocaleDateString(),
        },
        {
            id: 1005,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum magnam facilis, ut expedita repudiandae id sed sequi aperiam unde excepturi ipsa laudantium saepe. Assumenda sequi odit natus dolorum, nam dignissimos.',
            image: 'https://picsum.photos/600/400',
            author:
            {
                authorName: 'Sofia Perlari',
                authorImage: 'https://unsplash.it/60/60?image=',
            }
            ,
            like: 17,
            date: new Date('2021-10-22').toLocaleDateString(),
        },
        {
            id: 1025,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt eius odio ipsum sit ut facere totam quidem consequatur dicta non sint quae dolor, sed iusto sunt laudantium veritatis minus.',
            image: 'https://picsum.photos/600/400',
            author:
            {
                authorName: 'Chiara Ferragni',
                authorImage: 'https://unsplash.it/60/60?image=',
            }
            ,
            like: 1589,
            date: new Date('2021-10-21').toLocaleDateString(),
        },
    ];

const likedPosts = [1012, 1005];

renderPosts(posts);

function renderPost(posts) {
    return `<div class="post">
    <div class="author">
        <img src="${posts.author.authorImage}${posts.id}" alt="${posts.author.authorName}">
        <div class="name">
            ${posts.author.authorName}
            <div class="date">${posts.date}</div>
        </div>
    </div>
    <div class="text">${posts.text}</div>
    <img src="${posts.image}" class="img-fluid">
    <div class="like">
        <div class="like_btn">
            <i class="fas fa-thumbs-up"></i>
            Mi piace
            </div>
        <div>
            Piace a <span>${posts.like}</span> persone
        </div>
    </div></div>`
}

function renderPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.querySelector('.container').insertAdjacentHTML('beforeend', renderPost(post));
        if (likedPosts[i] == post.id) {
            console.log('ciao');
            document.getElementsByClassName('like_btn').classList.add('dark_blue');
        }
    }
}

