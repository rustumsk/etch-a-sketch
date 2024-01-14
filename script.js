const container = document.querySelector("#container");

let num = 16;   
createRows(num);

const size = document.querySelector("#size");
size.textContent = num;
size.addEventListener("click", () =>{
    let num = parseInt(prompt("Enter size"));
    size.textContent = num;
    console.log(num)
    let childDivs = document.querySelectorAll("#container > div");
    childDivs.forEach((childDivs) => {
        childDivs.remove();
    });
    createRows(num);
})

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((boxes) => {
        boxes.addEventListener("mouseover", () =>{
            eraseColor(boxes);
        });
    });
})

const random = document.querySelector("#random");
random.addEventListener("click", () => {
    let r = document.querySelectorAll(".box");
    r.forEach((r) => {
        r.addEventListener("mouseover", () =>{
            randomColor(r);
        });
    });
})

const color = document.querySelector("#color");
color.addEventListener("click", () => {
    let c = document.querySelectorAll(".box");
    c.forEach((c) => {
        c.addEventListener("mouseover", () =>{
            makeColor(c);
        });
    });
})

function createRows(num){
    for (let i = 0; i < num; i++){
        let row = document.createElement("div");
        row.style.flex = "1";
        row.style.display = "flex";
        container.appendChild(row);
        for (let l = 0; l < num ; l++){
            let column = document.createElement("div");
            column.style.flex = "1";
            column.style.backgroundColor = "green";
            column.classList.add("box");
            column.addEventListener("mouseover", () =>{
                makeColor(column);
            });
            row.appendChild(column);
        }
    } 
}
function makeColor(column){
    column.style.backgroundColor = "white";
}
function randomColor(column){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    column.style.backgroundColor = "#" + randomColor;
}
function eraseColor(column){
    column.style.backgroundColor = "green";
}