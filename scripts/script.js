const dropButton = document.getElementById('dropbtn');
const dropContent = document.getElementById('dropdown-content')


dropButton.addEventListener('click', () => {
    dropContent.classList.toggle('hide');
});

document.addEventListener('click', Event => {
    if (!dropContent.contains(Event.target) && Event.target !== dropButton) {
        dropContent.classList.add('hide');
    };
});