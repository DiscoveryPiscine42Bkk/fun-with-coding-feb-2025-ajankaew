document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    // Smooth scrolling functionality
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 56,
                    behavior: "smooth"
                });
            }
        });
    });

    // Active link highlighting
    window.addEventListener("scroll", function () {
        let currentSection = "";
        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop - 56;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});
