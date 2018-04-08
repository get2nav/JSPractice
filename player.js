var leftInput = document.getElementById("left-input");
var rightInput = document.getElementById("right-input");

var leftLoop;
var rightLoop;

function pause() {
    clearInterval(leftLoop);
    clearInterval(rightLoop);
};


function towards_right() {
    clearInterval(leftLoop);
    clearInterval(rightLoop);

    leftLoop = setInterval(function () {
        if (leftInput.value.length !== 0) {
            rightInput.value += leftInput.value.slice(0, 1);
            leftInput.value = leftInput.value.slice(1, leftInput.value.length);
            rightInput.value = rightInput.value;
            leftInput.value = leftInput.value;
        } else {
            clearInterval(leftLoop);
        }
    }, 1000);
};

<<<<<<< HEAD
/* moves the text from right textbox to left textbox */
function rightToLeft(){ 
||||||| 0986687... Final commit
/* moves the text from right textbox to left textbox */
function rightToLeft(){
    clearInterval(leftLoop);
=======
function towards_left(){
    clearInterval(leftLoop);
>>>>>>> parent of 0986687... Final commit
    clearInterval(rightLoop);
    clearInterval(leftLoop);
    
    rightLoop = setInterval(function () {
        if (rightInput.value.length !== 0) {
<<<<<<< HEAD
            // leftInput.value += rightInput.value.slice(rightInput.value.length - 1, rightInput.value.length);
            // rightInput.value = rightInput.value.slice(0, rightInput.value.length - 1);
            leftInput.value += rightInput.value.slice(0, 1);
            rightInput.value = rightInput.value.slice(1, rightInput.value.length);
||||||| 0986687... Final commit
            leftInput.value += rightInput.value.slice(rightInput.value.length - 1, rightInput.value.length);
            rightInput.value = rightInput.value.slice(0, rightInput.value.length - 1);
=======
            leftInput.value = rightInput.value.slice(rightInput.value.length - 1, rightInput.value.length) + leftInput.value;
            rightInput.value = rightInput.value.slice(0, rightInput.value.length - 1);
            rightInput.value = rightInput.value;
            leftInput.value = leftInput.value;
>>>>>>> parent of 0986687... Final commit
        } else {
            clearInterval(rightLoop);
        }
    }, 1000);
};
