const container = document.querySelector('.container');

for (let i = 0; i < 50; i++) {
    let dock = document.createElement('div');
    dock.classList.add('hot');
    container.appendChild(dock)
}

const upDock = document.querySelectorAll('.hot')
function setColor() {
    upDock.forEach((dock) => {
        const randomColorCode = randomColorGenerate();
        dock.style.backgroundColor = "#" + randomColorCode;
        dock.innerHTML = '#' + randomColorCode;

    })
}
setColor();

function randomColorGenerate() {
    const charSet = '0123456789abcdef';
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const random = Math.floor(Math.random() * charSet.length);
        colorCode = colorCode + charSet.substring(random, random + 1);
    }
    return colorCode;
}
randomColorGenerate();
