// player choice...
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scrr = document.getElementById("scissors");


// computer choice...
let rock2 = document.getElementById("rock2");
let paper2 = document.getElementById("paper2");
let scrr2 = document.getElementById("scissors2");


// result...
let result = document.querySelector("center");


// selection...
rock.addEventListener("mouseover", () => {
    rock.setAttribute("class", "img2");
})
rock.addEventListener("mouseout", () => {
    rock.setAttribute("class", "img1");
})
paper.addEventListener("mouseover", () => {
    paper.setAttribute("class", "img2");
})
paper.addEventListener("mouseout", () => {
    paper.setAttribute("class", "img1");
})
scrr.addEventListener("mouseover", () => {
    scrr.setAttribute("class", "img2");
})
scrr.addEventListener("mouseout", () => {
    scrr.setAttribute("class", "img1");
})



// wait...
function gameOver(msg, delay) {
    setTimeout(() => {
        result.innerHTML = "<br><div style='background-color: aqua; color: red; margin-top: 50px;'><h1>Game Over</h1>" + "<h1>" + msg + "</h1></div>";
    }, delay);
}



// match..
function matchDraw() {
    gameOver("Match Draw..", 2000);
}

function matchWon() {
    gameOver("You Won the Match..", 2000);

}

function matchLose() {
    gameOver("You Lose the Match..", 2000);
}


//main game....
var player = "";
rock.addEventListener("click", () => {
    rock.setAttribute("class", "img3");
    player = "rock";

    let options = ["rock2", "paper2", "scissors2"];
    let selected = options[Math.floor(Math.random() * options.length)];
    
    console.log("player -> "+player);
    console.log("computer -> "+selected);

    if (selected == "rock2") {
        // draw..
        rock2.setAttribute("class", "img3");
        matchDraw();
    }
    else if (selected == "paper2") {
        // lose...
        paper2.setAttribute("class", "img3");
        matchLose();
    }
    else if (selected == "scissors2") {
        // won..
        scrr2.setAttribute("class", "img3");
        matchWon();
    }



})
paper.addEventListener("click", () => {

    paper.setAttribute("class", "img3");
    player = "paper";

    let options = ["rock2", "paper2", "scissors2"];
    let selected = options[Math.floor(Math.random() * options.length)];
    console.log("player -> "+player);
    console.log("computer -> "+selected);

    if (selected == "paper2") {
        // draw..
        paper2.setAttribute("class", "img3");
        matchDraw();
    }
    else if (selected == "scissors2") {
        // lose...
        scrr2.setAttribute("class", "img3");
        matchLose();
    }
    else if (selected == "rock2") {
        // won..
        rock2.setAttribute("class", "img3");
        matchWon();
    }

})
scrr.addEventListener("click", () => {

    scrr.setAttribute("class", "img3");
    player = "scrr";

    let options = ["rock2", "paper2", "scissors2"];
    let selected = options[Math.floor(Math.random() * options.length)];

    console.log("player -> "+player);
    console.log("computer -> "+selected);

    if (selected == "scissors2") {
        // draw..
        scrr2.setAttribute("class", "img3");
        matchDraw();
    }
    else if (selected == "rock2") {
        // lose...
        rock2.setAttribute("class", "img3");
        matchLose();
    }
    else if (selected == "paper2") {
        // won..
        paper2.setAttribute("class", "img3");
        matchWon();
    }

})










