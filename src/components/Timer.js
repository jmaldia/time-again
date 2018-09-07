let timer = 0;

function myTime(minutes) {
    let min = minutes;
    while (min > 0) {
        while (timer < 5) {
            setInterval(() => {
                timer++;
            }, 1000);
        }
        min--;
        console.log(`${min} minutes to go`);
    }
}

myTime(5);