const barIcon = document.getElementById('bars');
const ul = document.querySelector('.container > ul');

let ulVisible = false;

barIcon.addEventListener('click', () => {
    ulVisible = !ulVisible;
    ul.style.display = ulVisible ? 'flex' : 'none';
})