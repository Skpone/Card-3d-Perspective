const CARD = document.querySelector(".card");
debugger;
CARD.addEventListener('mousemove', function(e){
    e.preventDefault();
    const POSX = e.offsetX; //pos de la img desde el padding
    const POSY = e.offsetY;

    //profundidad maxima de 15 grados
    // -15 pq si el cursor esta x encima de la mitad me da un valor negativo y me tira la carta para abajo en vez de para arriba como yo quiero 
    const ROTATEX = ((POSY - CARD.height / 2) / (CARD.height / 2) * -15); //calculo que logra que cuando el mouse esta arriba o abajo del centro se aplique profundidad para el lado en el que esta
    const ROTATEY = ((POSX - CARD.width / 2) / (CARD.width / 2)) * 15; //calculo que logra que cuando el mouse esta o a la derecha o a la izq del centro se aplique profundidad para el lado en el que esta
    CARD.style.transform = `rotateX(${ROTATEX}deg) rotateY(${ROTATEY}deg) scale(1.1)`;
});

CARD.addEventListener('mouseleave', function(e){
    e.preventDefault;
    CARD.style.transform = '';
})