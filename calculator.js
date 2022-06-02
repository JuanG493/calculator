let mainFrame = document.querySelector('.button-frame');

let elementsNmae = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '÷', 'DEL', 0, 'CE', ',', '='];
let idElemens = ['seven', 'eigh', 'nine', 'mult', 'four', 'five', 'six', 'min', 'one', 'two', 'three', 'sum', 'cero', 'float', 'division', 'CE', 'DEL', 'result']
for (let a = 0; a <= elementsNmae.length - 1; a++) {
    let divchild = document.createElement('button');
    divchild.classList.add(`divChild`);
    divchild.setAttribute('id', `${idElemens[a]}`)
    divchild.setAttribute('data-set', `${elementsNmae[a]}`)
    divchild.textContent = elementsNmae[a];
    mainFrame.appendChild(divchild);
}

// selector of elements and global variables


let buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener("click", filterVariables);

});

let resultFrame = document.querySelector('.output');
resultFrame.addEventListener("click", partialResult );

let fisrtValue = 0;
let secondValue = 0;
let choiseOperation = "";

let acumulator = 0;
let lastValue = 0;
let lastOperator = "";
// console.log(`first value`)

//filters
function filterVariables() {
    let numValue = Number(this.textContent);
    if( this.textContent == '='){
        partialResult();
    }


    else if (fisrtValue != 0 && choiseOperation != "") {
        if (numValue >= 0) {
            secondValue = numValue;
            filterOperation();
        }

    }
    else {
        if (numValue >= 0) {
            // console.log(numValue);
            fisrtValue = numValue;
            resultFrame.textContent = numValue;
        }
        else {
            console.log(this.textContent);
            choiseOperation = this.textContent;
        }
    }
}



function filterOperation() {
    // if ( choiseOperation != "" && (fisrtValue != 0 || secondValue !=0 || acumulator !=0)){
    // }
    switch (choiseOperation) {
        case '+':
            add(fisrtValue,secondValue)
            
            break;
        case '-':
            subtract(fisrtValue,secondValue)
            
            break
        case '*':
            
            break
        case '÷':
            
            break
        case '=':
            equal();
            
            break
            
        // default:

}
    //     break;


}

function solutionOpt (result){
    // console.log(result)
    acumulator = result;
    lastValue = secondValue;
    lastOperator = choiseOperation;
    // choiseOperation = "";
    fisrtValue = 0;
    secondValue =0;


}

function partialResult (){
    if( acumulator != 0){
        console.log("acumulator: " + acumulator);
        console.log("lastaValue: " +lastValue);
        console.log("operation it's: " + choiseOperation)
        
    }
    
}



// signPlus.style.gridColumn = 4/4;
// signPlus.style.backgroundColor = 'black';

//functios 

const equal = function (){
    if(acumulator != 0){
        console.log(acumulator);
        resultFrame.textContent = acumulator;

    }

}

const add = function (a, b) {
    solutionOpt( a + b);

};

const subtract = function (a, b) {
    return a - b;

};

const sum = function (arrayNum) {
    let result = 0;
    arrayNum.forEach(element => {
        result += element
    }); return result



};

const multiply = function (listOfI) {
    let resultM = 1;
    listOfI.forEach(element => {
        resultM *= element
    });
    if (resultM === 1) {
        return 0;
    } return resultM;

};  