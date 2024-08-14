let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    console.log(choices);
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
        console.group("clicked", userchoice);
    })

})
    
    
