const fanBlades = document.querySelector('.fan-blades');
const fanOnBtn = document.getElementById('fanon');
const fastFan = document.getElementById('fanfast');
const onBtn = document.getElementById('fanon');
const fastBtn = document.getElementById('fanfast');

let x = undefined;

fanOnBtn.addEventListener('click', () => {
    fanBlades.classList.remove('fast-animate')
    fanBlades.classList.toggle('animate');
    onBtn.classList.toggle('active');
    fastBtn.classList.remove('active');
    if (x == undefined || x == false) {
        x = true;
    }
    else if (x == true) {
        x = false;
    }
});

fastFan.addEventListener('click', (e) => {
    if (x == true) {
        fanBlades.classList.toggle('fast-animate');
        fastBtn.classList.toggle('active');
    }
    else{
        
        e.preventDefault();
    }
});
