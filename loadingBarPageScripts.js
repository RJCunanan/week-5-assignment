let startLoading = false;
let timeInterval = 100;

const startLoadingBar = () => {
    if (startLoading == false) {
        startLoading = true;
        let currentProgress = 0;
        let id = setInterval(loading, timeInterval);
        function loading() {
            if (currentProgress >= 100) {
                clearInterval(id);
                startLoading = false;
            }
            else {
                currentProgress++;
                document.getElementById("progress").style.width = currentProgress + "%";
            }
        }
    }
}

const decreaseSpeed = () => {
    if (timeInterval >= 1000) {
        timeInterval = 1000;
    }
    else {
        timeInterval += 50;
    }
}

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