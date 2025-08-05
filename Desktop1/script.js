const btn = document.getElementById('first-btn');
const title = document.getElementById('main-title');

// ტექსტის ფორმატირების ფუნქცია: პირველი ასო დიდი, დანარჩენი პატარა
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

btn.addEventListener('mouseenter', () => {
    btn.classList.add('hovered');
    title.textContent = capitalize('web-development');
});

btn.addEventListener('mouseleave', () => {
    btn.classList.remove('hovered');
    title.textContent = 'WEB-DEVELOPMENT';
});
