let timer = 0;

function myTime(minutes) {
    for (let min = 0; min < minutes; min++) {
        setInterval(() => {
            if (timer < 5) {
                timer++;
                console.log(timer);
            } else {
                timer = 0;
                clearInterval();
            }
        }, 1000);
        console.log(`${min} minutes to go`);
    }
}

myTime(5);