const fanBlades = document.querySelector('.fan-blades');
const fanOnBtn = document.getElementById('fanon');
const fastFan = document.getElementById('fanfast');
const onBtn = document.getElementById('fanon');
const fastBtn = document.getElementById('fanfast');

fanOnBtn.addEventListener('click', () => {
    fanBlades.classList.remove('fast-animate')
    fanBlades.classList.toggle('animate');
    onBtn.classList.toggle('active');
    fastBtn.classList.remove('active');
});

fastFan.addEventListener('click', () => {
    fanBlades.classList.toggle('fast-animate');
    fastBtn.classList.toggle('active');
});
