const text = document.getElementById('text');
setInterval(updater, 8000);
function updater(){
    setTimeout(() => {
        text.innerHTML = "Nafas oling";
    }, 0);
    setTimeout(() => {
        text.innerHTML = "Nafasni tuting";
    }, 3000);
    setTimeout(() => {
        text.innerHTML = "Nafas chiqaring";
    }, 4600);
}
updater();
