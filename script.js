let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userscore_no=document.querySelector("#user-score");
let compscore_no=document.querySelector("#comp-score");


const gencompchoice=()=>{
    let options=["rock","paper", "scissors"];
    const randomindex= Math.floor(Math.random()* 3);
    return options[randomindex];
}
const drawgame= ()=>{
    console.log("It's a tie!");
    msg.innerText="It's a tie! Play Again";
    msg.style.backgroundColor="blue";
}
const show_winner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        // console.log("You Win!");
        userscore++;
        userscore_no.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        // console.log("You Lose!");
        compscore++;
        compscore_no.innerText=compscore;
        msg.innerText=`You loose! Computer's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame= (userchoice)=>{
    console.log("user choice", userchoice );
    const compchoice= gencompchoice();
    console.log("comp choice", compchoice);

    if(userchoice==compchoice){
       drawgame();
    }
    else{
        let userwin=true;

        if(userchoice=="rock"){
            userwin= compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissor"? false: true;
        }
        else {
            userwin=compchoice=="rock"?false :true;
        }
        show_winner(userwin, userchoice, compchoice);
        

    }
}

choices.forEach((choice)=>{
    // console.log(choices);
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
        console.group("clicked", userchoice);
        playgame(userchoice);
    })

})
    
    
