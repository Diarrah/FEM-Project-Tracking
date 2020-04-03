let mobile__nav = document.querySelector('.mobile__nav');
let { body } = document;

mobile__nav.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('show');
});