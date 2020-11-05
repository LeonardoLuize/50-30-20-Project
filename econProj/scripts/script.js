



function calculate(){

     let spanContainer = document.getElementById('span-container');

    let value1 = document.getElementById('inputValue').value * 0.5;
    let value2 = document.getElementById('inputValue').value * 0.3;
    let value3 = document.getElementById('inputValue').value * 0.2;

    let span1 = document.getElementById('value1');
    let span2 = document.getElementById('value2');
    let span3 = document.getElementById('value3');

    spanContainer.style.animation = "spanContainer .3s";
    spanContainer.style.animationFillMode = "forwards";

    span1.innerHTML = "50% - R$ " + value1;

    span2.innerHTML = "30% - R$ " + value2;

    span3.innerHTML = "20% - R$ " + value3; 

    spanContainer.height = "200px";


    document.querySelectorAll('[data-value]').forEach((element) => {
        element.classList.add('animate')
    })

}

function arrowClick(){
    let content = document.getElementById('content-container').offsetTop;

    document.getElementById('container').scrollTo(0, content);
}

/* function openMenu(){
    document.querySelectorAll('[data-menu]').forEach((element) => {
        element.classList.add('animateMenu')
    })
}

function exitMenu(){
    document.querySelectorAll('[data-menu]').forEach((element) => {
        element.classList.remove('animateMenu')
    })
}
 */
let num = 1;

function menu(){
    
    

    if(num == 1){
        num = 0;
        document.querySelectorAll('[data-menu]').forEach((element) => {
            element.classList.add('animateMenu')
        })

        document.querySelectorAll('[data-line = "1"]').forEach((element) => {
            element.classList.add('lineAnimate1')
        })

        document.querySelectorAll('[data-line = "2"]').forEach((element) => {
            element.classList.add('lineAnimate2')
        })

        document.querySelectorAll('[data-line = "3"]').forEach((element) => {
            element.classList.add('lineAnimate3')
        })

        
    }else{
        num = 1;

        document.querySelectorAll('[data-menu]').forEach((element) => {
            element.classList.remove('animateMenu')
        })

        document.querySelectorAll('[data-line = "1"]').forEach((element) => {
            element.classList.remove('lineAnimate1')
        })

        document.querySelectorAll('[data-line = "2"]').forEach((element) => {
            element.classList.remove('lineAnimate2')
        })

        document.querySelectorAll('[data-line = "3"]').forEach((element) => {
            element.classList.remove('lineAnimate3')
        })

        
    }
}