// home page //

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    console.log(panel);
    panel.addEventListener('click', changeClass);
});

function changeClass(event) { 
    console.log(event);           
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    event.target.classList.add('active');
}

function openProject(event) {
    console.log(event);
}

// project page //

