let user_seq = [];
let game_seq = [];
let level = 0;
let started = false;
let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}
function user_flash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp() {
    user_seq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randIdx];

    let randbutton = document.querySelector(`.${randcolor}`);
    game_seq.push(randcolor);
    console.log(game_seq)
    gameflash(randbutton);
}
function check(idx){
    if(user_seq[idx]==game_seq[idx]){
        if(user_seq.length==game_seq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`gameover! your score was <b> ${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnpress(){
    console.log(this)
    let btn =this;
    user_flash(btn);
    usercolor=btn.getAttribute("id");
    user_seq.push(usercolor);
    check(user_seq.length-1);
}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    started=false;
    game_seq=[];
    user_seq=[];
    level=0;
}