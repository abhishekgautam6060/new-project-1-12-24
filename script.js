
document.getElementById("hamburger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});


document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});


document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat h2");
    stats.forEach((stat) => {
        let count = 0;
        const target = +stat.textContent;
        const interval = setInterval(() => {
            if (count < target) {
                count += 1;
                stat.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 15);
    });
});


document.getElementById('requirement').addEventListener('change', function () {
    const requirement = this.value;
    const descriptionContainer = document.getElementById('descriptionContainer');
    const resumeContainer = document.getElementById('resumeContainer');

    // Reset visibility
    descriptionContainer.classList.add('hidden');
    resumeContainer.classList.add('hidden');

    if (requirement === 'jobseeker') {
        resumeContainer.classList.remove('hidden'); // Show Resume Upload
    } else if (requirement === 'hireDeveloper' || requirement === 'enquiry') {
        descriptionContainer.classList.remove('hidden'); // Show Description
    }
});
