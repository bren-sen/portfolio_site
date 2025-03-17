//nav bar dropdown
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

//project focus  to improve: 1 function for all projects
const proj = document.getElementById('project1');

const projFocus = () => {
    if (document.getElementById('focus-box').style.opacity == 0) {
        document.getElementById('focus-box').style.opacity= '0.7';
        document.getElementById('focus-box').style.zIndex= '2';
        document.getElementById('project1').style.zIndex= '3';
    } else {
        document.getElementById('focus-box').style.opacity= '0';
        document.getElementById('focus-box').style.zIndex= '-1';
        document.getElementById('project1').style.zIndex= '1';
    }
};

proj.addEventListener('click', projFocus);

document.addEventListener('click', Event => {
    if (!proj.contains(Event.target)) {
        document.getElementById('focus-box').style.opacity= '0';
        document.getElementById('focus-box').style.zIndex= '-1';
        document.getElementById('project1').style.zIndex= '1';
    }
})