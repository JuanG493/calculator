let mainFrame = document.querySelector('.button-frame');

let elementsNmae = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '÷', 'DEL', 0, '⌫', '.', '='];
let infoDataKey = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '/', 'Delete', 0, 'Backspace', '.', 'Enter'];
let idElemens = ['seven', 'eigh', 'nine', 'mult', 'four', 'five', 'six', 'min', 'one', 'two', 'three', 'sum', 'division', 'Delete', 'cero', 'Backspace', 'float', 'Enter']
let optElements = ["*", '+', '-', '÷', '='];

for (let a = 0; a <= elementsNmae.length - 1; a++) {
    let divchild = document.createElement('button');
    divchild.classList.add(`divChild`);
    divchild.setAttribute('id', `${idElemens[a]}`)
    divchild.setAttribute('data-key', `${infoDataKey[a]}`)
    divchild.textContent = elementsNmae[a];
    mainFrame.appendChild(divchild);
}

let buttons = document.querySelectorAll('button');
buttons.forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        let info = this.textContent;
        calculatorNumbs(info);
    });
});

let infoText = "";

const testing = document.querySelector('HTML');
testing.addEventListener("keydown", function(event){
    event.preventDefault();
    let  infoText = event.key;
    const findIds = infoDataKey.some((element) => {
        return element == infoText
    })

    if (findIds) {
        let buttonCap = document.querySelector(`button[data-key="${infoText}"]`)
            buttonCap.classList.add('playing');
        setTimeout(()=> {
            buttonCap.classList.remove('playing');

        },'200')
        let info = buttonCap.textContent;
        calculatorNumbs(info)
    }
})


let resultFrame = document.querySelector('.output');
let historyFrame = document.querySelector('.history');
let pointButton = document.querySelector('#float');

let firstPartialV = "";
let secondPartialV = "";
let choiseOpt = "";

let listOpt = [];
let listOfValues = [];
let history = [];
let theText = "";

let secondValueN = "";
let wasAnOperator = 0;

//filters
function calculatorNumbs(info) {
    theText = info
    const surchEle = optElements.some((element) => {
        return element == theText;
    })

    let lastItemHistory = history[history.length - 1];
    const surchLastItemHistory = history.some((element) => {
        return element == lastItemHistory;
    })
    
    if (theText == "=" && history.length < 1) {
        resultFrame.textContent = "enter a value"
    }


    else if (theText != "=" && surchEle && surchLastItemHistory && choiseOpt != "" && wasAnOperator) {//alternar entre operadores
        history.pop();
        history.push(theText);
        listOpt.pop();
        listOpt.push(theText);
        choiseOpt = theText;

    } else {

        if (theText == 'DEL') {
            deleteAll();

        } else if (theText == '⌫') {
            if (firstPartialV != "" && firstPartialV != history[history.length - 1]) {

                history.push(firstPartialV);
                back();
            } else {
                back();
            }
        } else {
            if(theText == "="){
                if(secondValueN != ""){
                    listOfValues.push(secondValueN);
                }
                else if( secondValueN == "" && listOfValues.length >= 1 &&  optElements.includes(lastItemHistory) && wasAnOperator ){
                    listOfValues.push(history[history.length-2])
                }
            }
            if (secondValueN != "" && theText == "=") {
            }
            if (theText != "=") {
                secondValueN = "";
            }

            if (theText != '=' && surchEle) {//check the last operator
                listOpt.push(theText);
                wasAnOperator = 1;
                if (listOpt.length <= 1) {
                    choiseOpt = theText;
                } else {
                    choiseOpt = listOpt[listOpt.length - 2]
                }
            }

            if (!surchEle) {//for numbers
                if(firstPartialV.length <= 20){

                    if(theText == '.' && firstPartialV.includes(".")){
                        console.log("one is allowed")
    
                    }else{
    
                        wasAnOperator = 0;
                        firstPartialV += theText;
                        resultFrame.textContent = firstPartialV;
                        if (listOfValues.length >= 2) {
                            history.push(theText);
                            partialResult(...listOfValues)
                        }
                    }
                }


            } else {
                if (firstPartialV != "") {
                    history.push(firstPartialV);
                    listOfValues.push(firstPartialV);
                    firstPartialV = "";

                } history.push(theText);

                if (listOfValues.length >= 2) {
                    partialResult(...listOfValues);
                }
            }
        }
        let stringHistory = history.join(" ");
        historyFrame.textContent = stringHistory;
        choiseOpt = listOpt[listOpt.length - 1];
    }
    let stringHistory = history.join(" ");
    historyFrame.textContent = stringHistory;
}


function solutionOutp(solution) { 
    let stringSolution = solution.toString(10);

    if (stringSolution.length >= 17) {
        solution = Math.round(solution);

    }
    listOfValues.splice(0, 1, solution.toString(10))
    resultFrame.textContent = solution;
    history = [solution];
    if (theText == '=') {
        secondValueN = listOfValues[1];
        listOfValues.pop();

    } else {
        listOfValues.pop();
        secondValueN = "";
    }

}

function partialResult(a, b) {

    let firstV = Number(a);
    let secondV = Number(b);

    switch (choiseOpt) {
        case '+':
            solutionOutp(firstV + secondV);

            break;
        case '-':
            solutionOutp(firstV - secondV)

            break
        case '*':
            solutionOutp(firstV * secondV)

            break
        case '÷':
            if (secondV == 0) {
                resultFrame.textContent = "can no divide by 0"
            } else {
                solutionOutp(firstV / secondV)
            }

            break
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
}

const back = function () {
    let minusTheLast = firstPartialV.slice(0, -1);
    firstPartialV = minusTheLast;
    history.pop();
    history.push(firstPartialV);
    resultFrame.textContent = firstPartialV;
}
