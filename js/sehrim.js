    document.addEventListener("DOMContentLoaded", function() {
        var fotoLinks = document.querySelectorAll(".slider a");
        fotoLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için
                var href = this.getAttribute("href");
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    });
