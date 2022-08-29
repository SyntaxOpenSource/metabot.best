const popup = document.querySelector('.popup');
const closeBTN = document.querySelector('.popup > img');

const buttons = [
    document.getElementById('wiki'),
    document.getElementById('twitter'),
    document.getElementById('youtube')
];

buttons.map(element => {
    element.addEventListener('click', () => {
        popup.style.display = 'block'
    });
});

closeBTN.addEventListener('click', () => {
    popup.style.display = 'none'
});