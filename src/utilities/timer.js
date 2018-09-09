let timer = 0;
let counter;

function myTime(repeatTimerCount) {
    let countDown = repeatTimerCount;

    console.log(`The timer will repeat ${countDown} more times`);

    let countUp = setInterval(() => {
        timer++;
        console.log(timer);

        if (timer === 6) {
            clearInterval(countUp);
            timer = 0;
            countDown--;
            if (countDown > 0) {
                myTime(countDown);
            }
        }
    }, 1000);
}


myTime(5);