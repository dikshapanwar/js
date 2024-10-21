const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const colorRandomValue = Math.floor(Math.random() * 16); // Move this inside the loop
        color += hex[colorRandomValue];
    }
    return color;
};

console.log(randomColor());

const startChangingColor = function () {
    document.body.style.backgroundColor = randomColor();
};

let intervalId = setInterval(startChangingColor, 1000);

document.querySelector('#start').addEventListener('click', function () {
    intervalId = setInterval(startChangingColor, 1000); // Reset interval when start is clicked
});

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId);
});
