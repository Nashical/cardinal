var date = 1;
var totalDays = 30;

var player = new Player(
                        /*balance*/ 1000,
                        /*housing*/ null,
                        /*carType*/ null,
                        /*numChildren*/ 2,
                        /*jobType*/ null
                        );

var currentNode = introNode;

function diagInit(){
    updatePrompt(currentNode);
    updateBal(0);
    updateLOption(currentNode);
    updateROption(currentNode);
}

function updatePrompt(node){
    document.getElementById("game-dialog").innerHTML = node.promp;
}

function updateLOption(node) {
    document.getElementById("leftOption").innerHTML = node.lChoice;
}

function updateROption(node) {
    document.getElementById("rightOption").innerHTML = node.rChoice;
}

function updateBal(amount) {
    player.balance = player.balance + amount;
    document.getElementById("game-balance").innerHTML = "Balance: $" + player.balance.toString();
}

function updateDate(){
    document.getElementById("game-date").innerHTML = "Day " + date;
    date = date + 1;
}



function changeLOp() {
  
    updateBal(currentNode.lCost);
  
    if(currentNode.leftChild == null){
        if(currentNode.rightChild == null){
            return result
        }
      
        else{
            currentNode = currentNode.rightChild;
        }
    }
  
    else{
        currentNode = currentNode.leftChild;
    }  
  
    updatePrompt(currentNode);
    updateDate();
    updateLOption(currentNode);
    updateROption(currentNode);
    
    checkLoss();
    checkWin();
}



function changeROp() {
  
    updateBal(currentNode.rCost);
  
    if(currentNode.rightChild == null){
        if (currentNode.leftChild == null){
            return result
        }
      
        else{
            currentNode = currentNode.leftChild;
        }
    }
  
    else{
        currentNode = currentNode.rightChild;
    }
  
    updatePrompt(currentNode);
    updateDate();
    updateLOption(currentNode);
    updateROption(currentNode);
    
    checkLoss();
    checkWin(); 
}



function checkLoss(){
    if (player.balance <= 0){
        end();
        document.getElementById("ending-result").innerHTML = "You Lose!";
        document.getElementById("ending-dialog").innerHTML = "Your savings drop below $0 and you fall into debt.<br>Your Savings: $" + player.balance + "<br>Days survived: " + date;
    }
}

function checkWin() {
    if (date > totalDays){
        end();
        document.getElementById("ending-result").innerHTML = "You Win!";
        document.getElementById("ending-dialog").innerHTML = "You have made great choices throughout the month and both you and your children survive!<br>Your Savings: $" + player.balance + "<br>Days survived: " + date;
    }

}

function showSucc(){
  var failBtn = document.getElementById("alert-fail");
  failBtn.style.display = "none";
  var succBtn = document.getElementById("alert-succ");
  succBtn.style.display = "block";
}

function showFail(){
  var succBtn = document.getElementById("alert-succ");
  succBtn.style.display = "none";
  var failBtn = document.getElementById("alert-fail");
  failBtn.style.display = "block";
}