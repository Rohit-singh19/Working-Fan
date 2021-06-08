const fanBlades = document.querySelector('.fan-blades');
const fanOnBtn = document.getElementById('fanon');
const fastFan = document.getElementById('fanfast');

let x = undefined;

fanOnBtn.addEventListener('click', () => {
    fanBlades.classList.remove('fast-animate')
    fanBlades.classList.toggle('animate');
    fanOnBtn.classList.toggle('active');
    fastFan.classList.remove('active');
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
        fastFan.classList.toggle('active');
    }
    else{
        
        e.preventDefault();
    }
});
