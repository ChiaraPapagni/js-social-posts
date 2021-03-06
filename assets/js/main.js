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
Un secondo array conterrĂ  solo gli id dei posts a cui abbiamo dato like. */

const posts =
    [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aliquid distinctio, a earum recusandae animi voluptatem saepe impedit quas atque aut, ullam at officia. Totam natus quod illum incidunt sint.',
            image: 'https://picsum.photos/id/1013/600/400',
            author:
            {
                authorName: 'Phil Mangione',
                authorImage: 'https://picsum.photos/id/1012/60/60',
            }
            ,
            like: 80,
            date: new Date().toLocaleDateString(),
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum magnam facilis, ut expedita repudiandae id sed sequi aperiam unde excepturi ipsa laudantium saepe. Assumenda sequi odit natus dolorum, nam dignissimos.',
            image: 'https://picsum.photos/id/225/600/400',
            author:
            {
                authorName: 'Sofia Perlari',
                authorImage: '',
            }
            ,
            like: 17,
            date: new Date('2021-10-22').toLocaleDateString('it'),
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt eius odio ipsum sit ut facere totam quidem consequatur dicta non sint quae dolor, sed iusto sunt laudantium veritatis minus.',
            image: 'https://picsum.photos/id/1008/600/400',
            author:
            {
                authorName: 'Chiara Ferragni',
                authorImage: 'https://picsum.photos/id/1025/60/60',
            }
            ,
            like: 1589,
            date: new Date('2021-10-21').toLocaleDateString(),
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'https://picsum.photos/id/26/600/400',
            author:
            {
                authorName: 'Regan Bodween',
                authorImage: 'https://picsum.photos/id/259/60/60',
            }
            ,
            like: 58,
            date: new Date('2021-10-21').toLocaleDateString(),
        },
    ];

const likedPosts = [1, 2];

renderPosts(posts);

function renderPost(posts) {
    return `<div class="post">
    <div class="author">
        <div class="author_image">
            <img src="${posts.author.authorImage}" alt="${posts.author.authorName}">
        </div>
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

        if (likedPosts[i] == posts[i].id) {
            document.getElementsByClassName('like_btn')[i].style.color = '#61D2A4';
        }

        if (posts[i].author.authorImage == '') {
            let nameInitials = posts[i].author.authorName.match(/\b(\w)/g).join('');
            document.getElementsByClassName('author_image')[i].innerHTML = nameInitials;
        }
    }
}


const likeButtons = document.getElementsByClassName('like_btn');
for (let i = 0; i < likeButtons.length; i++) {
    const likeButton = likeButtons[i];
    likeButton.addEventListener('click', pressLike);
}

function pressLike() {
    for (let i = 0; i < posts.length; i++) {
        if (likeButtons[i].style.color != '#61D2A4') {
            this.style.color = '#61D2A4';
        }
    }
}