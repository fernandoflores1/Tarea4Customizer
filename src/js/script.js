let titleInput = document.querySelector("#title");
let titleShirt = document.querySelector(".titleName");


let blackRadio = document.querySelector("#black");
let whiteRadio = document.querySelector("#white");

let shirt = document.querySelector(".shirt");
let characterName = document.querySelector(".characterName");

let rangeUpDown = document.querySelector("#upDown");
let rangeLeftRight = document.querySelector("#leftRight");

let imgs = document.querySelectorAll(".selected");
let mainImg = document.querySelector(".mainCharacter");
let littleImg = document.querySelector(".littleCharacter");
let imgSite = document.querySelector(".imgSite");

let posY = 0;
let posX = 0;

titleInput.addEventListener("keyup", ()=>{
    titleShirt.textContent = "";
    titleShirt.textContent += titleInput.value;
});

blackRadio.addEventListener("click", ()=>{
    shirt.src = "./src/images/camisetaNegra.png";
    titleShirt.style.color = 'white';
    characterName.style.color='white';
});

whiteRadio.addEventListener("click", ()=>{
    shirt.src = "./src/images/camisetaBlanca.png"
    titleShirt.style.color = 'black';
    characterName.style.color='black';
});

rangeUpDown.addEventListener('input', () => {
    posY = rangeUpDown.value;
    titleShirt.style.transform = `translate(${posX}px, ${posY}px)`;
});

rangeLeftRight.addEventListener('input', () => {
    posX = rangeLeftRight.value;
    titleShirt.style.transform = `translate(${posX}px, ${posY}px)`;
});

imgs.forEach(img => {
    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('src', img.src);
        event.dataTransfer.setData('name', img.src.split('/').pop().split('.')[0]);
    });
});

imgSite.addEventListener('dragover', (event) => {
    event.preventDefault();
});

imgSite.addEventListener('drop', (event) => {
    event.preventDefault();
    const src = event.dataTransfer.getData('src');
    const name = event.dataTransfer.getData('name').toUpperCase();

    mainImg.src = src;
    littleImg.src = src;
    characterName.textContent = name;
});

if(window.matchMedia("(max-width: 480px)").matches){
    imgs.forEach(img =>{
        img.addEventListener("click", ()=>{
            const src = img.src;
            const name = img.src.split('/').pop().split('.')[0];

            mainImg.src = src;
            littleImg.src = src;
            characterName.textContent = name.toUpperCase();
        });
    });
}