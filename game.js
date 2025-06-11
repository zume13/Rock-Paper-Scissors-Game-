const cRock = document.getElementById("cRock");
const cPaper = document.getElementById("cPaper");
const cScissors = document.getElementById("cScissors");
const pRock = document.getElementById("pRock");
const pPaper = document.getElementById("pPaper");
const pScissors = document.getElementById("pScissors");
const cGameAnimations = document.getElementById("cGameAnimations");
const pGameAnimations = document.getElementById("pGameAnimations");
const startButton = document.getElementById("startButton");
const pGamePhoto = document.getElementById("pGamePhoto");
const cGamePhoto = document.getElementById("cGamePhoto");
const pAgain = document.getElementById("pAgain");
const compScore = document.getElementById("compScore");
const playerScore = document.getElementById("playerScore");
const pPreText = document.getElementById("pPreText");
const cPreText = document.getElementById("cPreText");
const resetScore = document.getElementById("reset");
let draw = "DRAW";
let cWon = "Computer Won";
let pWon = "Player Won";
let cvalue;
let pvalue;
let cmove ;
let cScore = 0; 
let pScore = 0; 
let prevC = null;
const buttonMap = {

    pRock: 1, 
    pPaper: 2, 
    pScissors: 3

}

function startBttnEnabler(){

    startButton.disabled = false;
}

function pAgaintBttnEnabler(){

    pAgain.disabled = false;
}

function function startBttndisabler(){

    startButton.disabled = true;
}

function pAgainBttndisabler(){

    startButton.disabled = true;
}

function btnenabler(){

    pRock.disabled = false;
    pPaper.disabled = false;
    pScissors.disabled = false;

}

function btndisabler(){

    pRock.disabled = true;
    pPaper.disabled = true;
    pScissors.disabled = true;

}

function increCScore(){

    cScore++;
    compScore.textContent = cScore;

}

function increPScore(){

    pScore++;
    playerScore.textContent = pScore;

}

function numGenerator(){

   number = Math.floor(Math.random() * 3 + 1);
   return number;
   

}

function applyStyles(element, scale, color){

    element.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    element.style.backgroundColor = `${color}`;
    element.style.transform = `scale(${scale})`
}

function randomVal(prev){

    let number;

    do{

        number = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    }while(prev === number);
    return number;

}

function bttnAnimation(value){

    switch(value){

        case 1: applyStyles(cRock, 1.2, "#3891da");
        break;

        case 2: applyStyles(cPaper, 1.2, "#3891da");
        break;

        case 3: applyStyles(cScissors, 1.2, "#3891da");
        break;
    }

resetStyleInterval = setTimeout(()=>{  

    switch(value){

        case 1: applyStyles(cRock, 1, "#0a5c9f");
        break;

        case 2: applyStyles(cPaper, 1, "#0a5c9f");
        break;

        case 3: applyStyles(cScissors, 1, "#0a5c9f");
        break;

    }

    }, 500)
}

function preCGameAnimation(){
    animationInterval = setInterval(()=>{

    cvalue = randomVal(prevC);
    prevC = cvalue;
    cGameAnimations.innerHTML = `<img id="cGamePhoto" src="images/c${cvalue}.png">`;

    bttnAnimation(cvalue);

}, 500)
}

function prePlayerAnimation(buttonMap){

    for(const[buttonID, value] of Object.entries(buttonMap)){

        const button = document.getElementById(buttonID);
        if(button){

            button.onclick = ()=>{

                pGameAnimations.innerHTML = `<img src="images/p${value}.png">`;
                return pvalue = value;
            }            

        }
    }

}

function fightAnimation(){

    pGameAnimations.innerHTML = `<img src="images/fp.png" id="pGamePhoto">`;
    cGameAnimations.innerHTML = `<img src="images/fc.png" id="cGamePhoto">`;

    const cGamePhoto = document.getElementById("cGamePhoto");
    const pGamePhoto = document.getElementById("pGamePhoto");
    

    pGamePhoto.animate([

        {transform: "rotate(10deg)"},
        {transform: "rotate(0deg)"},
        {transform: "rotate(-10deg)"},
        {transform: "rotate(10deg)"},
        {transform: "rotate(0deg)"},

    ], {
        
        duration: 400,
        easing: "ease", 
        iterations: 3
    });

        cGamePhoto.animate([

        {transform: "rotate(10deg)"},
        {transform: "rotate(0deg)"},
        {transform: "rotate(-10deg)"},
        {transform: "rotate(10deg)"},
        {transform: "rotate(0deg)"},

    ], {
        
        duration: 400,
        easing: "ease", 
        iterations: 3
    });


}

function stopAnimations(){

    clearInterval(animationInterval);
    clearTimeout(resetStyleInterval);
    applyStyles(cRock, 1, "#0a5c9f");
    applyStyles(cPaper, 1, "#0a5c9f");
    applyStyles(cScissors, 1, "#0a5c9f");

}

function startAnimation(){

   cmove = numGenerator(cmove);

    startButton.onclick = ()=>{
        if(pGameAnimations.querySelector("img")){
            pPreText.textContent = null;
            cPreText.textContent = null;
            stopAnimations();
            fightAnimation();
            btndisabler();
            moveTimout = setTimeout(()=>{
            cMove(cmove);
            pMove(pvalue);
            showWinner(pvalue, cmove);
            ;}, 1500)
            pAgaintBttnEnabler();
            startBttndisabler();
}
        }
        else{

            pPreText.textContent = "Choose a Move First!"
        }
    }
}

function cMove(cmove)
{

    switch(cmove){

        case 1: cGameAnimations.innerHTML = `<img src="images/c${cmove}.png">`;
        break;
        case 2: cGameAnimations.innerHTML = `<img src="images/c${cmove}.png">`;
        break;
        case 3: cGameAnimations.innerHTML = `<img src="images/c${cmove}.png">`;
        break;

    }

}

function pMove(pvalue){

    switch(pvalue){

        case 1: pGameAnimations.innerHTML = `<img src="images/p${pvalue}.png">`;
        break;
        case 2: pGameAnimations.innerHTML = `<img src="images/p${pvalue}.png">`;
        break;
        case 3: pGameAnimations.innerHTML = `<img src="images/p${pvalue}.png">`;
        break; 

    }

}

function showWinner(pvalue, cmove){

    if(pvalue === 1){

        switch(cmove){

            case 1: pPreText.textContent = draw;
                    cPreText.textContent = draw;
            break;
            case 2: pPreText.textContent = cWon;
                    cPreText.textContent = cWon;
                    increCScore();       
            break; 
            case 3: pPreText.textContent = pWon;
                    cPreText.textContent = pWon;
                    increPScore();       
            break; 
        }
    }
    else if(pvalue === 2){

        switch(cmove){

            case 1: pPreText.textContent = pWon;
                    cPreText.textContent = pWon;
                    increPScore(); 
            break;
            case 2: pPreText.textContent = draw;
                    cPreText.textContent = draw;       
            break; 
            case 3: pPreText.textContent = cWon;
                    cPreText.textContent = cWon;
                    increCScore();       
            break;     
        }
    }
    else if(pvalue === 3){

        switch(cmove){

            case 1: pPreText.textContent = cWon;
                    cPreText.textContent = cWon;
                    increCScore(); 
            break;
            case 2: pPreText.textContent = pWon;
                    cPreText.textContent = pWon;
                    increPScore();       
            break; 
            case 3: pPreText.textContent = draw;
                    cPreText.textContent = draw;
            break;     
        }       

    }

}

function playAgain(){

    pAgain.onclick = ()=>{

        pPreText.textContent = "Choose your Move";
        cPreText.textContent = "Computer is Thinking";
        pGameAnimations.innerHTML = null;
        btnenabler();
        preCGameAnimation();
        cmove = numGenerator();
        cMove(cmove);
        pAgainBttndisabler();
        startBttnEnabler();
        

    }
}

function scoreReset(){

    resetScore.onclick = ()=>{

        cScore = 0;
        pScore = 0;
        compScore.textContent = cScore;
        playerScore.textContent = pScore;

    }

}

pAgainBttndisabler();
preCGameAnimation();
prePlayerAnimation(buttonMap, pvalue); 
startAnimation();
playAgain();
scoreReset();





