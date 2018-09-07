let counter = 0;
let timer = 0;

function myTime(minutes) {
    while (minutes > 0) {
        setInterval(() => {
            timer++;
        }, 1000);
    }
}