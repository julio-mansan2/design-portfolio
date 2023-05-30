const pictures = document.querySelectorAll('.picture')
var i = 0;

function move (n) {
    if (i === 2 && n > 0) {
        n = 0
    } else if (i === -2 && n < 0) {
        n = 0
    }

    if (n !== 0) {
        i += n
        pictures.forEach (item => item.style.transform = "translateX(" + i * 105.55 + "%)")
    }
}