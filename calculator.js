let mainFrame = document.querySelector('.button-frame');

let elementsNmae = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '÷', 'DEL', 0, '⌫', '.', '='];
let infoDataKey = [7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '/', 'Delete', 0, 'Backspace', '.', 'Enter'];
let idElemens = ['seven', 'eigh', 'nine', 'mult', 'four', 'five', 'six', 'min', 'one', 'two', 'three', 'sum', 'cero', 'Delete', 'division', 'Backspace', 'float', 'Enter']
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
    element.addEventListener("click", filterFunct);
});

const testing = document.querySelector('HTML');

testing.addEventListener("keydown", function (cap){
    let infoText = cap.key;
    const findIds = infoDataKey.some( (element) => {
        return element == infoText
    })

    if(findIds){

        let buttonCap = document.querySelector(`button[data-key="${infoText}"]`)
        let info = buttonCap.textContent;
        calculatorNumbs(info)
    } 

    });

function filterFunct(){
    let info = this.textContent;
    calculatorNumbs(info)


}




let resultFrame = document.querySelector('.output');
let historyFrame = document.querySelector('.history');

let pointButton = document.querySelector('#float');

let firstPartialV = "";
let secondPartialV = "";
let choiseOpt = "";
// let tester = "";

let listOpt = [];  
let listOfValues = [];
let history = [];
let theText = "";

// let lastOperator= "";
let secondValueN = "";
let wasAnOperator = 0;

//filters
function calculatorNumbs(info) {
    // console.log(info)
    // let histoValue = historyFrame.textContent;
    // let lastOperator = listOpt[listOpt.length - 1];
    // if(button){
    //     theText =button 
    // }else{

    // }
    // theText = this.textContent;
    theText = info

    
    
    
    const surchEle = optElements.some((element) => {
        return element == theText;
    })

    let lastItemHistory = history[history.length-1];
    const surchLastItemHistory = history.some((element) =>{
        return element == lastItemHistory;
    })


    if(theText == "=" && history.length < 1){
        resultFrame.textContent = "enter a value"

    }
    

    else if (theText != "=" && surchEle && surchLastItemHistory && choiseOpt != "" && wasAnOperator ) {//alternar entre operadores

        history.pop();
        history.push(theText);
        listOpt.pop();
        listOpt.push(theText);
        choiseOpt = theText;
        
        
    }else{


        if(theText == "."){
            pointButton.removeEventListener("click",calculatorNumbs);
        }


        if (theText == 'DEL') {
            deleteAll();
    
        } else if (theText == '⌫') {
            if(firstPartialV != "" && firstPartialV != history[history.length-1]){
    
                history.push(firstPartialV);
                back();
            }else{
                back();
            }
        } else {
            if(secondValueN != "" && theText == "="){
                listOfValues.push(secondValueN);
            }
            if(theText != "="){
                secondValueN = "";
            }
            // }
    
            // if (lastOperator == "=" && theText != '=') {
            //     listOfValues.pop(); //borrar el segundo valor y operar con uno nuevo
            // }
    
    
            if (theText != '=' && surchEle) {//check the last operator
                listOpt.push(theText);
                wasAnOperator = 1;
                pointButton.addEventListener("click",calculatorNumbs);
                if(listOpt.length <=1){
                    choiseOpt = theText;
                    


                }else{
                    choiseOpt = listOpt[listOpt.length-2]
                }
                // historyFrame.textContent += theText;//umm
                // history.push(theText);
            }
            // choiseOpt = listOpt[listOpt.length-2];
    
    
            if (!surchEle) {//para numeros
                wasAnOperator = 0;
                firstPartialV += theText;
                resultFrame.textContent = firstPartialV;
                if (listOfValues.length >= 2) {
                    // historyFrame.textContent += firstPartialV;//umm
                    history.push(theText);
                    partialResult(...listOfValues)
                }
    
    
            } else {
                // listOpt.push(theText);
                if (firstPartialV != "") {
    
                    history.push(firstPartialV);
                    listOfValues.push(firstPartialV);
                    firstPartialV = "";
    
                }history.push(theText);
    
                if (listOfValues.length >= 2) {// cambie aqui //quiere decir segundo simbolo por ende llmar la funcion
                    partialResult(...listOfValues);
                }
            }
        }
        let stringHistory = history.join(" ");
        historyFrame.textContent = stringHistory;
        choiseOpt = listOpt[listOpt.length-1];
    }
        let stringHistory = history.join(" ");
        historyFrame.textContent = stringHistory;




}   


function solutionOutp(solution) { //quita el primero y pone el resultaso en su lugar luego borra el segundo para una nueva operacion.
    
    // console.log(typeof(solution));
    let stringSolution = solution.toString(10);
    console.log(stringSolution.length );
    console.log(solution);
    
    if(stringSolution.length >= 17){
       solution =  Math.round(solution);
       console.log(solution);

    }





    listOfValues.splice(0, 1, solution.toString(10))
    resultFrame.textContent = solution;
    history = [solution];
    if (theText == '=') {

        // console.log("result: " + solution);
        // listOfValues.splice(0, 1, solution.toString(10))
        // resultFrame.textContent = solution;
        // historyFrame.textContent = solution;//umm
        
        // history = [solution];
        secondValueN = listOfValues[1];
        listOfValues.pop();
        // lastOperator = "=";
        // lastOperator = theText;
        // history.push(solution);

    } else {
        // console.log("result: " + solution)
        // listOfValues.splice(0, 1, solution.toString(10))
        // resultFrame.textContent = solution;
        //     // console.log(listOfValues);
        // history = [solution];
        listOfValues.pop();
        secondValueN = "";
        // lastOperator = "";
        // lastOperator =
        
        
        //     // console.log(listOfValues);
        // historyFrame.textContent = solution;//umm
        
        // history.push(solution);
        //     historyFrame.textContent = listOfValues[0];
        
    }
    console.log("listofV: " + listOfValues);

}

function partialResult(a, b) {
    // console.log(choiseOpt);
        // choiseOpt= listOpt[listOpt.length-2];//two back


    // let reversearg = listOpt.reverse();

    // function operatorToFind (element){
    //     return element != "=";
    // }

    // let testing = reversearg.find(operatorToFind);
    // // console.log(testing);
    // choiseOpt = testing;


    
    // if((typeof(choiseOpt)) == undefined){
        


    
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
            if(secondV == 0){
                resultFrame.textContent = "can no divide by 0"
            }else{
                solutionOutp(firstV / secondV)
            }

            break
        // case '=':
        //     equal();

            // break

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
    // tester = "";



}

const back = function () {

    let minusTheLast = firstPartialV.slice(0, -1);
    firstPartialV = minusTheLast;

    history.pop();
    history.push(firstPartialV);
    // console.log(firstPartialV);
    resultFrame.textContent = firstPartialV;

    // let theLastOne =  history.join("");
    // let endString = theLastOne[theLastOne.length-2];

    // historyFrame.textContent = minusTheLast;

}


// const add = function (a, b) {
//     solutionOutp(a + b);

// };

// const subtract = function (a, b) {
//     solutionOutp(a - b);

// };

// const multiply = function (a,b) {
//     solutionOutp(a*b);
// };  

