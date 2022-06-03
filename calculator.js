let mainFrame = document.querySelector('.button-frame');

let elementsNmae = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '÷', 'DEL', 0, 'CE', '.', '='];
let idElemens = ['seven', 'eigh', 'nine', 'mult', 'four', 'five', 'six', 'min', 'one', 'two', 'three', 'sum', 'cero', 'float', 'division', 'CE', 'DEL', 'result']
let optElements = ["*", '+', '-', '÷', '='];
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
    // element.addEventListener("click", filterVariables);
    element.addEventListener("click", testing);

});

let resultFrame = document.querySelector('.output');
// resultFrame.addEventListener("click", partialResult);

let firstPartialV = "";
let secondPartialV = "";
let choiseOperation = "";
let result = 0;
let tester = "";

let listOfOperators = [];  //the same as a result
let listOfValues = [];
let history = [];
let partialValue = "";
let theText = "";

// console.log(`first value`)

// let fisrtValue = "";
// let secondValue = "";


//filters
function testing() {
    theText = this.textContent;

    tester = this.textContent;

    let numValue = parseInt(this.textContent);
    const surchEle = optElements.some((element) => {
        return element == tester;
    })
    
    if(theText == '=' && listOfOperators[listOfOperators.length-1]== '='){
        partialResult();
    }
    
    else if (surchEle) {
        if(listOfValues.length >=2){
            listOfValues.pop();
            
        }else{

            listOfOperators.push(this.textContent);
            listOfValues.push(firstPartialV);
            history.push(firstPartialV, this.textContent);
            console.log(history)
            resultFrame.textContent = listOfValues[listOfValues.length - 1];
            firstPartialV = "";
            // choiseOperation = this.textContent;
    
            if (listOfOperators.length >= 2) {
                choiseOperation = listOfOperators[listOfOperators.length - 2]
                partialResult();
            //     if (this.textContent != '=') {
    
            //     } choiseOperation = this.textContent;
            //     partialResult();
            }
        }
    }


    else if (numValue >= 0 || this.textContent == '.') {
        // const surchNum = listOfValues.some((numb) =>{
        //     return tester == numb
        // })
        if (listOfValues.length >= 1) {
            resultFrame.textContent = "";
        }

        firstPartialV += this.textContent;
        resultFrame.textContent = firstPartialV;



        // }
        // else if (this.textContent == '=') {

        //     partialResult();

    }
    else if (this.textContent == 'DEL') {
        deleteAll();
    } else if (this.textContent == 'CE') {
        back();
    }
    // else {
    //     choiseOperation = this.textContent;
    //     // console.log(choiseOperation)
    //     // console.log(firstValue);

    //     secondPartialV = "";
    //     // resultFrame.textContent = fisrtValue
    // }

    }




function equealOperator() {
    resultFrame.textContent = result;
}

function solutionOutp(solution) { //quita el primero y pone el resultaso en su lugar luego borra el segundo para una nueva operacion.
    if (theText == '=') {

        console.log("result: " + solution)
        listOfValues.splice(0, 1, solution.toString(10))
        console.log(listOfValues);
        resultFrame.textContent = solution;
    }else{

        console.log("result: " + solution)
        listOfValues.splice(0, 1, solution.toString(10))
        console.log(listOfValues);
        listOfValues.pop();
        console.log(listOfValues);
    
        resultFrame.textContent = solution;
    }

    // acumulator = result;
    // secondValue = result;
    // lastOperator = choiseOperation;
    // choiseOperation = "";
    // firstPartialV = solution;

    // console.log("firstValue:" + firstPartialV);
    // console.log("SeconValue:" + secondPartialV);
    // console.log("operation: " + choiseOperation)
    // secondValue = 0;
    // result = solution;


}

function partialResult() {
    const newList = listOfValues.slice();

    let firstValNum = Number(newList[0]);
    let secondValNum = Number(newList[1]);
    // console.log(typeof (firstValNum));
    // console.log(secondValue);
    // console.log(choiseOperation);

    switch (choiseOperation) {
        case '+':
            add(firstValNum, secondValNum)

            break;
        case '-':
            subtract(firstValNum, secondValNum)

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


    // if( acumulator != 0){
    //     console.log("acumulator: " + acumulator);
    //     console.log("lastaValue: " +lastValue);
    //     console.log("operation it's: " + choiseOperation)

    // }

}



// signPlus.style.gridColumn = 4/4;
// signPlus.style.backgroundColor = 'black';

//functios 

const deleteAll = function () {
    console.log("deleting");
}

const back = function () {
    console.log("back");
}

const equal = function (a, b) {
    let operator = listOfOperators[listOfOperators.length - 2];
    let resultOpt = `${a}${operator}${b}`;
    solutionOutp(resultOpt)

}

const add = function (a, b) {
    solutionOutp(a + b);

};

const subtract = function (a, b) {
    solutionOutp(a - b);

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
