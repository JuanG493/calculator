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
    element.addEventListener("click", calculatorNumbs);

});

let resultFrame = document.querySelector('.output');

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



//filters
function calculatorNumbs() {
    theText = this.textContent;
    
    tester = this.textContent;
    
    let numValue = parseInt(this.textContent);
    const surchEle = optElements.some((element) => {
        return element == tester;
    })

    if (theText == '=' && listOfOperators[listOfOperators.length - 1] == '=') {
        partialResult();
    }

    else if (surchEle) {
        if (listOfValues.length >= 2) {//para quitar el segundo valor si la operacion a contnuar no era la misma anterior presionando el =
            listOfValues.pop();
            listOfOperators.push(theText);


        } else {

            listOfOperators.push(this.textContent);
            listOfValues.push(firstPartialV);
            history.push(firstPartialV, this.textContent);
            console.log(history)
            resultFrame.textContent = listOfValues[listOfValues.length - 1];
            firstPartialV = "";

            if (listOfOperators.length >= 2) {
                choiseOperation = listOfOperators[listOfOperators.length - 2]
                partialResult();
            }
        }
    }


    else if (numValue >= 0 || this.textContent == '.') {
        
        if (listOfValues.length >= 1) {
            resultFrame.textContent = "";
        }

        firstPartialV += this.textContent;
        resultFrame.textContent = firstPartialV;
    }
    else if (this.textContent == 'DEL') {
        deleteAll();
    } else if (this.textContent == 'CE') {
        back();
    }

}


function solutionOutp(solution) { //quita el primero y pone el resultaso en su lugar luego borra el segundo para una nueva operacion.
  
 if (theText == '=') {

        console.log("result: " + solution)
        listOfValues.splice(0, 1, solution.toString(10))
        console.log(listOfValues);
        
        resultFrame.textContent = solution;
    } else {

        console.log("result: " + solution)
        listOfValues.splice(0, 1, solution.toString(10))
        console.log(listOfValues);
        listOfValues.pop();
        console.log(listOfValues);

        resultFrame.textContent = solution;
    }


}

function partialResult() {
    const newList = listOfValues.slice();

    let firstValNum = Number(newList[0]);
    let secondValNum = Number(newList[1]);
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

}


const deleteAll = function () {
    console.log("deleting");
    resultFrame.textContent = "";

    listOfOperators = [];
    listOfValues = [];
    history = [];
    firstPartialV = "";
    secondPartialV = "";
    choiseOperation = "";
    result = 0;
    tester = "";

}

const back = function () {
    let identi = optElements.some((element) => {
        return element == history[history.length-1];
    })

    console.log("back");
    if(identi){
        listOfOperators.pop();
    
    }else{
        let minusTheLast = firstPartialV.slice(0,-1);
        firstPartialV = minusTheLast;
        console.log(firstPartialV);
        resultFrame.textContent = firstPartialV;

    }

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
