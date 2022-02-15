console.log('ciao')

// imposto ciclo for per generare i numeri partendo da 10x10
const gridContainer = document.querySelector('.grid')
const numeri = [];
let contatore = 0;

const button = document.getElementById('btn')
const indexLevel = document.getElementById('level')

    indexLevel.addEventListener('click', function(){
        if (indexLevel.value == 1){
            button.addEventListener('click', function(){
                // gridContainer.classList.add('active')
                remove();
                generatore10();
            })
        }

        if (indexLevel.value == 2  ){
            button.addEventListener('click', function(){
                // gridContainer.classList.add('active')
                remove();
                generatore9 ();
            })
        }

        if(indexLevel.value == 3){
            button.addEventListener('click', function(){
                // gridContainer.classList.add('active')
                remove();
                generatore7();
            })
        }
    })

function remove(contentToRemove) {
    contentToRemove = gridContainer;
    gridContainer.innerHTML = ``
}

function generatore10 (){
    for (let i = 1; i <= 100; i++ ) {

        contatore = i;
        numeri.push(contatore)
    
        console.log(contatore)
    
        let gridItem = document.createElement('div')
        gridItem.innerHTML = `${contatore}`;
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc( 100% / 10)`;
        gridItem.style.height = `calc( 100% / 10)`;
        gridContainer.append(gridItem);

        console.log(gridContainer)
    
    
        gridItem.addEventListener('click', function(){
            this.classList.add('click')
        })

        
    }
}

function generatore9 (){
    for (let i = 1; i <= 100; i++ ) {

        contatore = i;
        numeri.push(contatore)
    
        console.log(contatore)
    
        let gridItem = document.createElement('div')
        gridItem.innerHTML = `${contatore}`;
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc( 100% / 9 )`;
        gridItem.style.height = `calc( 100% / 9 )`;
        gridContainer.append(gridItem);

        console.log(gridContainer)
    
    
        gridItem.addEventListener('click', function(){
            this.classList.add('click')
        })

        
    }
}

function generatore7 (){
    for (let i = 1; i <= 100; i++ ) {

        contatore = i;
        numeri.push(contatore)
    
        console.log(contatore)
    
        let gridItem = document.createElement('div')
        gridItem.innerHTML = `${contatore}`;
        gridItem.classList.add('grid-item');
        gridItem.style.width = `calc( 100% / 7)`;
        gridItem.style.height = `calc( 100% / 7)`;
        gridContainer.append(gridItem);

        console.log(gridContainer)
    
    
        gridItem.addEventListener('click', function(){
            this.classList.add('click')
        })

        
    }
}





