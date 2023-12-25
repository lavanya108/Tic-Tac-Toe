let boxes=document.querySelectorAll(".boxes");
let container=document.querySelector(".container");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let turnO= true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,8],
]
let resetGame=()=>{
    enableBoxes();
    turnO=true;
    msgContainer.classList.add("hide"); 
}
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showMsg=(winner)=>{
    msg.innerText=`congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.classList.add("forO");
        } else{
            box.classList.add("forX");
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    })
})
const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                showMsg(pos1val);
            }
        }
    }
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
