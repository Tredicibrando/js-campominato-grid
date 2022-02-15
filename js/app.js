console.log('ciao')

// imposto ciclo for per generare i numeri partendo da 10x10
const gridContainer = document.querySelector('.grid')
const numeri = [];
let contatore = 0;
for (let i = 1; i <= 100; i++ ) {

    contatore = i;
    numeri.push(contatore)

    console.log(contatore)

    const gridItem = document.createElement('div')
    gridItem.innerHTML = `${contatore}`;
    gridItem.classList.add('grid-item');
    gridItem.style.width = `calc( 100% / 10)`;
    gridItem.style.height = `calc( 100% / 10)`;
    gridContainer.append(gridItem);


    gridItem.addEventListener('click', function(){
        this.classList.add('click')
    })
}




