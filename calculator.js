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

let buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener("click", calculatorNumbs);
});

let resultFrame = document.querySelector('.output');
let historyFrame = document.querySelector('.history')

let firstPartialV = "";
let secondPartialV = "";
let choiseOpt = "";
let tester = "";

let listOpt = [];  //the same as a result
let listOfValues = [];
let history = [];
let theText = "";



//filters
function calculatorNumbs() {
    let histoValue = historyFrame.textContent;
    let lastOperator = listOpt[listOpt.length - 1];


    theText = this.textContent;


    const surchEle = optElements.some((element) => {
        return element == theText;
    })


    if (!surchEle) {
        historyFrame.textContent += theText;

    }



    if (this.textContent == 'DEL') {
        deleteAll();

    } else if (this.textContent == 'CE') {
        back();
    } else {

        if (lastOperator == "=" && theText != '=') {
            listOfValues.pop();
        }


        if (theText != '=' && surchEle) {//check the last operator
            choiseOpt = theText;
            historyFrame.textContent += theText;//umm
        }


        if (!surchEle) {//para numeros
            firstPartialV += theText;
            resultFrame.textContent = firstPartialV;
            if (listOfValues.length >= 2) {
                historyFrame.textContent += firstPartialV;//umm
                history.push(theText);
                partialResult(...listOfValues)
            }


        } else {
            listOpt.push(theText);
            if (firstPartialV != "") {

                history.push(firstPartialV);
                listOfValues.push(firstPartialV);
                firstPartialV = "";

            }history.push(theText);

            if (listOpt.length >= 2 && listOfValues.length >= 2) {//quiere decir segundo simbolo por ende llmar la funcion
                partialResult(...listOfValues);
            }
        }
    }
    console.log(history);
}   


function solutionOutp(solution) { //quita el primero y pone el resultaso en su lugar luego borra el segundo para una nueva operacion.
    
    
    if (theText == '=') {

        console.log("result: " + solution);
        listOfValues.splice(0, 1, solution.toString(10))
        resultFrame.textContent = solution;
        historyFrame.textContent = solution;//umm
        
        history.push(solution);

    } else {
        
        console.log("result: " + solution)
        listOfValues.splice(0, 1, solution.toString(10))
        //     // console.log(listOfValues);
        listOfValues.pop();
        resultFrame.textContent = solution;
        //     // console.log(listOfValues);
        historyFrame.textContent = solution;//umm
        
        history.push(solution);
        //     historyFrame.textContent = listOfValues[0];
        
    }
    console.log("listofV: " + listOfValues);

}

function partialResult(a, b) {
    let firstV = Number(a);
    let secondV = Number(b);
 
    switch (choiseOpt) {
        case '+':
            add(firstV, secondV)

            break;
        case '-':
            subtract(firstV, secondV)

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
    historyFrame.textContent = "";

    listOpt = [];
    listOfValues = [];
    history = [];
    firstPartialV = "";
    secondPartialV = "";
    choiseOpt = "";
    result = 0;
    tester = "";



}

const back = function () {
    console.log(history);
   
    let minusTheLast = firstPartialV.slice(0, -1);
    firstPartialV = minusTheLast;
    console.log(firstPartialV);
    resultFrame.textContent = firstPartialV;
    historyFrame.textContent = firstPartialV;

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
