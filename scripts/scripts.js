//1° passo: identificar o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        {
            image: 'image/assets/abacate.png',
            name: 'abacate',
        },
        {
            image: 'image/assets/abacaxi.png',
            name: 'abacaxi',
        },
        {
            image: 'image/assets/banana.png',
            name: 'banana',
        },
        {
            image: 'image/assets/batata.png',
            name: 'batata',
        },
        {
            image: 'image/assets/berinjela.png',
            name: 'berinjela',
        },
        {
            image: 'image/assets/beterraba.png',
            name: 'beterraba',
        },
        {
            image: 'image/assets/brocolis.png',
            name: 'brocolis',
        },
        {
            image: 'image/assets/cebola.png',
            name: 'cebola',
        },
        {
            image: 'image/assets/cenoura.png',
            name: 'cenoura',
        },
        {
            image: 'image/assets/cereja.png',
            name: 'cereja',
        },
        {
            image: 'image/assets/cogumelo.png',
            name: 'cogumelo',
        },
        {
            image: 'image/assets/couveflor.png',
            name: 'couveflor',
        },
        {
            image: 'image/assets/ervilha.png',
            name: 'ervilha',
        },
        {
            image: 'image/assets/goiaba.png',
            name: 'goiaba',
        },
        {
            image: 'image/assets/kiwi.png',
            name: 'kiwi',
        },
        {
            image: 'image/assets/laranja.png',
            name: 'laranja',
        },
        {
            image: 'image/assets/limao.png',
            name: 'limao',
        },
        {
            image: 'image/assets/maça.png',
            name: 'maça',
        },
        {
            image: 'image/assets/mamao.png',
            name: 'mamao',
        },
        {
            image: 'image/assets/manga.png',
            name: 'manga',
        },
        {
            image: 'image/assets/melancia.png',
            name: 'melancia',
        },
        {
            image: 'image/assets/mexerica.png',
            name: 'mexerica',
        },
        {
            image: 'image/assets/morango.png',
            name: 'morango',
        },
        {
            image: 'image/assets/pepino.png',
            name: 'pepino',
        },
        {
            image: 'image/assets/pera.png',
            name: 'pera',
        },
        {
            image: 'image/assets/rabanete.png',
            name: 'rabanete',
        },
        {
            image: 'image/assets/roma.png',
            name: 'roma',
        },
        {
            image: 'image/assets/tomate.png',
            name: 'tomate',
        },
        {
            image: 'image/assets/uva.png',
            name: 'uva',
        },
        {
            image: 'image/assets/uvaverde.png',
            name: 'uvaverde',
        },
        {
            image: 'image/assets/abacate.png',
            name: 'abacate',
        },
        {
            image: 'image/assets/abacaxi.png',
            name: 'abacaxi',
        },
        {
            image: 'image/assets/banana.png',
            name: 'banana',
        },
        {
            image: 'image/assets/batata.png',
            name: 'batata',
        },
        {
            image: 'image/assets/berinjela.png',
            name: 'berinjela',
        },
        {
            image: 'image/assets/beterraba.png',
            name: 'beterraba',
        },
        {
            image: 'image/assets/brocolis.png',
            name: 'brocolis',
        },
        {
            image: 'image/assets/cebola.png',
            name: 'cebola',
        },
        {
            image: 'image/assets/cenoura.png',
            name: 'cenoura',
        },
        {
            image: 'image/assets/cereja.png',
            name: 'cereja',
        },
        {
            image: 'image/assets/cogumelo.png',
            name: 'cogumelo',
        },
        {
            image: 'image/assets/couveflor.png',
            name: 'couveflor',
        },
        {
            image: 'image/assets/ervilha.png',
            name: 'ervilha',
        },
        {
            image: 'image/assets/goiaba.png',
            name: 'goiaba',
        },
        {
            image: 'image/assets/kiwi.png',
            name: 'kiwi',
        },
        {
            image: 'image/assets/laranja.png',
            name: 'laranja',
        },
        {
            image: 'image/assets/limao.png',
            name: 'limao',
        },
        {
            image: 'image/assets/maça.png',
            name: 'maça',
        },
        {
            image: 'image/assets/mamao.png',
            name: 'mamao',
        },
        {
            image: 'image/assets/manga.png',
            name: 'manga',
        },
        {
            image: 'image/assets/melancia.png',
            name: 'melancia',
        },
        {
            image: 'image/assets/mexerica.png',
            name: 'mexerica',
        },
        {
            image: 'image/assets/morango.png',
            name: 'morango',
        },
        {
            image: 'image/assets/pepino.png',
            name: 'pepino',
        },
        {
            image: 'image/assets/pera.png',
            name: 'pera',
        },
        {
            image: 'image/assets/rabanete.png',
            name: 'rabanete',
        },
        {
            image: 'image/assets/roma.png',
            name: 'roma',
        },
        {
            image: 'image/assets/tomate.png',
            name: 'tomate',
        },
        {
            image: 'image/assets/uva.png',
            name: 'uva',
        },
        {
            image: 'image/assets/uvaverde.png',
            name: 'uvaverde',
        }
    ]

    //embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random());

    //carregar elementos html no script
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    const somaErro = document.querySelector('#contagemErro');

    let cardsChosen = [] //cartas escolhidas
    let cardsChoseniD = []; //ID DAS CARTAS escolhidas
    let cardWon = []; //cartas combinadas
    let erros = 0;
    let lockBoard = false;

    //criar quadro de cartas
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            resultView.textContent = 'Pares encontrados: 0';
            somaErro.textContent = 'Tentativas: 0';
            const card = document.createElement('img'); //aqui estou criando o elemento img no meu html <img>
            card.setAttribute('src', 'image/assets/back.png'); // aqui estou colocando atributo no meu img criado acima <img src="image/assets/back.png">
            card.setAttribute('data-id', i); // <img src="image/assets/back.png" data-id=i/>
            card.setAttribute('class', 'imgcard')
            card.addEventListener('click', flipCard);
            board.appendChild(card); //<concatenando o board com a carta para aparecer no html.
        }
    }

    //checagem de combinações
    function checkForMatch() {

        const cardsImg = document.querySelectorAll('.board img'); //selecione todas as imagens do board
        const optionOneId = cardsChoseniD[0];// pegue a primeira carta
        const optionTwoId = cardsChoseniD[1];//pegue a segunda carta

        if (optionOneId === optionTwoId) {
            cardsImg[optionOneId].setAttribute('src', 'image/assets/back.png'); //se o usuario clicar duas vezes na mesma imagem
            alert('Você clicou na mesma imagem');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            cardsImg[optionOneId].removeEventListener('click', flipCard);
            cardsImg[optionTwoId].removeEventListener('click', flipCard);
            cardWon.push(cardsChosen);
        }
        else {
            cardsImg[optionOneId].setAttribute('src', 'image/assets/back.png');
            cardsImg[optionTwoId].setAttribute('src', 'image/assets/back.png');
            erros++;
        }

        cardsChosen = [];
        cardsChoseniD = [];
        lockBoard = false;

        somaErro.textContent = 'Tentativas: ' + erros;
        resultView.textContent = 'Pares encontrados: ' + cardWon.length
        const totalPares = cards.length / 2;

        if (cardWon.length === totalPares) {
            const modal = document.getElementById("modal-vitoria")
            modal.style.display = 'block';
            modal.classList.add('conteudo-vitoria');
            modal.innerHTML = `<h1>🎉 Parabéns! Você encontrou todos os pares!</h1>`;
        }
    }

    function flipCard() {
        if (lockBoard) return;

        let cardId = this.getAttribute('data-id'); //pega o meu atributo da carta que passei com o evento de click
        cardsChosen.push(cards[cardId].name); //adiciona a carta para o array de
        cardsChoseniD.push(cardId);
        this.setAttribute('src', cards[cardId].image);

        if (cardsChosen.length === 2) {
            lockBoard = true;
            setTimeout(checkForMatch, 500)
        }
    }
    const overlay = document.getElementById("loading-overlay");

    function mostrarLoading() {
        overlay.classList.add("active");
    }

    function esconderLoading() {
        overlay.classList.remove("active");
    }

    function resetarJogo() {
        mostrarLoading();

        setTimeout(() => {

            cardsChosen = [];
            cardsChoseniD = [];
            cardWon = [];
            erros = '';
            lockBoard = false;

            somaErro.textContent = 'Tentativas: 0';
            resultView.textContent = 'Pares encontrados: 0';

            const modal = document.getElementById("modal-vitoria")
            modal.style.display = 'none';
            modal.classList.remove('conteudo-vitoria');
            modal.innerHTML = '';

            board.innerHTML = "";
            cards.sort(() => 0.5 - Math.random());
            createBoard();

            esconderLoading();
        }, 400); // tempo do fade
    }

    const btnReset = document.getElementById("resetarJogo");
    btnReset.addEventListener('click', resetarJogo);

    createBoard()


})

