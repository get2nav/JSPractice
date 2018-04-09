/* DOM for getting the texts */
var leftInput = document.getElementById("left-input");
var rightInput = document.getElementById("right-input");

/* Function variable for setInterval(Global)*/
var leftLoop;
var rightLoop;

/* Pauses the text transfer */
function pause() {
    clearInterval(leftLoop); 
    clearInterval(rightLoop);
};

/* Moves the text from left textbox to right textbox */
function leftToRight() {
    clearInterval(leftLoop);
    clearInterval(rightLoop);

    leftLoop = setInterval(function () {
        if (leftInput.value.length !== 0) {
            rightInput.value = rightInput.value + leftInput.value.slice(0, 1);
            leftInput.value = leftInput.value.slice(1, leftInput.value.length);
        } else {
            clearInterval(leftLoop);
        }
    }, 1000);
};

/* moves the text from right textbox to left textbox */
function rightToLeft(){ 
    clearInterval(rightLoop);
    clearInterval(leftLoop);
    
    rightLoop = setInterval(function () {
        if (rightInput.value.length !== 0) {
            leftInput.value = rightInput.value.slice(rightInput.value.length - 1, rightInput.value.length) + leftInput.value;
            rightInput.value = rightInput.value.slice(0, rightInput.value.length - 1);
        } else {
            clearInterval(rightLoop);
        }
    }, 1000);
};
