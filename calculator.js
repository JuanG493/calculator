let mainFrame = document.querySelector('.button-frame');

let elementsNmae = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '÷', 'DEL', 0, 'CE', '.', '='];
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
    // element.addEventListener("click", filterVariables);
    element.addEventListener("click", testing);

});

let resultFrame = document.querySelector('.output');
// resultFrame.addEventListener("click", partialResult);

let firstValue = "";
let secondValue = "";
let choiseOperation = "";
let result = 0;

let acumulator = 0;  //the same as a result
let lastValue = 0;
let lastOperator = "";
// console.log(`first value`)

// let fisrtValue = "";
// let secondValue = "";
// 

//filters
function testing() {
    let numValue = Number(this.textContent);
    // console.log(typeof(numValue))
    if (result != 0) {
        // if (numValue >= 0 || this.textContent == '.') {
        //     secondValue += this.textContent;
        //     resultFrame.textContent = this.textContent;
        // } else {
        //     if (this.textContent == '=') {
        //         partialResult();

        //     } else if (this.textContent == 'DEL') {
        //         deleteAll();
        //     } else if (this.textContent == 'CE') {
        //         back();
        //     }
        //     else {
        //         choiseOperation = this.textContent;
        //         console.log(choiseOperation)
        //         console.log(firstValue);

        //         secondValue = "";
        //         // resultFrame.textContent = fisrtValue
        //     }

        // }



    } else if (numValue >= 0 || this.textContent == '.') {
        if (choiseOperation == "") {
            firstValue += this.textContent;
            resultFrame.textContent = firstValue;
            console.log("first: " + firstValue)

        } else {
            secondValue += this.textContent;
            resultFrame.textContent = secondValue;
            console.log("second: " + secondValue)

        }
    } else {
        if (this.textContent == '=') {
            partialResult();

        } else if (this.textContent == 'DEL') {
            deleteAll();
        } else if (this.textContent == 'CE') {
            back();
        }
        else {
            choiseOperation = this.textContent;
            console.log(choiseOperation)
            console.log(firstValue);

            secondValue = "";
            // resultFrame.textContent = fisrtValue
        }

    }
}


// function filterVariables() {
//     let numValue = Number(this.textContent);
//     // if (acumulator == 0) {


//     if (this.textContent == '=') {
//         partialResult();
//     }


//     else if (fisrtValue != 0 && choiseOperation != "") {
//         if (numValue >= 0) {
//             secondValue = numValue;

//             resultFrame.textContent = secondValue;
//         }

//     }
//     else {
//         if (numValue >= 0) {
//             // console.log(numValue);
//             fisrtValue = numValue;
//             resultFrame.textContent = numValue;
//         }
//         else {
//             // console.log(this.textContent);
//             choiseOperation = this.textContent;
//         }
//     }
//     // }
//     // else {
//     // }
// }

function solutionOutp(result) {
    console.log("result: " + result)


    // acumulator = result;
    // secondValue = result;
    // lastOperator = choiseOperation;
    // choiseOperation = "";
    firstValue = result;

    console.log("firstValue:" + firstValue);
    console.log("SeconValue:" + secondValue);
    console.log("operation: " + choiseOperation)
    // secondValue = 0;
    resultFrame.textContent = result;
    result = firstValue;


}

function partialResult() {
    let numFisrtValue = Number(firstValue);
    let numSecondValue = Number(secondValue);
    console.log(typeof (numFisrtValue));
    // console.log(secondValue);
    // console.log(choiseOperation);

    switch (choiseOperation) {
        case '+':
            add(numFisrtValue, numSecondValue)

            break;
        case '-':
            subtract(numFisrtValue, numSecondValue)

            break
        case '*':

            break
        case '÷':

            break
        // case '=':
        //     equal();

        //     break

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

const equal = function () {
    if (acumulator != 0) {
        console.log(acumulator);
        resultFrame.textContent = acumulator;

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