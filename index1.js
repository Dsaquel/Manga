const mangas = [
    {
        title: "One piece",
        description: "One Piece (ワンピース, Wan Pīsu?) est une série de mangas shōnen créée par Eiichirō Oda.",
        url: "#",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwwVbnZuTXMc7HwF8g8J6qmvo7KccneKqUQ&usqp=CAU"
    },
    {
        title: "Naruto",
        description: "Ninja",
        url: "#",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/langfr-330px-Naruto_logo.svg.png"
    },
];


function generateManga(manga) {
    for (let index = 0; index < mangas.length; index++) {
        const title = mangas[index].title;
        const description = mangas[index].description;
        const url = mangas[index].url;
        const thumbnail = mangas[index].thumbnail;

        const elementCreate = [
            {
                balise: "h5",
                value: title,
            },
            {
                balise: "p",
                value: description,
            },
            {
                balise: "a",
                value: url,
            },
            {
                balise: "img",
                value: thumbnail,
            },
        ];

        const body = document.querySelector("body");
        const divContainer = document.createElement("div");
        body.appendChild(divContainer);
        const divCard = document.createElement("div");
        divContainer.appendChild(divCard)
        elementCreate.forEach(function (element) {
            const elementCreated = document.createElement(element.balise)
            if (element.balise !== 'img' & "a") {
                elementCreated.innerHTML = element.value;
            } 
            else if (element.balise !== "img") {
                elementCreated.innerHTML = element.value;
             }
            else {
                elementCreated.src = element.value;
            }
            divCard.appendChild(elementCreated);
            divContainer.appendChild(divCard);
        });
        //  function generateBoostrapCss(style) {
        //      const cardTitle = title.classList.add("card-title");
        //      const cardText = description.classList.add("card-text");
        //      const Btn = url.classList.add("btn")
        // }
        divContainer.classList.add("container");
        divCard.classList.add("card");
    };
};
generateManga(mangas);