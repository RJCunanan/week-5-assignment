let startLoading = false;
let timeInterval = 100;

// Creates the animation that the loading bar is filling up
// Using a JavaScript timer:
const startLoadingBar = () => {
    let currentProgress = 0;
    function loading() {
        if (currentProgress >= 100) {
            clearInterval(id);
        }
        else {
            currentProgress++;
            document.getElementById("progress").style.width = currentProgress + "%";
        }
    }
    let id = setInterval(loading, timeInterval);
}

// Decreases the speed of the loading bar:
const decreaseSpeed = () => {
    if (timeInterval >= 1000) {
        timeInterval = 1000;
    }
    else {
        timeInterval += 50;
    }
}

// Increases the speed of the loading bar:
const increaseSpeed = () => {
    if (timeInterval <= 10) {
        timeInterval = 10;
    }
    else if (timeInterval <= 100) {
        timeInterval -= 50;
    }
    else {
        timeInterval -= 100;
    }
}