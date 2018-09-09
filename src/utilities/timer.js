let timer = 0;
let counter;

function myTime(minutes, repeatCount) {
    let repeat = repeatCount;
    let min = minutes;

    console.log(`The timer will repeat ${repeat} more times`);

    let countUp = setInterval(() => {
        timer++;
        console.log(timer);

        if (timer === 60) {
            clearInterval(countUp);
            timer = 0;
            repeat--;
            min--;
            if (repeat > 0) {
                myTime(min, repeat);
            }
        }
    }, 1000);
}


myTime(1, 2);