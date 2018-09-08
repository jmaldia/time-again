let timer = 0;

function myTime(minutes) {
    for (let min = 0; min < minutes; min++) {
        let countUp = setInterval(() => {
            timer++;
            console.log(timer);

            if (timer === 5) {
                clearInterval(countUp);
            }
        }, 1000);
    };
}

myTime(5);