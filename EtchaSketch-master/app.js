const $etchSpace = document.querySelector(".etchSpace");
const squareBtn = document.querySelector("#amountChange");
const clearBtn = document.querySelector("#clear");
    
    

const setGrid = ($etchSpace, spaces) =>{

    setGridSize($etchSpace,spaces);


    for(let i=0; i<spaces; i++){//rows
        for(let i=0; i<spaces; i++){//columns
     
    
        const $div = document.createElement("div");
        $div.classList.add("etched");
        $div.style.backgroundColor = "white" 
        $etchSpace.appendChild($div);

        }   
    }
}

const deleteChildren = () => () => {
    let node = document.getElementsByClassName("etchSpace")
    while(node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

// const deleteGridChildren = deleteChildren($etchSpace);

const setGridSize = ($etchSpace, spaces) => {
    $etchSpace.style.gridTemplateColumns = `repeat(${spaces}, 1fr)`;
    $etchSpace.style.gridTemplateRows = `repeat(${spaces}, 1fr)`;
}

const resetGrid = ($etchSpace, spaces = 16) => {
    deleteChildren();
    setGrid($etchSpace, spaces);
}


function clearSpaces($etchSpace){
   const etching =  $etchSpace.querySelectorAll(".etched");
    [...etching].forEach((etched) => {etched.style.backgroundColor = "white"})

}



//change square amount
function getUserInput(e){

    const spaces = prompt("Enter the Grid Size e.g. 16 for 16x16");

    if(spaces<=2 || spaces>=120){
        const spaces = prompt("Please enter an emount between 2 and 120 non inclusive")
    }else{
        clearSpaces($etchSpace);
        resetGrid($etchSpace, spaces);

    }
    


}


squareBtn.addEventListener("click", getUserInput);

clearBtn.addEventListener("click", (e) =>{
    clearSpaces($etchSpace);
})

resetGrid($etchSpace);

//mouseover
// const $newDiv = document.querySelectorAll(".etched");
// $newDiv.forEach($div => $div.addEventListener("mouseenter", function hoverOnDivs(e){
$etchSpace.addEventListener("mouseover", (evt) => {


    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + "1"+ ')';
    }
    
    const color = random_rgba();

    if (evt.target.classList.contains("etched")) {
        const $div = evt.target
        $div.style.backgroundColor = color;
    }
})
// }));



