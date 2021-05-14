var diceNum;
var turn = -1;
var spin = false;
var chance = 0;

var redStepCount = [0, 0, 0, 0];
var greenStepCount = [0, 0, 0, 0];
var yellowStepCount = [0, 0, 0, 0];
var blueStepCount = [0, 0, 0, 0];

const redHome = ['r1','r2','r3','r4'];
const greenHome = ['g1','g2','g3','g4'];
const yellowHome = ['y1','y2','y3','y4'];
const blueHome = ['b1','b2','b3','b4'];

const greenMoves = ['b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16', 'b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b53','b54','b55','b56','b57','home'];
const yellowMoves = ['b15','b16', 'b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b58','b59','b60','b61','b62','home'];
const blueMoves = ['b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16', 'b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b63','b64','b65','b66','b67','home'];
const redMoves = ['b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16', 'b17','b18','b19','b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39','b68','b69','b70','b71','b72','home'];

function rollDice() {
  const num = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"];
    turn+=1;
  diceNum = Math.floor((Math.random() * 6) + 1);

  document.getElementById("diceImg").src = "image/" + num[diceNum - 1];

  spin = true;
    if(turn%4 === 0){
        document.getElementById('txt').innerHTML = "red's Turn";
        // document.getElementByClassName("red-goti").style.zIndex ="1";
        // document.getElementByClassName("green-goti").style.zIndex ="-1";
        // document.getElementByClassName("yellow-goti").style.zIndex ="-1";
        // document.getElementByClassName("blue-goti").style.zIndex ="-1";
    }
    else if(turn%4 === 1){
        document.getElementById('txt').innerHTML = "Green's turn";
        // document.getElementByClassName("red-goti").style.zIndex ="-1";
        // document.getElementByClassName("green-goti").style.zIndex ="1";
        // document.getElementByClassName("yellow-goti").style.zIndex ="-1";
        // document.getElementByClassName("blue-goti").style.zIndex ="-1";
    }
    else if(turn%4 === 2){
        document.getElementById('txt').innerHTML = "Yellow's turn";
        // document.getElementByClassName("red-goti").style.zIndex ="-1";
        // document.getElementByClassName("green-goti").style.zIndex ="-1";
        // document.getElementByClassName("yellow-goti").style.zIndex ="1";
        // document.getElementByClassName("blue-goti").style.zIndex ="-1";
    }
    else{
        document.getElementById('txt').innerHTML = "Blue's turn";
        // document.getElementByClassName("red-goti").style.zIndex ="-1";
        // document.getElementByClassName("green-goti").style.zIndex ="-1";
        // document.getElementByClassName("yellow-goti").style.zIndex ="-1";
        // document.getElementByClassName("blue-goti").style.zIndex ="1";
    }

}

function kill(parent, color, gotiIndex){
    let goti = document.getElementById(parent).children[0].id;
    // console.log('child ' + child);
    let oldParent = document.getElementById(parent);
    let newParent;

    if(color.charAt(0) === goti.charAt(0)){
        return
    }else{
        if(goti.charAt(0) === 'r'){
            newParent = document.getElementById(redHome[gotiIndex]);
            oldParent.removeChild(goti);
            newParent.appendChild(goti);
        }
        else if (goti.charAt(0) === 'g'){
            newParent = document.getElementById(redHome[gotiIndex]);
            oldParent.removeChild(goti);
            newParent.appendChild(goti);
        }
        else if (goti.charAt(0) === 'y'){
            newParent = document.getElementById(redHome[gotiIndex]);
            oldParent.removeChild(goti);
            newParent.appendChild(goti);
        }
        else {
            newParent = document.getElementById(redHome[gotiIndex]);
            oldParent.removeChild(goti);
            newParent.appendChild(goti);
        }
    }
}

function changePosition(element, color){
      let gotiIndex;
      let moveNum;
      let moveIndex;
      let parent;
      let oldP;
      let newP;

      let goti = document.getElementById(element);

      gotiNum = element.charAt(element.length - 1);

      gotiIndex = gotiNum - 1;

    if (color === "red" && turn%4 === 0 && spin === true) {
        goti.style.position = "absolute";

        oldP = document.getElementById(goti.parentNode.id);
        // console.log(goti.parentNode.id);

        if(redStepCount[gotiIndex] === 0 && diceNum === 6){
            oldP.removeChild(goti);
            moveIndex = redMoves[0];
            // console.log("moveIndex " + moveIndex);
            newP = document.getElementById(moveIndex);
            newP.appendChild(goti);
            // document.getElementById(element).style.left = 39 + 'px';
            // document.getElementById(element).style.top = 288 + 'px';
            redStepCount[gotiIndex] += 1;
            turn-=1;
            spin = false;
        }
        else if(redStepCount[gotiIndex] != 0){

            redStepCount[gotiIndex] += diceNum;
            moveNum = redStepCount[gotiIndex] - 1;
            moveIndex = redMoves[moveNum];

            if(redStepCount[gotiIndex] > redMoves.length){
                redStepCount[gotiIndex] -= diceNum;
                alert("Can not move!!");
            }
            else{
                // document.getElementById(element).style.left = moveIndex.left;
                // document.getElementById(element).style.top = moveIndex.top;

                oldP.removeChild(goti);
                moveIndex = redMoves[redStepCount[gotiIndex] -1];
                // console.log("moveIndex " + moveIndex);
                newP = document.getElementById(moveIndex);
                var count = document.getElementById(moveIndex).childElementCount;
                if(count === 1){
                    kill(moveIndex, color, gotiIndex);
                }
                newP.appendChild(goti);

                if(redStepCount[gotiIndex] === redMoves.length){
                    alert("reached home");
                    newP.removeChild(goti);
                }
                if(redStepCount[0] === redMoves.length && redStepCount[1] === redMoves.length && redStepCount[2] === redMoves.length && redStepCount[3] === redMoves.length){
                    alert("Hurray!!! Green Won the Game");
                    location.reload();
                }

                spin = false;

                if(diceNum === 6){
                    turn-= 1;
                }
            }

        }

    } 
    else if (color === "green" && turn%4 === 1 && spin === true) {

        goti.style.position = "absolute";

        oldP = document.getElementById(goti.parentNode.id);
        // console.log(goti.parentNode.id);

        if(greenStepCount[gotiIndex] === 0 && diceNum === 6){
            oldP.removeChild(goti);
            moveIndex = greenMoves[0];
            // console.log("moveIndex " + moveIndex);
            newP = document.getElementById(moveIndex);
            newP.appendChild(goti);
            // document.getElementById(element).style.left = 39 + 'px';
            // document.getElementById(element).style.top = 288 + 'px';
            greenStepCount[gotiIndex] += 1;
            turn-=1;
            spin = false;
        }
        else if(greenStepCount[gotiIndex] != 0){

            greenStepCount[gotiIndex] += diceNum;
            moveNum = greenStepCount[gotiIndex] - 1;
            moveIndex = greenMoves[moveNum];

            if(greenStepCount[gotiIndex] > greenMoves.length){
                greenStepCount[gotiIndex] -= diceNum;
                alert("Can not move!!");
            }
            else{
                // document.getElementById(element).style.left = moveIndex.left;
                // document.getElementById(element).style.top = moveIndex.top;

                oldP.removeChild(goti);
                moveIndex = greenMoves[greenStepCount[gotiIndex] -1];
                // console.log("moveIndex " + moveIndex);
                newP = document.getElementById(moveIndex);

                var count = document.getElementById(moveIndex).childElementCount;
                if(count === 1){
                    kill(moveIndex, color, gotiIndex);
                }

                newP.appendChild(goti);

                if(greenStepCount[gotiIndex] === greenMoves.length){
                    alert("reached home");
                    newP.removeChild(goti);
                }
                if(greenStepCount[0] === greenMoves.length && greenStepCount[1] === greenMoves.length && greenStepCount[2] === greenMoves.length && greenStepCount[3] === greenMoves.length){
                    alert("Hurray!!! Green Won the Game");
                    location.reload();
                }

                spin = false;

                if(diceNum === 6){
                    turn-= 1;
                }
            }
        }
    } 
    else if (color === "yellow" && turn%4 === 2 && spin === true) {
        goti.style.position = "absolute";

        oldP = document.getElementById(goti.parentNode.id);
        // console.log(goti.parentNode.id);

        if(yellowStepCount[gotiIndex] === 0 && diceNum === 6){
            oldP.removeChild(goti);
            moveIndex = yellowMoves[0];
            // console.log("moveIndex " + moveIndex);
            newP = document.getElementById(moveIndex);
            newP.appendChild(goti);
            // document.getElementById(element).style.left = 39 + 'px';
            // document.getElementById(element).style.top = 288 + 'px';
            yellowStepCount[gotiIndex] += 1;
            turn-=1;
            spin = false;
        }
        else if(yellowStepCount[gotiIndex] != 0){

            yellowStepCount[gotiIndex] += diceNum;
            moveNum = yellowStepCount[gotiIndex] - 1;
            moveIndex = yellowMoves[moveNum];

            if(yellowStepCount[gotiIndex] > yellowMoves.length){
                yellowStepCount[gotiIndex] -= diceNum;
                alert("Can not move!!");
            }
            else{
                // document.getElementById(element).style.left = moveIndex.left;
                // document.getElementById(element).style.top = moveIndex.top;

                oldP.removeChild(goti);
                moveIndex = yellowMoves[yellowStepCount[gotiIndex] -1];
                // console.log("moveIndex " + moveIndex);
                newP = document.getElementById(moveIndex);

                var count = document.getElementById(moveIndex).childElementCount;
                if(count === 1){
                    kill(moveIndex, color, gotiIndex);
                }

                newP.appendChild(goti);

                if(yellowStepCount[gotiIndex] === yellowMoves.length){
                    alert("reached home");
                    newP.removeChild(goti);
                }
                if(yellowStepCount[0] === yellowMoves.length && yellowStepCount[1] === yellowMoves.length && yellowStepCount[2] === yellowMoves.length && yellowStepCount[3] === yellowMoves.length){
                    alert("Hurray!!! Green Won the Game");
                    location.reload();
                }

                spin = false;

                if(diceNum === 6){
                    turn-= 1;
                }
            }
        }
    } 

    else if (color === "blue" && turn%4 === 3 && spin === true) {
        goti.style.position = "absolute";

        oldP = document.getElementById(goti.parentNode.id);
        // console.log(goti.parentNode.id);

        if(blueStepCount[gotiIndex] === 0 && diceNum === 6){
            oldP.removeChild(goti);
            moveIndex = blueMoves[0];
            // console.log("moveIndex " + moveIndex);
            newP = document.getElementById(moveIndex);
            newP.appendChild(goti);
            // document.getElementById(element).style.left = 39 + 'px';
            // document.getElementById(element).style.top = 288 + 'px';
            blueStepCount[gotiIndex] += 1;
            turn-=1;
            spin = false;
        }
        else if(blueStepCount[gotiIndex] != 0){

            blueStepCount[gotiIndex] += diceNum;
            moveNum = blueStepCount[gotiIndex] - 1;
            moveIndex = blueMoves[moveNum];

            if(blueStepCount[gotiIndex] > blueMoves.length){
                blueStepCount[gotiIndex] -= diceNum;
                alert("Can not move!!");
            }
            else{
                // document.getElementById(element).style.left = moveIndex.left;
                // document.getElementById(element).style.top = moveIndex.top;

                oldP.removeChild(goti);
                moveIndex = blueMoves[blueStepCount[gotiIndex] -1];
                // console.log("moveIndex " + moveIndex);
                newP = document.getElementById(moveIndex);
                
                var count = document.getElementById(moveIndex).childElementCount;
                if(count === 1){
                    kill(moveIndex, color, gotiIndex);
                }

                newP.appendChild(goti);

                if(blueStepCount[gotiIndex] === blueMoves.length){
                    alert("reached home");
                    newP.removeChild(goti);
                }
                if(blueStepCount[0] === blueMoves.length && blueStepCount[1] === blueMoves.length && blueStepCount[2] === blueMoves.length && blueStepCount[3] === blueMoves.length){
                    alert("Hurray!!! Green Won the Game");
                    location.reload();
                }

                spin = false;

                if(diceNum === 6){
                    turn-= 1;
                }
            }
        }
    }
}