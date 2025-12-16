//.....................ROCK PAPER SCISSOR........................
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gen_comp_choice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];

}
const drawgame = () => {
    console.log("GAME DRAW !!");
    msg.innerText = "Draw...Play Again...";
    msg.style.backgroundColor = "goldenrod";
};
const show_winner = (userwin, userschoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You Win!!..${userschoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText = `You loose!!..${compchoice} beats ${userschoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userschoice) => {
    console.log("users choice is : ", userschoice)
    // generate computers choice :
    const compchoice = gen_comp_choice();
    console.log("computers choice is : ", compchoice);
    if (userschoice == compchoice) {
        // draw game
        drawgame();
    }
    else {
        let userwin = true;
        if (userschoice === "rock") {
            // comp choice: paper or scissor
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userschoice === "paper") {
            // comp choice: rock or scissor
            userwin = compchoice === "rock" ? true : false;
        }
        else {
            // rock or paper
            userwin = compchoice === "rock" ? false : true;
        }
        show_winner(userwin, userschoice, compchoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userschoice = choice.getAttribute("id");
        playgame(userschoice);
    });
});