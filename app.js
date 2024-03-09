(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('selected'));
        contents.forEach(c => c.classList.remove('selected'));
        tab.classList.add('selected');
        const contentId = tab.textContent.toLowerCase().replace(/\s/g, '-');
        document.getElementById(contentId).classList.add('selected');
    });
    });

    const portTab = document.querySelectorAll('.port-tab');
    const portContent = document.querySelectorAll('.port-content');

    portTab.forEach(tab => {
        tab.addEventListener('click', () => {
        portTab.forEach(t => t.classList.remove('selected'));
        portContent.forEach(c => c.classList.remove('selected'));
        tab.classList.add('selected');
        const contentId = tab.textContent.toLowerCase().replace(/\s/g, '-');
        document.getElementById(contentId).classList.add('selected');
    });
    });
})();
